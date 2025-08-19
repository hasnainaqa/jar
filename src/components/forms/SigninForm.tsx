"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../ui/Button";
import InputField from "../ui/InputField";

type SigninFormData = {
  email: string;
  password: string;
};

const SigninForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: SigninFormData) => {
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/"); // ✅ redirect to homepage
      } else {
        const result = await res.json();
        setError(result.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full font-jakarta max-w-[424px]">
      <InputField
        name="email"
        control={control}
        type="email"
        placeholder="Email"
        inputClassName="h-[60px]"
        placeholderAnimate
        rules={{ required: "Email is required" }}
        error={errors.email?.message}
      />

      <InputField
        name="password"
        control={control}
        type="password"
        placeholder="Password"
        inputClassName="h-[60px]"
        placeholderAnimate
        rules={{ required: "Password is required" }}
        error={errors.password?.message}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button
        type="submit"
        variant="primary"
        className="w-full mt-6 font-anevir">
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
