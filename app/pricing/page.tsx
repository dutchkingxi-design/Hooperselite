import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white py-16 px-4 min-h-screen">
        <h1 className="text-5xl font-bold text-center mb-12 text-yellow-400">Pricing Plans</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="49"
            features={["4 sessions/month", "1-on-1 coaching", "Performance tracking", "Email support"]}
          />
          <PricingCard
            title="Pro"
            price="99"
            features={["8 sessions/month", "1-on-1 coaching", "Video analysis", "Nutrition guide", "Phone support"]}
          />
          <PricingCard
            title="Elite"
            price="199"
            features={["Unlimited sessions", "Private coach", "Full analytics", "Custom training plan", "24/7 support"]}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
