'use client'

import { useState } from 'react';

const SignUpForm = () => {
    // State to store the form input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        addressLine1: '',
        addressLine2:'',
        city: '',
        state: '',
        zip: '',
        phone: '',
        password: '',
    });

    // State to handle form errors
    const [formErrors, setFormErrors] = useState({});

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })

        // Check for strong enough password
        if (name === 'password') {
            validatePassword(value);
        }
    }

    // Password strength check function
    const validatePassword = (password) => {
        const errors = {};
        const minLength = 8;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) {
            errors.password = 'Password must be at least 8 characters long.';
        }
        else if (!hasSpecialChar) {
            errors.password = 'Password must contain at least one special character.';
        }
        else {
            errors.password = '';
        }

        // Update form errors state
        setFormErrors({
            ...formErrors,
            ...errors,
        });
    };

    // Handle form submission - not fully implemented yet
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Sign up successful!', formData);
    };
    
    return(
        <form>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label class="block p-3">
                        {/* First Name Input */}
                        <span class="block text-sm font-medium text-slate-700">First Name</span>
                        <input type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange} 
                                required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                required:border-red-500"/>
                    </label>
                </div>
                <div>
                    <label class="block p-3">
                        {/* Last Name Input */}
                        <span class="block text-sm font-medium text-slate-700">Last Name</span>
                        <input type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange} 
                                required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                required:border-red-500"/>
                    </label>
                </div>

                <div class="sm:col-span-2">
                    <label class="block p-3">
                        {/* Email Input */}
                        <span class="block text-sm font-medium text-slate-700">Email</span>
                        <input type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} 
                                required 
                                class="mt-1 block w-full px-3 py-2 bg-white peer border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                placeholder:text-slate-400 "
                                placeholder="you@example.com"/>
                        <p className="mt-2 invisible peer-invalid:visible text-slate-700 text-xs font-semibold">
                            Please provide a valid email address.
                        </p>
                    </label>
                </div>

                <div class="sm:col-span-2">
                    <label class="block p-3">
                        {/* Address Input */}
                        <span class="block text-sm font-medium text-slate-700">Address</span>
                        <input type="text"
                                name="addressLine1"
                                value={formData.addressLine1}
                                onChange={handleChange}  
                                required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                placeholder:text-slate-400 "
                                placeholder="Street address"/>
                        <input type="text" 
                                name="addressLine2"
                                value={formData.addressLine2}
                                onChange={handleChange}
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                placeholder:text-slate-400"
                                placeholder="Apt, suite, unit, building, floor, etc."/>
                    </label>
                </div>

                <div class="sm:col-span-2">
                    <label class="block p-3">
                        {/* City Input */}
                        <span class="block text-sm font-medium text-slate-700">City</span>
                        <input type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange} 
                                required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                    </label>
                </div>

                <div>
                    <label class="block p-3">
                        {/* State Input */}
                        <span class="block text-sm font-medium text-slate-700">State</span>
                        <input type="text" 
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                    </label>
                </div>

                <div>
                    <label class="block p-3">
                        {/* ZIP Code Input */}
                        <span class="block text-sm font-medium text-slate-700">ZIP Code</span>
                        <input type="text" 
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                    </label>
                </div>
                
                <div class="sm:col-span-2">
                    <label class="block p-3">
                        {/* Phone Number Input */}
                        <span class="block text-sm font-medium text-slate-700">Phone Number</span>
                        <input type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange} 
                                required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                        <p className="mt-2 text-slate-700 text-xs font-semibold">
                            May be used to assist delivery.
                        </p>
                    </label>
                </div>

                <div class="sm:col-span-2">
                    <label className="block p-3">
                        {/* Password Input */}
                        <span class="block text-sm font-medium text-slate-700">Create Password</span>
                        <input type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleChange} 
                                required
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                                rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                        {formErrors.password && (
                            <p className="mt-2 text-red-600 text-xs font-semibold">{formErrors.password}</p>
                        )}
                    </label>
                </div>

                <div>
                    {/* Submit Button */}
                    <label className="block p-3">
                        <button type="submit" className="bg-black hover:bg-sky-700 rounded-xl p-2 font-semibold focus:ring-violet-300 text-[#ffffff]">Submit</button>
                    </label>
                </div>

            </div>
        </form>
    )
}

export default SignUpForm;