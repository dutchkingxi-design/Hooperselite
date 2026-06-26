"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  bookingId: string;
  amount: number;
  currency: string;
}

export default function CheckoutButton({ bookingId, amount, currency }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId, amount, currency })
      });

      const { clientSecret } = await res.json();
      // Redirect to Stripe checkout (integrate with Stripe.js)
      window.location.href = `/success?bookingId=${bookingId}`;
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-500 disabled:opacity-50"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}
