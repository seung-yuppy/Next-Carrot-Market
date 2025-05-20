"use client";

import HomeButton from "@/components/home-button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import logIn from "./action";
import Input from "@/components/Input";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import Button from "@/components/Button";

export default function Login() {
  const [state, action] = useFormState(logIn, null)

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
          minLength={PASSWORD_MIN_LENGTH}
        />
        <Button text="Log In" />
      </form>
      <SocialLogin />
    </div>
  );
}