"use client";
import React from "react";
import Image from "next/image";
import SigninForm from "@/components/forms/SigninForm";

import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 👇 Example API call (adjust URL to your backend)
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        // ✅ Redirect after successful login
        router.push("/");
      } else {
        const data = await res.json();
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full h-[-webkit-fill-available] flex">
        {/*  Form */}
        <div className="w-1/2 py-6 px-12 pt-[100px] flex flex-col ">
          <Image
            src="/assets/icons/SiteLogo.svg"
            width={117}
            height={124}
            alt="JAR logo"
            className="mb-12"
          />
          <div className="mb-8">
            <h1 className="font-bold typo-heading2 mb-3 font-anevir ">
              Sign In
            </h1>
            <p className="typo-body text-(--grey-text) font-jakarta">
              Please provide details to sign up
            </p>
          </div>
          <SigninForm />
        </div>

        {/* image with border */}
        <div className="w-1/2 h-[100vh] sticky top-0">
          <div className="w-full h-full">
            <Image
              src="/assets/SignupImage.png"
              alt="image"
              fill
              className="object-cover object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
