"use client"

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface IButton {
  text: string;
}

export default function Button({ text, ...rest }: IButton & ButtonHTMLAttributes<HTMLButtonElement>) {
  // form의 자식 요소에서만 사용해야 한다 --> 자동으로 부모 form을 찾는다
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="primary-btn py-2.5 
    disabled:bg-neutral-400 disabled:text-neutral-200 disabled:cursor-not-allowed"
      disabled={pending}
      {...rest}
    >
      {pending ? "Loading..." : text}
    </button>
  )
}