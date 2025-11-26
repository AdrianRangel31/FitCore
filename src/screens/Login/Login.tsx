import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login = ({ onLoginSuccess }: LoginProps): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const socialLinks = [
    {
      icon: "/linkedin.svg",
      alt: "Linkedin",
      className: "left-[100px]",
    },
    {
      icon: "/github.svg",
      alt: "Github",
      className: "left-[203px]",
    },
    {
      icon: "/instagram.svg",
      alt: "Instagram",
      className: "left-[305px]",
    },
  ];

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      onLoginSuccess();
    }
  };

  return (
    <main className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(50,50,50,1)_100%)] w-[440px] h-[956px] relative overflow-hidden mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <img
          className="w-[180px] h-auto"
          alt="Fit Core Logo"
          src="/logo-new-2022-1.png"
        />

        <div className="flex flex-col gap-4 w-full px-8">
          <div className="inline-flex bg-white rounded-[50px] items-center justify-center gap-2.5 p-2.5">
            <Input
              type="text"
              placeholder="User"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full [font-family:'Inter',Helvetica] font-normal text-[#878686] text-lg tracking-[0] leading-[normal] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#878686]"
            />
          </div>

          <div className="inline-flex bg-white rounded-[50px] items-center justify-center gap-2.5 p-2.5">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full [font-family:'Inter',Helvetica] font-normal text-[#878686] text-lg tracking-[0] leading-[normal] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#878686]"
            />
          </div>
        </div>

        <Button
          onClick={handleLogin}
          className="w-[280px] h-[60px] bg-[#9a2626] rounded-[50px_0px_50px_0px] shadow-[10px_10px_4px_#00000040] hover:bg-[#8a1f1f] transition-colors"
        >
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
            Login
          </span>
        </Button>

        <Button className="w-[220px] h-[50px] bg-[#9a2626] rounded-[50px_0px_50px_0px] shadow-[10px_10px_4px_#00000040] hover:bg-[#8a1f1f] transition-colors">
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0]">
            Sign in
          </span>
        </Button>

        <a
          href="https://adrianrv1.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm underline hover:text-gray-300 transition-colors [font-family:'Inter',Helvetica]"
        >
          Learn more about Fit Core
        </a>
      </div>

      <div className="absolute bottom-12 flex gap-6">
        <div className="w-[71px] h-[71px] bg-white rounded-[35.5px] flex items-center justify-center">
          <img className="w-12 h-12" alt="Linkedin" src="/linkedin.svg" />
        </div>
        <div className="w-[71px] h-[71px] bg-white rounded-[35.5px] flex items-center justify-center">
          <img className="w-12 h-12" alt="Github" src="/github.svg" />
        </div>
        <div className="w-[71px] h-[71px] bg-white rounded-[35.5px] flex items-center justify-center">
          <img className="w-12 h-12" alt="Instagram" src="/instagram.svg" />
        </div>
      </div>
    </main>
  );
};
