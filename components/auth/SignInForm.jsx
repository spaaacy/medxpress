"use client";

import Link from "next/link";
import { useState } from "react";

const SignInForm = () => {
  // State to store the form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission - not fully implemented yet
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in successful!", formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <label class="block p-3">
        {/* Email Input */}
        <span class="block text-sm font-medium text-slate-700">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          class="mt-1 block w-full px-3 py-2 bg-white peer border border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        placeholder:text-slate-400"
          placeholder="you@example.com"
        />
        <p className="mt-2 invisible peer-invalid:visible text-slate-700 text-xs font-semibold">
          Please provide a valid email address.
        </p>
      </label>

      <label className="block p-3">
        {/* Password Input */}
        <span class="block text-sm font-medium text-slate-700">Password</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>

      {/* Submit Button */}
      <label className="block p-3">
        <button
          type="submit"
          className="bg-black hover:bg-sky-700 rounded-xl p-2 font-semibold focus:ring-violet-300 text-[#ffffff]"
        >
          Submit
        </button>
      </label>
      <Link href={"/signup"} className="text-sm text-blue-700 hover:underline p-3" target="_blank">
        Not registered? Create Account.
      </Link>
    </form>
  );
};

export default SignInForm;
