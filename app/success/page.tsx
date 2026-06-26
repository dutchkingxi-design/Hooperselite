"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Success() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white py-32 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">✓ Payment Successful!</h1>
          <p className="text-lg mb-4">Your booking has been confirmed.</p>
          <p className="text-gray-400 mb-8">Booking ID: {bookingId}</p>
          <a href="/" className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-500">Back to Home</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
