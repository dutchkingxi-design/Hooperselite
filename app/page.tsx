import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <section className="py-16 px-4 bg-gray-950 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose HoopersElite?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">🏆 Expert Coaches</h3>
            <p>NBA-trained coaches with 15+ years of experience.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">📊 Data-Driven</h3>
            <p>Real-time performance tracking and personalized analytics.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">⚡ Results Fast</h3>
            <p>See measurable improvements in 30 days or your money back.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="49"
            features={["4 sessions/month", "1-on-1 coaching", "Performance tracking"]}
          />
          <PricingCard
            title="Pro"
            price="99"
            features={["8 sessions/month", "1-on-1 coaching", "Video analysis", "Nutrition guide"]}
          />
          <PricingCard
            title="Elite"
            price="199"
            features={["Unlimited sessions", "Private coach", "Full analytics", "Custom training plan"]}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
