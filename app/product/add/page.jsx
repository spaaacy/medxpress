"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const { session, user } = useContext(UserContext);
  const router = useRouter();
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (session && !user) router.push("/");
    if (user) {
      if (user.admin) {
        setLoading(false);
      } else router.push("/");
    }
  }, [user, session]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const userId = session.data.session.user.id;
    if (!userId) return;
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append(
        "product",
        JSON.stringify({
          name: data.name,
          description: data.description,
          price: data.price,
        })
      );
      if (image) formData.append("image", file);

      const response = await fetch("/api/product/create", {
        method: "POST",
        headers: {
          "X-Supabase-Auth": session.data.session.access_token + " " + session.data.session.refresh_token,
        },
        body: formData,
      });
      if (response.status === 201) {
        const { productId } = await response.json();
        router.push(`/product/${productId}`);
      } else {
        const { error } = await response.json();
        throw error;
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Oops, something went wrong...");
    }
  };

  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {loading ? (
        <Loader />
      ) : (
        <main>
          <form className="mt-4 px-8 py-4 rounded-lg bg-white flex flex-col gap-2 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="text-white px-2 py-1 bg-[#4cc8b1] hover:bg-[#7aaea2] rounded-full text-sm hover:text-gray-200 flex items-center flex-shrink-0"
              >
                Select Image
              </button>
            </div>

            <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleFileChange} />

            {errors.imagePrompt && (
              <p role="alert" className="text-xs text-red-500 ml-auto">
                {errors.imagePrompt.message}
              </p>
            )}
            {image && (
              <Image
                src={image}
                alt={"project image"}
                width={256}
                height={256}
                unoptimized
                className="mx-auto max-w-64 max-h-64 object-cover"
              />
            )}

            <input
              placeholder="name"
              className="focus:bg-gray-300 rounded-md bg-gray-200 p-2 text-sm focus:border-white focus:ring-0 focus:outline-none"
              {...register("name", { required: "name is required" })}
              type="text"
            />
            {errors.name && (
              <p role="alert" className="text-xs text-red-500">
                {errors.name.message}
              </p>
            )}
            <textarea
              placeholder="Description"
              className="resize-none overflow-y-auto focus:bg-gray-300 rounded-md bg-gray-200 p-2 text-sm focus:border-white focus:ring-0 focus:outline-none"
              id="scrollableDiv"
              rows={10}
              {...register("description", {
                required: "Description is required",
              })}
              type="text"
            />
            {errors.description && (
              <p role="alert" className="text-xs text-red-500">
                {errors.description.message}
              </p>
            )}

            <div className="flex items-center gap-2">
              <label className="text-sm">Price</label>
              <div className=" flex-shrink-0 bg-gray-200 rounded-md  ">
                <span className="px-2">$</span>
                <input
                  {...register("price", {
                    required: "Price is required",
                    validate: (value, formValues) => value > 0.5,
                  })}
                  className="w-16 focus:bg-gray-300 rounded-r-md bg-gray-200 p-2 text-sm focus:border-white focus:ring-0 focus:outline-none"
                  step="0.05"
                  min="0.5"
                  type="number"
                  onBlur={(e) => {
                    e.target.value = parseFloat(e.target.value).toFixed(2);
                  }}
                />
              </div>
            </div>
            {errors.price && (
              <p role="alert" className="text-xs text-red-500">
                {errors.price.type === "validate" ? "Price must be greater than $0.50" : errors.price.message}
              </p>
            )}

            <div className="flex justify-between items-center flex-wrap text-gray-200">
              <button
                className="mt-4 ml-auto px-2 py-1 bg-[#4cc8b1] hover:bg-[#7aaea2] rounded-full text-sm hover:text-gray-300"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </main>
      )}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Page;
