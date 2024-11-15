"use client";

import { UserContext } from "@/context/UserContext";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const UploadPres = () => {
    const { session } = useContext(UserContext);
    const router = useRouter();
    const [dragActive, setDragActive] = useState(false);
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFiles((prevFiles) => [...prevFiles, selectedFile]);
            setFile(selectedFile);
        }
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            setFiles((prevFiles) => [...prevFiles, droppedFile]);
            setFile(droppedFile);
        }
    };

    const removeFile = (fileName, idx) => {
        setFiles((prevFiles) => prevFiles.filter((_, index) => index !== idx));
        if (file?.name === fileName) {
            setFile(null);
        }
    };

    const handleUpload = async () => {
        if (file) {
            setUploading(true);

            const formData = new FormData();
            formData.append('pdfFile', file);

            const { data: { session }, error: sessionError } = await supabase.auth.getSession();

            if (sessionError) {
                setError("Failed to retrieve session.");
                setUploading(false);
                return;
            }

            const access_token = session?.access_token;
            const refresh_token = session?.refresh_token;

            if (!access_token || !refresh_token) {
                setError("You must be logged in to upload a prescription.");
                setUploading(false);
                return;
            }

            try {
                const response = await fetch('/api/prescriptions/create', {
                    method: 'POST',
                    headers: {
                        'x-supabase-auth': `${access_token} ${refresh_token}`,
                    },
                    body: formData,
                });

                const data = await response.json();

                if (response.ok) {
                    setSuccess(data.message);
                } else {
                    setError(data.error);
                }
            } catch (error) {
                setError('An error occurred while uploading the prescription.');
            } finally {
                setUploading(false);
                setUploadProgress(0);
                setFile(null);
            }
        }
    };

    useEffect(() => {
        if (session?.data.session) {
            router.push("/upload-prescription");
        }
    }, [session]);

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleUpload();
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="flex items-center justify-center w-full">
                <label
                    htmlFor="dropzone-file"
                    className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ${
                        dragActive ? "border-blue-500" : ""
                    }`}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                    }}
                    onDrop={handleFileDrop}
                    onDragEnter={() => setDragActive(true)}
                    onDragLeave={() => setDragActive(false)}
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PDF only</p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleChange}
                        accept="application/pdf"
                    />
                </label>
            </div>

            <div className="flex flex-col items-center p-3">
                {files.map((file, idx) => (
                    <div key={idx} className="flex flex-row space-x-5">
                        <span>{file.name}</span>
                        <span
                            className="text-red-500 cursor-pointer"
                            onClick={() => removeFile(file.name, idx)}
                        >
              remove
            </span>
                    </div>
                ))}
            </div>

            {uploading && (
                <div className="text-sm text-blue-500">
                    Uploading... {Math.round(uploadProgress)}%
                </div>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <label className="block p-3">
                <button
                    type="submit"
                    className="bg-black hover:bg-sky-700 rounded-xl p-2 font-semibold focus:ring-violet-300 text-[#ffffff]"
                >
                    Submit
                </button>
            </label>
        </form>
    );
};

export default UploadPres;
