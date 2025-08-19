import React from "react";
import Image from "next/image";
import SignupForm from "../../components/forms/SignupForm";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full h-[-webkit-fill-available] flex">
        {/*  Form */}
        <div className="w-1/2 py-6 px-12 flex flex-col pt-[100px] ">
          <Image
            src="/assets/icons/SiteLogo.svg"
            width={117}
            height={124}
            alt="JAR logo"
            className="mb-12"
          />
          <div className="mb-8">
            <h1 className="font-bold typo-heading2 mb-3 font-anevir ">Sign Up</h1>
            <p className="typo-body text-(--grey-text) font-jakarta">
              Please sign into your account
            </p>
          </div>
          <SignupForm />
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
