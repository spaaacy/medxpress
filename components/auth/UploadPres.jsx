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
        // supabase storage?

        //const { data, error } = await supabase.storage
          //.from('prescriptions')
          //.upload(file.name, file, {
            //progress: (progress) => setUploadProgress(progress),
          //});
  
        //if (error) {
          //console.error('Error uploading file:', error);
        //} else {
          //console.log('File uploaded successfully:', data);
        //}
  
        setUploading(false);
        setUploadProgress(0);
        setFile(null);
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
      <form >
        <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" 
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
                <div class= "flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">PDF only</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" onChange={handleChange} accept="application/pdf"/>
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

        <label className="block p-3">
          <button
            type="submit"
            onSubmit={onSubmit}
            className="bg-black hover:bg-sky-700 rounded-xl p-2 font-semibold focus:ring-violet-300 text-[#ffffff]"
          >
            Submit
          </button>
        </label>
      </form>
    );
  };
  
  export default UploadPres;
  