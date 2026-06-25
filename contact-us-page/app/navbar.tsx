'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-6xl px-16 py-4 mx-auto flex items-center gap-2">
      {pathname === '/' ? (
        <span className="font-bold">Home</span>
      ) : (
        <Link href="/">Home</Link>
      )}

      {pathname === '/contact-us' && (
        <><span>{'>'}</span><span className="font-bold text-green-600">Contact Us</span></>
      )}

      {pathname === '/contact-list' && (
        <><span>{'>'}</span><span className="font-bold text-green-600">Contact List</span></>
      )}
    </nav>
  )
}