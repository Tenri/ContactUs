'use client'

import React from "react";

export default function ContactUs() {
  const [emailError, setEmailError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [submitError, setSubmitError] = React.useState('');

  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    note: ''
  });


  const validateEmail = (value: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }

  const validatePhone = (value: string) => {
    if (!/^(04\d{8}|614\d{8})$/.test(value)) {
      setPhoneError('Please enter a valid Australian mobile number');
    } else {
      setPhoneError('');
    }
  }

  const validateSubmit = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||!/^(04\d{8}|614\d{8})$/.test(form.phone)) {
      setSubmitError('Please fix the errors in the form');
    }
    else {
      setSubmitError('');
      return true;
    }
    
  }




  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateSubmit()) {
      console.log(form.firstName, form.lastName, form.email, form.phone, form.note);
    }
  }

  

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <h1>Contact us, we would love to hear from you!</h1>
        <div className="flex flex-row items-center gap-6 text-center sm:items-start sm:text-left w-full h-full">
          <div className="flex flex- gap-4 text-base font-medium sm:flex-row bg-white">
            <p>Welcome to OpenAgent. We've been around since 2013, and our vision is to make it easy for people to buy, sell and own property.

                Here are the different ways you can contact us.

                Contact Us Details

                Phone: 13 24 34
                Email: support@openagent.com.au

                For media enquiries, please visit our Media and Press page.

                Postal Address

                PO Box 419, Alexandria NSW 1435

                Contact Centre Hours of Operation

                Monday - Friday 8:30 - 5:00
              </p>
          </div>
          <div className="flex flex- gap-4 text-base font-medium sm:flex-row">
            <form className="flex flex-col gap-4 w-full max-w-md bg-zinc-50 p-8" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

              <label htmlFor="firstName" className="font-medium">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border border-gray-300 p-2"
                onChange={(e) => {
                  setForm({ ...form, firstName: e.target.value });
                }}
                required
              />

              <label htmlFor="lastName" className="font-medium">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border border-gray-300 p-2"
                onChange={(e) => {
                  setForm({ ...form, lastName: e.target.value });
                }}
                required
              />

              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-gray-300 p-2"
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  validateEmail(e.target.value);
                }}
                required/>
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 p-2"
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  validatePhone(e.target.value);
                }}
                required
              />
              {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

              <label htmlFor="note" className="font-medium">
                Additional information
              </label>
              <textarea
                id="note"
                name="note"
                className="border border-gray-300 p-2"
                onChange={(e) => setForm({ ...form, note: e.target.value })}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
