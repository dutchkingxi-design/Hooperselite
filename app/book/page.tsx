"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Book() {
  const [formData, setFormData] = useState({ coachId: "", date: "", time: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/bookings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Booking created!");
        setFormData({ coachId: "", date: "", time: "" });
      }
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white py-16 px-4 min-h-screen">
        <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-yellow-400">Book a Session</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Coach ID"
              value={formData.coachId}
              onChange={(e) => setFormData({ ...formData, coachId: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500 disabled:opacity-50"
            >
              {loading ? "Booking..." : "Book Session"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
