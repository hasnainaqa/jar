"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import PhoneNumberInput from "../ui/PhoneNumberInput.tsx";

const SignupForm = () => {
  const [password, setPassword] = useState("");

  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("clicked");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full"
    >
      <InputField
        name="name"
        control={control}
        type="text"
        className="w-full"
        placeholder="Name"
        inputClassName="h-[60px]"
        placeholderAnimate={true}
      />
      <InputField
        name="email"
        control={control}
        type="email"
        className="w-full"
        placeholder="Email"
        inputClassName="h-[60px]"
        placeholderAnimate={true}
      />
      <PhoneNumberInput
        name="phoneNumber"
        control={control}
        placeholder="Phone Number"
        inputClassName="h-[60px]"
      />
      <InputField
        name="password"
        control={control}
        type="password"
        className="w-full"
        placeholder="Password"
        inputClassName="h-[60px]"
        placeholderAnimate={true}
      />
      <InputField
        name="confirmPassword"
        control={control}
        type="password"
        className="w-full"
        placeholder="Confirm Password"
        inputClassName="h-[60px]"
        placeholderAnimate={true}
      />
      <Button type="submit" variant="primary" className="w-full mt-6">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
