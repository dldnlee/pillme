import React from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineCheckCircle, AiOutlineUnorderedList } from "react-icons/ai";

const BottomNavBar: React.FC = () => {
  return (
    <div className="absolute bottom-0 inset-x-0 bg-white shadow-lg border-t border-gray-200 pb-6">
      <div className="flex justify-around py-2">
        {/* Home */}
        <Link href="/home" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <AiOutlineHome size={24} />
            <span className="text-xs mt-1">홈</span>
        </Link>

        {/* Order List */}
        <Link href="/order-list" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <AiOutlineShoppingCart size={24} />
            <span className="text-xs mt-1">주문목록</span>
        </Link>

        {/* Prescription Complete */}
        <Link href="/prescription-complete" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <AiOutlineCheckCircle size={24} />
            <span className="text-xs mt-1">조제완료</span>
        </Link>

        {/* Store Inventory */}
        <Link href="/store-inventory" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <AiOutlineUnorderedList size={24} />
            <span className="text-xs mt-1">매장재고</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;