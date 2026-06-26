import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Coaches() {
  const coaches = [
    { name: "Marcus Johnson", specialty: "Ball Handling", rate: "$75/hr" },
    { name: "Alex Chen", specialty: "3-Point Shooting", rate: "$65/hr" },
    { name: "Sophia Williams", specialty: "Post Moves", rate: "$70/hr" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white py-16 px-4 min-h-screen">
        <h1 className="text-5xl font-bold text-center mb-12 text-yellow-400">Our Coaches</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {coaches.map((coach) => (
            <div key={coach.name} className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{coach.name}</h3>
              <p className="text-yellow-400 mb-4">{coach.specialty}</p>
              <p className="text-lg font-bold mb-4">{coach.rate}</p>
              <a href="/book" className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-500">Book Session</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
