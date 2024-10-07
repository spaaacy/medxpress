"use client";

import { UserContext } from "@/context/UserContext";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const { session } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (session?.data.session) {
      router.push("/");
    }
  }, [session]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!session || session.data.session) return;
    console.log(formData);
    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;

      const response = await fetch("/api/user/create", {
        method: "POST",
        body: JSON.stringify({
          user_id: authData.user.id,
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zipCode,
          phone_number: formData.phoneNumber,
        }),
      });

      if (response.status === 500) {
        const { error } = await response.json();
        throw error;
      }

      toast.success("Account created");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      toast.error("Oops, something went wrong...");
      console.error(error);
    }
  };

  // State to store the form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    password: "",
  });

  // State to handle form errors
  const [formErrors, setFormErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check for strong enough password
    if (name === "password") {
      validatePassword(value);
    }
  };

  // Password strength check function
  const validatePassword = (password) => {
    const errors = {};
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      errors.password = "Password must be at least 8 characters long.";
    } else if (!hasSpecialChar) {
      errors.password = "Password must contain at least one special character.";
    } else {
      errors.password = "";
    }

    // Update form errors state
    setFormErrors({
      ...formErrors,
      ...errors,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        <div>
          <label className="block p-3">
            {/* First Name Input */}
            <span className="block text-sm font-medium text-slate-700">First Name</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                required:border-red-500"
            />
          </label>
        </div>
        <div>
          <label className="block p-3">
            {/* Last Name Input */}
            <span className="block text-sm font-medium text-slate-700">Last Name</span>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                required:border-red-500"
            />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="block p-3">
            {/* Email Input */}
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white peer border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                placeholder:text-slate-400 "
              placeholder="you@example.com"
            />
            <p className="mt-2 invisible peer-invalid:visible text-slate-700 text-xs font-semibold">
              Please provide a valid email address.
            </p>
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="block p-3">
            {/* Address Input */}
            <span className="block text-sm font-medium text-slate-700">Address</span>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                placeholder:text-slate-400 "
              placeholder="Street address"
            />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="block p-3">
            {/* City Input */}
            <span className="block text-sm font-medium text-slate-700">City</span>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "
            />
          </label>
        </div>

        <div>
          <label className="block p-3">
            {/* State Input */}
            <span className="block text-sm font-medium text-slate-700">State</span>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "
            />
          </label>
        </div>

        <div>
          <label className="block p-3">
            {/* ZIP Code Input */}
            <span className="block text-sm font-medium text-slate-700">ZIP Code</span>
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "
            />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="block p-3">
            {/* Phone Number Input */}
            <span className="block text-sm font-medium text-slate-700">Phone Number</span>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "
            />
            <p className="mt-2 text-slate-700 text-xs font-semibold">May be used to assist delivery.</p>
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="block p-3">
            {/* Password Input */}
            <span className="block text-sm font-medium text-slate-700">Create Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "
            />
            {formErrors.password && <p className="mt-2 text-red-600 text-xs font-semibold">{formErrors.password}</p>}
          </label>
        </div>

        <div>
          {/* Submit Button */}
          <label className="block p-3">
            <button
              type="submit"
              className="bg-black hover:bg-sky-700 rounded-xl p-2 font-semibold focus:ring-violet-300 text-[#ffffff]"
            >
              Submit
            </button>
          </label>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
