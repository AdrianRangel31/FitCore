import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Menu, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

interface MainProps {
  onLogout: () => void;
  onCategorySelect: (category: string) => void;
}

export const Main = ({ onLogout, onCategorySelect }: MainProps): JSX.Element => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const offers = [
    {
      id: 1,
      title: "GOLD STANDARD WHEY",
      price: "$500",
      image: "/image.png",
      label: "WHEY PROTEIN 24g 500$",
    },
    {
      id: 2,
      title: "BORDMAN CREATINA",
      price: "$450",
      image: "/image.png",
      label: "CREATINA 450g 450$",
    },
  ];

  const categories = [
    { name: "Protein", icon: "💪" },
    { name: "Creatine", icon: "⚡" },
    { name: "Food", icon: "🍗" },
    { name: "Vitamin", icon: "🥗" },
  ];

  const nextOffer = () => {
    setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentOfferIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <main className="bg-[#323232] w-[440px] min-h-[956px] relative overflow-hidden mx-auto">
      <div className="bg-white rounded-b-3xl pb-8">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <Menu className="w-6 h-6 text-[#9a2626]" />
          <h1 className="text-3xl font-bold text-[#9a2626]">Welcome!</h1>
          <button
            onClick={onLogout}
            className="text-sm font-semibold text-[#9a2626] hover:text-[#8a1f1f]"
          >
            Logout
          </button>
        </div>

        <div className="flex items-center gap-3 px-6 pb-6">
          <Search className="w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            className="flex-1 border-0 bg-transparent placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="px-4 pt-6 pb-4">
        <div className="bg-[#9a2626] rounded-full py-3 px-6 text-center">
          <h2 className="text-white font-bold text-lg">OFFERS</h2>
        </div>
      </div>

      <div className="relative px-4 pb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={prevOffer}
            className="flex-shrink-0 bg-white rounded-lg p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-[#9a2626]" />
          </button>

          <div className="flex-1 bg-[#9a2626] rounded-3xl p-4 relative min-h-[200px] flex items-center justify-center">
            <img
              src={offers[currentOfferIndex].image}
              alt={offers[currentOfferIndex].title}
              className="w-full h-40 object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center py-2 rounded-b-3xl text-xs font-bold">
              {offers[currentOfferIndex].label}
            </div>
          </div>

          <button
            onClick={nextOffer}
            className="flex-shrink-0 bg-white rounded-lg p-2 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-[#9a2626]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 pb-8">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategorySelect(category.name)}
            className="bg-[#9a2626] rounded-3xl p-6 text-center hover:bg-[#8a1f1f] transition-colors cursor-pointer"
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <h3 className="text-white font-bold text-lg">{category.name}</h3>
          </button>
        ))}
      </div>
    </main>
  );
};
