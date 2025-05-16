import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import gitLogo from "@/images/github-mark-white.svg"
import Image from "next/image";

export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-3">
        <Link
          className="primary-btn py-2 flex items-center justify-center gap-2"
          href="/github/start"
        >
          <Image src={gitLogo} alt="git logo" width={20} height={20} />
          <span>Continue with GitHub</span>
        </Link>
        <Link
          className="primary-btn py-2 flex items-center justify-center gap-2"
          href="/sms"
        >
          <span><ChatBubbleOvalLeftIcon className="h-5 w-5" /></span>
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  )
}