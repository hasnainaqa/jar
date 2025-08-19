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
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SigninFormData) => {
    setLoading(true);
    setError("");
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
    } finally {
      setLoading(false); // 🔹 Stop loading after response/error
    }
  };

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <form
        noValidate
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
    </div>
  );
};

export default SigninForm;
