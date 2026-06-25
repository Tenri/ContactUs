import Link from 'next/link';


export default function Home() {

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <main className="w-full max-w-6xl mx-auto px-16 py-8 ">
        <h1 className="text-3xl font-bold py-15">Welcome to OpenAgent!</h1>
        <div className="flex flex-row items-center gap-12 text-center sm:items-start sm:text-left w-full h-full">
            <Link href="/contact-us" className="text-green-600 text-lg hover:underline">
                Contact Us
            </Link>
            <Link href="/contact" className="text-green-600 text-lg hover:underline">
                Contact List
            </Link>
        </div>
      </main>
    </div>
  );
}
