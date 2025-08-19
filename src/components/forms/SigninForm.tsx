"use client";

import { useForm } from "react-hook-form";
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

  const onSubmit = (data: SigninFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full font-jakarta"
    >
      <InputField
        name="email"
        control={control}
        type="email"
        placeholder="Email"
        inputClassName="h-[60px]"
        placeholderAnimate
        rules={{ required: "Email is required" }} // ✅ required
        error={errors.email?.message} // ✅ show error
      />

      <InputField
        name="password"
        control={control}
        type="password"
        placeholder="Password"
        inputClassName="h-[60px]"
        placeholderAnimate
        rules={{ required: "Password is required" }} // ✅ required
        error={errors.password?.message} // ✅ show error
      />

      <Button type="submit" variant="primary" className="w-full mt-6 font-anevir">
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
