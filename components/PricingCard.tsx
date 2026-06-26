interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <div className="bg-gray-900 border border-yellow-400 rounded-lg p-8 text-white">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-4xl font-bold text-yellow-400 mb-6">${price}<span className="text-lg">/mo</span></p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center"><span className="text-yellow-400 mr-2">✓</span> {feature}</li>
        ))}
      </ul>
      <a href="/book" className="w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500 block text-center">
        Get Started
      </a>
    </div>
  );
}
