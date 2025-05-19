"use client";

import FormButton from "@/components/form-button";
import FormInput from "@/components/Input";
import HomeButton from "@/components/home-button";
import SocialLogin from "@/components/social-login";
import handleForm from "./action";
import { useFormState } from "react-dom";

export default function Login() {
  const [state, action] = useFormState(handleForm, null)

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 *:font-medium">
          <h2 className="text-4xl">안녕하세요</h2>
          <h2 className="text-2xl">Log In With Email & Password</h2>
        </div>
        <HomeButton />
      </div>
      <form className="flex flex-col gap-3" action={action}>
        <FormInput
          type="email"
          placeholder="Email"
          required
          name="email"
          error={[]}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          name="password"
          error={state?.errors ?? []}
        />
        <FormButton text="Log In" />
      </form>
      <SocialLogin />
    </div>
  );
}