export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-32 text-center">
      <h1 className="text-6xl font-bold mb-4">Elite Basketball Training</h1>
      <p className="text-xl text-gray-300 mb-8">Become the best version of yourself with world-class coaching.</p>
      <div className="flex justify-center gap-4">
        <a href="/book" className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-500">Book Now</a>
        <a href="/join-us" className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-black">Apply</a>
      </div>
    </section>
  );
}
