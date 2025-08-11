// components/PhoneNumberInput.tsx
"use client";

import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface PhoneNumberInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
}

const PhoneNumberInput = <T extends FieldValues>({
  name,
  control,
  label,
  error,
  className = "",
  inputClassName,
  placeholder,
}: PhoneNumberInputProps<T>) => {
  return (
    <div className={` ${className}`}>
      {label && (
        <label className="block mb-1 font-medium text-sm">{label}</label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative">
            <PhoneInput
              {...field}
              defaultCountry="SA"
              international
              countryCallingCodeEditable={true}
              className={`peer w-full px-4 py-2 border-2 rounded-[10px] focus:outline-none text-(--primary-black) ${
                error ? "border-red-500 ring-red-200" : "border-(--light-grey)"
              } ${inputClassName}`}
            />
            <label
              htmlFor={name}
              className="absolute -z-1 left-4 top-1 text-(--gray-2) text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-(--grey-text) peer-focus:text-(--grey-text)"
            >
              {placeholder}
            </label>
          </div>
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
