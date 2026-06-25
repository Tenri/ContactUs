import Link from 'next/link';


export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center ">
        <h1>Welcome to OpenAgent!</h1>
        <div className="flex flex-row items-center gap-6 text-center sm:items-start sm:text-left w-full h-full">
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/contact-list">Contact List</Link>
        </div>
      </main>
    </div>
  );
}
