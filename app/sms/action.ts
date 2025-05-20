"use server";

import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong Phone Number"
  );

const verificationSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  verificationcode: boolean;
}

export async function smsLogIn(prevState: ActionState, formData: FormData) {
  const data = {
    phonenumber: formData.get("phonenumber"),
    verificationcode: formData.get("verificationcode"),
  };
  // console.log(data);
  // console.log(verficationSchema.parse(formData.get("verificationcode")));
  if (!prevState.verificationcode) {
    const result = phoneSchema.safeParse(data.phonenumber);
    if (!result.success) {
      console.log(result.error.flatten());
      return {
        verificationcode: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        verificationcode: true,
      };
    }
  } else {
    const result = verificationSchema.safeParse(data.verificationcode);
    if (!result.success) {
      return {
        verificationcode: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
