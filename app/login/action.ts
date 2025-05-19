"use server";

// import { redirect } from "next/navigation";

const handleForm = async (prevState: any, formData: FormData) => {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //  redirect("/");
  return {
    errors: ["wrong password", "password too short"],
  };
};

export default handleForm;
