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

export default function SigninForm() {
  const { handleSubmit, control, formState: { errors } } = useForm<SigninFormData>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (data: SigninFormData) => {
    setLoading(true);
    setError("");

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("No user found, please sign up first.");
      setLoading(false);
      return;
    }

    const userData = JSON.parse(storedUser);

    if (data.email === userData.email && data.password === userData.password) {
      router.push("/"); // ✅ success
    } else {
      setError("Invalid credentials");
    }

    setLoading(false);
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

