"use client";

import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import PhoneNumberInput from "../ui/PhoneNumberInput.tsx";

type SignupFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
    console.log("Form Submitted:", data);
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full font-jakarta"
    >
      <InputField
        name="name"
        control={control}
        type="text"
        placeholder="Name"
        inputClassName="h-[60px]"
        placeholderAnimate
        rules={{ required: "Name is required" }}
        error={errors.name?.message}
      />

      <InputField
        name="email"
        control={control}
        type="email"
        placeholder="Email"
        inputClassName="h-[60px]"
        placeholderAnimate
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email regex
            message: "Enter a valid email",
          },
        }}
        error={errors.email?.message}
      />

      <PhoneNumberInput
        name="phoneNumber"
        control={control}
        placeholder="Phone Number"
        inputClassName="h-[60px]"
        rules={{
          required: "Phone number is required",
          validate: (value) =>
            value && value.length > 8 ? true : "Enter a valid phone number",
        }}        error={errors.phoneNumber?.message}
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

      <InputField
        name="confirmPassword"
        control={control}
        type="password"
        placeholder="Confirm Password"
        inputClassName="h-[60px]"
        placeholderAnimate
        rules={{
          required: "Confirm your password",
          validate: (value) =>
            value === password || "Passwords do not match", // ✅ confirm password check
        }}
        error={errors.confirmPassword?.message}
      />

      <Button type="submit" variant="primary" className="w-full mt-6 font-anevir">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
