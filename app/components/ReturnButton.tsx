'use client'
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";



export default function ReturnButton() {
  const router = useRouter();

  return (
    <button 
    onClick={() => router.back()}
    className="w-[22px]">
      <FaArrowLeft className="text-lg text-gray-600 cursor-pointer" />
    </button>
  )
}