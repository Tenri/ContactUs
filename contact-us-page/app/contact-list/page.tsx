'use client';
import React from 'react';
import axios from 'axios';

export default  function ContactList() {
    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3001/contacts')
        .then(res => setContacts(res.data));
    }, []);


    const handleVerify = (contact: any) => {
        if (contact.verified === false) {

            console.log(`Contact ${contact.id} marked as verified`);
        }
    }

    return (
        <div className="min-h-screen bg-white font-sans">
        <main className="w-full max-w-6xl mx-auto px-16 py-8">
            <h1 className="text-3xl font-bold mb-8">Contact List</h1>
            <div className="bg-zinc-50 p-8">
                <table className="w-full text-sm text-left border border-zinc-200 rounded-lg divide-y divide-zinc-200">
                    <thead className="border-b">
                        <tr>
                        <th className="py-3 font-semibold">First name</th>
                        <th className="py-3 font-semibold">Last name</th>
                        <th className="py-3 font-semibold">Email address</th>
                        <th className="py-3 font-semibold">Phone number</th>
                        <th className="py-3 font-semibold">Verified</th>
                        <th className="py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact: any) => (
                        <tr key={contact.id} className="border-b">
                            <td className="py-3">{contact.firstName}</td>
                            <td className="py-3">{contact.lastName}</td>
                            <td className="py-3">{contact.email}</td>
                            <td className="py-3">{contact.phone}</td>
                            <td className="py-3">{<button
                                onClick={() => contact.verified ? null : handleVerify(contact)}
                                disabled={contact.verified}
                                className={contact.verified ? 'text-gray-400' : 'text-green-600 hover:underline'}
                                >
                                {contact.verified ? 'Verified' : 'Mark as verified'}
                                </button>} </td>
                            <td className="py-3">
                                <button className="text-red-600 hover:underline">Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
        </div>
    );
}