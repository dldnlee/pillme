'use client'
import { FiArrowLeft } from "react-icons/fi"
import { useRouter } from "next/navigation"


export default function StockLayout({children} : {children: React.ReactNode}) {
  const router = useRouter();


  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white shadow">
        <button onClick={() => router.back()} className="text-gray-600">
          <FiArrowLeft className="size-[20px]" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">매장 재고 목록</h1>
        <div className="w-5" />
      </div>
      {children}
    </div>
  )
}