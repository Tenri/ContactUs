import Link from 'next/link';


export default function Home() {

  return (
    <div className=" bg-white font-sans">
      <main className="w-full max-w-6xl mx-auto px-16 ">
        <h1 className="text-3xl font-bold pt-8 pb-15">Welcome to OpenAgent!</h1>
        <div className="flex flex-row items-center gap-12 text-center sm:items-start sm:text-left w-full h-full">
            <Link href="/contact-us" className="text-green-600 text-lg hover:underline">
                Contact Us
            </Link>
            <Link href="/contact-list" className="text-green-600 text-lg hover:underline">
                Contact List
            </Link>
        </div>
      </main>
    </div>
  );
}
