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
    <main className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(50,50,50,1)_100%)] w-[440px] h-[956px] relative overflow-hidden mx-auto">
      <Button
        onClick={handleLogin}
        className="flex w-[331px] h-[78px] top-[607px] left-[61px] bg-[#9a2626] rounded-[50px_0px_50px_0px] shadow-[10px_10px_4px_#00000040] items-center justify-center gap-2.5 p-2.5 absolute hover:bg-[#8a1f1f]"
      >
        <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-5xl text-center tracking-[0] leading-[normal]">
          Login
        </span>
      </Button>

      <Button className="flex w-[258px] h-[59px] top-[741px] left-[98px] bg-[#9a2626] rounded-[50px_0px_50px_0px] shadow-[10px_10px_4px_#00000040] items-center justify-center gap-2.5 p-2.5 absolute hover:bg-[#8a1f1f]">
        <span className="relative w-fit mt-[-5.50px] mb-[-3.50px] [font-family:'Inter',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Sign in
        </span>
      </Button>

      <p className="absolute top-[707px] left-[93px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal]">
        Don´t have an account?
      </p>

      <img
        className="absolute top-12 left-[47px] w-[346px] h-[130px] object-contain"
        alt="Logo new"
        src="/logo-new-2022-1.png"
      />

      <div className="inline-flex top-[410px] left-[47px] bg-white rounded-[50px] items-center justify-center gap-2.5 p-2.5 absolute">
        <Input
          type="text"
          placeholder="User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-[345px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#878686] text-4xl tracking-[0] leading-[normal] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#878686]"
        />
      </div>

      <div className="inline-flex top-[499px] left-[47px] bg-white rounded-[50px] items-center justify-center gap-2.5 p-2.5 absolute">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[345px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#878686] text-4xl tracking-[0] leading-[normal] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#878686]"
        />
      </div>

      <img
        className="absolute top-[206px] left-0 w-[440px] h-44 bg-blend-multiply"
        alt="Gemini generated"
        src="/gemini-generated-image-yiiy98yiiy98yiiy-1.png"
      />

      <div className="left-[89px] absolute top-[856px] w-[71px] h-[71px] bg-white rounded-[35.5px]" />

      <div className="left-[191px] absolute top-[856px] w-[71px] h-[71px] bg-white rounded-[35.5px]" />

      <div className="left-[293px] absolute top-[856px] w-[71px] h-[71px] bg-white rounded-[35.5px]" />

      {socialLinks.map((social, index) => (
        <img
          key={`social-${index}`}
          className={`absolute top-[868px] ${social.className} w-12 h-12`}
          alt={social.alt}
          src={social.icon}
        />
      ))}
    </main>
  );
};
