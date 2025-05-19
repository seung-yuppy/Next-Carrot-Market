"use client";

import FormButton from "@/components/form-button";
import HomeButton from "@/components/home-button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./action";
import Input from "@/components/Input";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 *:font-medium">
          <h2 className="text-4xl">안녕하세요</h2>
          <h2 className="text-2xl">Fill in the form below to join!</h2>
        </div>
        <HomeButton />
      </div>
      <form className="flex flex-col gap-3" action={dispatch}>
        <Input
          type="text"
          placeholder="User Name"
          required
          name="username"
          error={state?.fieldErrors.username}
          minLength={3}
          maxLength={10}
        />
        <Input
          type="email"
          placeholder="Email"
          required
          name="email"
          error={state?.fieldErrors.email}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          name="password"
          error={state?.fieldErrors.password}
          minLength={4}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          required
          name="confirmpassword"
          error={state?.fieldErrors.confirmpassword}
          minLength={4}
        />
        <FormButton text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}