import React, { useState } from "react";
import { Menu, ShoppingCart, ChevronLeft } from "lucide-react";
import { Button } from "../../components/ui/button";

interface ShoppingProps {
  category: string;
  onBack: () => void;
}

export const Shopping = ({ category, onBack }: ShoppingProps): JSX.Element => {
  const [cart, setCart] = useState<number[]>([]);

  const products = {
    Protein: [
      {
        id: 1,
        name: "WHEY PROTEIN",
        price: "$899",
        image: "/image.png",
      },
      {
        id: 2,
        name: "NITRO TECH",
        price: "$799",
        image: "/image.png",
      },
      {
        id: 3,
        name: "PLANT PROTEIN",
        price: "$1099",
        image: "/image.png",
      },
      {
        id: 4,
        name: "ISOPURE",
        price: "$1199",
        image: "/image.png",
      },
    ],
    Creatine: [
      {
        id: 5,
        name: "CREATINE MONOHYDRATE",
        price: "$599",
        image: "/image.png",
      },
      {
        id: 6,
        name: "CREATINE MICRONIZED",
        price: "$699",
        image: "/image.png",
      },
      {
        id: 7,
        name: "CREATINE BUFFERED",
        price: "$799",
        image: "/image.png",
      },
      {
        id: 8,
        name: "CREATINE BLEND",
        price: "$899",
        image: "/image.png",
      },
    ],
    Food: [
      {
        id: 9,
        name: "PROTEIN BARS",
        price: "$499",
        image: "/image.png",
      },
      {
        id: 10,
        name: "PROTEIN COOKIES",
        price: "$399",
        image: "/image.png",
      },
      {
        id: 11,
        name: "PROTEIN OATMEAL",
        price: "$299",
        image: "/image.png",
      },
      {
        id: 12,
        name: "PROTEIN PASTA",
        price: "$349",
        image: "/image.png",
      },
    ],
    Vitamin: [
      {
        id: 13,
        name: "MULTIVITAMIN",
        price: "$799",
        image: "/image.png",
      },
      {
        id: 14,
        name: "VITAMIN D3",
        price: "$599",
        image: "/image.png",
      },
      {
        id: 15,
        name: "VITAMIN C",
        price: "$449",
        image: "/image.png",
      },
      {
        id: 16,
        name: "VITAMIN B COMPLEX",
        price: "$549",
        image: "/image.png",
      },
    ],
  };

  const categoryProducts =
    products[category as keyof typeof products] || products.Protein;

  const toggleCart = (productId: number) => {
    setCart((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <main className="bg-[#323232] w-[440px] min-h-[956px] relative overflow-hidden mx-auto">
      <div className="bg-[#9a2626] rounded-b-3xl pb-4">
        <div className="flex items-center justify-between px-6 pt-4 pb-3">
          <button
            onClick={onBack}
            className="hover:opacity-80 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white">Shopping</h1>
          <ShoppingCart className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="px-4 pt-4 pb-4">
        <div className="bg-[#9a2626] rounded-full py-3 px-6 text-center">
          <h2 className="text-white font-bold text-lg">{category}</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 pb-8">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#9a2626] rounded-3xl overflow-hidden flex flex-col relative"
          >
            <div className="absolute top-3 left-3 bg-white bg-opacity-90 rounded px-3 py-1 z-10">
              <span className="text-[#9a2626] font-bold text-xs">
                Add to cart
              </span>
            </div>

            <div className="bg-white rounded-3xl mx-3 mt-10 mb-3 flex-1 flex items-center justify-center p-3 min-h-[150px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain max-h-[150px]"
              />
            </div>

            <div className="px-3 pb-3">
              <h3 className="text-white font-bold text-sm text-center">
                {product.name}
              </h3>
              <p className="text-white font-bold text-center mt-1">
                {product.price}
              </p>
            </div>

            <button
              onClick={() => toggleCart(product.id)}
              className={`w-full py-2 px-3 font-bold text-sm rounded-b-3xl transition-all ${
                cart.includes(product.id)
                  ? "bg-white text-[#9a2626]"
                  : "bg-[#7a1f1f] text-white hover:bg-[#6a1a1a]"
              }`}
            >
              {cart.includes(product.id) ? "✓ In Cart" : "Add to cart"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
