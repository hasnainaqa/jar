"use client";

import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import PhoneNumberInput from "../ui/PhoneNumberInput.tsx";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const onSubmit = (data: SignupFormData) => {
    console.log("Form Submitted:", data);
    localStorage.setItem("user", JSON.stringify(data));
    router.push("/profile-setup");
  };

  const password = watch("password");

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full font-jakarta max-w-[424px]">
      <InputField
        name="name"
        control={control}
        type="text"
        placeholder="Name"
        inputClassName="h-[60px]"
        placeholderAnimate
        rules={{ required: "Name is required" }}
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value.replace(
            /[^A-Za-z\s]/g,
            ""
          );
        }}
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
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
            minLength: {
              value: 5,
              message: "Email must be at least 5 characters",
            },
            maxLength: {
              value: 50,
              message: "Email must not exceed 50 characters",
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
        }}
        error={errors.phoneNumber?.message}
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
          validate: (value) => value === password || "Password does not match", // ✅ confirm password check
        }}
        error={errors.confirmPassword?.message}
      />

      <Button
        type="submit"
        variant="primary"
        className="w-full mt-6 font-anevir">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
