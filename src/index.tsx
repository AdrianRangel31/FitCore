import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./screens/Login";
import { Main } from "./screens/Main";
import { Shopping } from "./screens/Shopping";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  if (selectedCategory) {
    return (
      <Shopping category={selectedCategory} onBack={handleBackToMain} />
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
