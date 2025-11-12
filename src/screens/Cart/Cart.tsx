import React from "react";
import { Menu, ChevronLeft, Trash2 } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface CartProps {
  items: CartItem[];
  onBack: () => void;
  onRemoveItem: (id: number) => void;
}

export const Cart = ({ items, onBack, onRemoveItem }: CartProps): JSX.Element => {
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace("$", ""));
      return total + price;
    }, 0);
  };

  return (
    <main className="bg-[#323232] w-[440px] min-h-[956px] relative overflow-hidden mx-auto flex flex-col">
      <div className="bg-[#9a2626] rounded-b-3xl pb-4">
        <div className="flex items-center justify-between px-6 pt-4 pb-3">
          <button
            onClick={onBack}
            className="hover:opacity-80 transition-opacity"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white">Shopping cart</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-4">
        {items.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-white text-center">Tu carrito está vacío</p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 flex items-center gap-4"
              >
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="flex-shrink-0 text-[#9a2626] hover:text-[#7a1f1f] transition-colors"
                >
                  <Trash2 className="w-6 h-6" />
                </button>

                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-gray-800 font-bold text-sm">{item.name}</h3>
                  <p className="text-[#9a2626] font-bold text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="px-4 pb-6 space-y-4">
        {items.length > 0 && (
          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-gray-600 text-sm mb-1">Total:</p>
            <p className="text-[#9a2626] font-bold text-2xl">
              ${calculateTotal()}
            </p>
          </div>
        )}

        <button className="w-full bg-[#9a2626] hover:bg-[#8a1f1f] transition-colors rounded-full py-4 px-6 text-center">
          <span className="text-white font-bold text-lg">Pagar</span>
        </button>
      </div>
    </main>
  );
};
