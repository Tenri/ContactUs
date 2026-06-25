'use client';
import React from 'react';
import axios from 'axios';

export default  function ContactList() {
    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        axios.get('${process.env.NEXT_PUBLIC_API_URL}/contacts')
        .then(res => setContacts(res.data));
    }, []);


    const handleVerify = async (id: number) => {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/contacts/${id}`, { verified: true });
        setContacts((curr: any) => 
        curr.map((c: any) => c.id === id ? { ...c, verified: true } : c)
        );
    }

    const handleDelete = async (id: number) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/contacts/${id}`);
        setContacts((curr: any) => curr.filter((c: any) => c.id !== id));
    }

    return (
        <div className="min-h-screen bg-white font-sans">
        <main className="w-full max-w-6xl mx-auto px-16 py-8">
            <h1 className="text-3xl font-bold mb-8">Contact List</h1>
            <div className="bg-zinc-50 p-8">
                <table className="w-full text-sm text-left border border-black rounded-lg divide-y divide-black">
                    <thead className="border-b">
                        <tr>
                        <th className="py-3 font-semibold">First name</th>
                        <th className="py-3 font-semibold">Last name</th>
                        <th className="py-3 font-semibold">Email address</th>
                        <th className="py-3 font-semibold">Phone number</th>
                        <th className="py-3 font-semibold">Note</th>
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
                            <td className="py-3">{contact.note}</td>
                            <td className="py-3">{<button
                                onClick={() => contact.verified ? null : handleVerify(contact.id)}
                                disabled={contact.verified}
                                className={contact.verified ? 'text-gray-400' : 'text-green-600 hover:underline'}
                                >
                                {contact.verified ? 'Verified' : 'Mark as verified'}
                                </button>} </td>
                            <td className="py-3">
                                <button 
                                onClick={() => handleDelete(contact.id)}
                                className="text-red-600 hover:underline">
                                    Delete
                                </button>
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