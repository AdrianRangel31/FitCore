import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./screens/Login";
import { Main } from "./screens/Main";
import { Shopping } from "./screens/Shopping";
import { Cart } from "./screens/Cart";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToMain = () => {
    setSelectedCategory(null);
  };

  const handleCartOpen = (items: CartItem[]) => {
    setCartItems(items);
    setIsCartOpen(true);
  };

  const handleBackToShopping = () => {
    setIsCartOpen(false);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  if (isCartOpen) {
    return (
      <Cart
        items={cartItems}
        onBack={handleBackToShopping}
        onRemoveItem={handleRemoveItem}
      />
    );
  }

  if (selectedCategory) {
    return (
      <Shopping
        category={selectedCategory}
        onBack={handleBackToMain}
        onCartOpen={handleCartOpen}
      />
    );
  }

  return (
    <Main
      onLogout={handleLogout}
      onCategorySelect={handleCategorySelect}
    />
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
