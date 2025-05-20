"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import HomeButton from "@/components/home-button";
import { useFormState } from "react-dom";
import { smsLogIn } from "./action";

const initialState = {
  verificationcode: false,
  error: undefined
}

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogIn, initialState);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 *:font-medium">
          <h2 className="text-4xl">SMS Log In</h2>
          <h2 className="text-2xl">Verify Your Phone Number</h2>
        </div>
        <HomeButton />
      </div>
      <form className="flex flex-col gap-3" action={dispatch}>
        <Input
          type="number"
          placeholder="Phone Number"
          required
          name="phonenumber"
          error={state?.error?.formErrors}
        />
        {state.verificationcode && <Input
          type="number"
          placeholder="Verification Code"
          required
          name="verificationcode"
          min={100000}
          max={999999}
          error={state?.error?.formErrors}
        />}
        <Button text={state.verificationcode ? "Verify" : "Send Verification SMS"} />
      </form>
    </div>
  );
}