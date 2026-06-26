"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JoinUs() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", age: "", experience: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Application submitted!");
        setFormData({ name: "", email: "", phone: "", age: "", experience: "", message: "" });
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white py-16 px-4 min-h-screen">
        <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-yellow-400">Join HoopersElite</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
            <input
              type="text"
              placeholder="Basketball Experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            />
            <textarea
              placeholder="Tell us about yourself"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              rows={4}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Apply Now"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
