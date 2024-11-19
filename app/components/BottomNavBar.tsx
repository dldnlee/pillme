
'use client'
import React from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";
import { BsClipboard2Check } from "react-icons/bs";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { usePathname } from "next/navigation";

const BottomNavBar: React.FC = () => {
  const pathname = usePathname();
  // Function to check if the current route is active
  const isActive = (path: string) => pathname.includes(path);

  return (
    <div className="sticky bottom-0 left-0 bg-white shadow-lg border-t border-gray-200 pb-6">
      <div className="flex justify-around py-2">
        {/* Home */}
        <Link
          href="/home"
          className={`flex flex-col items-center ${
            isActive("/home") ? "text-black" : "text-gray-300"
          }`}
        >
          <AiOutlineHome size={24} />
          <span className="text-xs mt-1">홈</span>
        </Link>

        {/* Order List */}
        <Link
          href="/orderinfo/list"
          className={`flex flex-col items-center ${
            isActive("/orderinfo/list") ? "text-black" : "text-gray-300"
          }`}
        >
          <HiOutlineRectangleStack size={24} />
          <span className="text-xs mt-1">주문목록</span>
        </Link>

        {/* Prescription Complete */}
        <Link
          href="/orderinfo/completed"
          className={`flex flex-col items-center ${
            isActive("/orderinfo/completed") ? "text-black" : "text-gray-300"
          }`}
        >
          <BsClipboard2Check size={22} />
          <span className="text-xs mt-1">조제완료</span>
        </Link>

        {/* Store Inventory */}
        <Link
          href="/orderinfo/stock"
          className={`flex flex-col items-center ${
            isActive("/orderinfo/stock") ? "text-black" : "text-gray-300"
          }`}
        >
          <AiOutlineUnorderedList size={24} />
          <span className="text-xs mt-1">매장재고</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
