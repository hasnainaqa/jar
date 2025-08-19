import React from "react";
import Image from "next/image";
import SigninForm from "@/components/forms/SigninForm";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full h-[-webkit-fill-available] flex">
        {/*  Form */}
        <div className="w-1/2 py-6 px-12 pt-[100px] flex flex-col ">
          <Image
            src="/assets/icons/SiteLogo.svg"
            width={115}
            height={122}
            alt="JAR logo"
            className="mb-12"
          />
          <div className="mb-8">
            <h1 className="font-bold typo-heading1">Sign In</h1>
            <p className="typo-body text-(--grey-text)">
              Please provide details to sign up
            </p>
          </div>
          <SigninForm />
        </div>

        {/* image with border */}
        <div className="w-1/2 h-[100vh] relative overflow-hidden">
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
