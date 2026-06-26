import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-yellow-400">
        🏀 HoopersElite
      </Link>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/coaches" className="hover:text-yellow-400">Coaches</Link>
        <Link href="/book" className="hover:text-yellow-400">Book</Link>
        <Link href="/pricing" className="hover:text-yellow-400">Pricing</Link>
        <Link href="/join-us" className="hover:text-yellow-400">Join Us</Link>
        <Link href="/login" className="hover:text-yellow-400">Login</Link>
      </div>
    </nav>
  );
}
