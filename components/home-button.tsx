import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href={`/`} className="primary-btn py-2.5 w-40 m-auto">🥕 Home 🥕</Link>
  )
}