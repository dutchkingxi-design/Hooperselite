import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white py-16 px-4 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-yellow-400">About HoopersElite</h1>
          <p className="text-lg mb-6">Founded in 2020, HoopersElite Academy is committed to developing the next generation of elite basketball players.</p>
          <p className="text-lg mb-6">Our mission is to provide world-class coaching, cutting-edge analytics, and personalized training programs that transform young athletes into confident, skilled players.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-yellow-400">Our Team</h2>
          <p className="text-lg">Led by former NBA players and internationally certified coaches, we combine elite-level expertise with a passion for developing talent.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
