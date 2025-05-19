"use server";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");

const checkPassword = ({
  password,
  confirmpassword,
}: {
  password: string;
  confirmpassword: string;
}) => password === confirmpassword;

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "UserName must be as string.",
        required_error: "where is my username?",
      })
      .min(3, "Too Short!!!")
      .max(10, "Too LonG~~")
      .toLowerCase()
      .trim()
      .transform((username) => `!!${username}!!`)
      .refine(checkUsername, "No potato plz..."),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(4)
      .regex(
        passwordRegex,
        "A password must have lowercase, UPPERCASE, a number and special characters"
      ),
    confirmpassword: z.string().min(4),
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
  console.log(result);
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
