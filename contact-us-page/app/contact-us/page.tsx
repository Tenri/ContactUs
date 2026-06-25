'use client'

import React from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function ContactUs() {
  const router = useRouter();


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




  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validateSubmit()) {
      await axios.post('http://localhost:3001/contacts', form);
      console.log(form.firstName, form.lastName, form.email, form.phone, form.note);
      router.push(`/thank-you?firstName=${form.firstName}`);
    }
  }

  

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col pt-8 px-16 bg-white">
        <h1 className="text-3xl font-bold">Contact us, we would love to hear from you!</h1>
        <div className="flex flex-row items-center gap-6 py-24 text-center sm:items-start sm:text-left w-full h-full">
          <div className="w-1/2 bg-white">
            <div className="flex flex-col gap-3 text-sm">
              <p>Welcome to OpenAgent. We've been around since 2013, and our vision is to make it easy for people to buy, sell and own property.</p>
                <p>Here are the different ways you can contact us.</p>

                <p className="font-bold underline">Contact Us Details</p>
                <div>
                  <p><span className="font-bold">Phone:</span> 13 24 34</p>
                  <p><span className="font-bold">Email:</span> support@openagent.com.au</p>
                </div>
                <p>For media enquiries, please visit our <span className="underline text-green-600">Media and Press</span> page.</p>

                <p className="font-bold underline">Postal Address</p>
                <p>PO Box 419, Alexandria NSW 1435</p>

                <p className="font-bold underline">Contact Centre Hours of Operation</p>
                <p>Monday - Friday 8:30 - 5:00</p>
              </div>
          </div>
          <div className="w-1/2 bg-zinc-50">
            <form className="flex flex-col gap-4 w-full bg-zinc-50 p-8" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

              <input
                placeholder="First name"
                type="text"
                id="firstName"
                name="firstName"
                className="border border-gray-300 p-2 rounded"
                onChange={(e) => {
                  setForm({ ...form, firstName: e.target.value });
                }}
                required
              />

              <input
                placeholder="Last name"
                type="text"
                id="lastName"
                name="lastName"
                className="border border-gray-300 p-2 rounded"
                onChange={(e) => {
                  setForm({ ...form, lastName: e.target.value });
                }}
                required
              />

              <input
                placeholder="Email address"
                type="text"
                id="email"
                name="email"
                className="border border-gray-300 p-2 rounded"
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  validateEmail(e.target.value);
                }}
                required/>
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

              <input
                placeholder="Phone number"
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 p-2 rounded"
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  validatePhone(e.target.value);
                }}
                required
              />
              {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

              <textarea
                placeholder="What do you want to speak to us about"
                id="note"
                name="note"
                className="border border-gray-300 p-2 rounded"
                rows={10}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
              />

              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Send Message
              </button>

                <p className="text-xs text-gray-400 rounded">
                  By sending a message you agree to the{' '}
                  <span className="underline text-green-600">Terms and Conditions</span> and{' '}
                  <span className="underline text-green-600">Privacy Policy</span>
                </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
