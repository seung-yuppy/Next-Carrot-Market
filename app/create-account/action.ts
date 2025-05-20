"use server";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");

const checkPassword = ({
  password,
  confirmpassword,
}: {
  password: string;
  confirmpassword: string;
}) => password === confirmpassword;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "UserName must be as string.",
        required_error: "where is my username?",
      })
      .toLowerCase()
      .trim()
      .transform((username) => `!!${username}!!`)
      .refine(checkUsername, "No potato plz..."),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirmpassword: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPassword, {
    message: "Both password should be the same!",
    path: ["confirmpassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmpassword: formData.get("confirmpassword"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }

  // try {
  //   formSchema.parse(data);
  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }
}
