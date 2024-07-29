"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface platformProps {
  id: number;
  provider: string;
  name: string;
  _img: string;
}

const Login = () => {
  const socialPlatforms: platformProps[] = [
    {
      id: 1,
      provider: "google",
      name: "Google",
      _img: "/Icons/googleIcon.png",
    },
    {
      id: 2,
      provider: "twitter",
      name: "Twitter/X",
      _img: "/Icons/twitter.png",
    },
    { id: 3, provider: "apple", name: "Apple", _img: "/Icons/appleIcon.png" },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[300px] h-[300px] rounded-2xl border-2 border-gray-300 space-y-8 py-[3%]">
        {socialPlatforms?.map((item) => (
          <div
            className="w-[280px] h-[45px] bg-black mx-auto font-bold flex items-center justify-center gap-2 text-white rounded-lg shadow-card cursor-pointer"
            onClick={() => signIn(item.provider, { callbackUrl: "/" })}
            key={item.id}
          >
            <span>Sign in using {item.name}</span>
            <Image src={item?._img} height={30} width={30} alt="login-Icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
