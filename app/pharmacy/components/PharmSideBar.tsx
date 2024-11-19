// components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineSetting } from "react-icons/ai";
import { BsClipboard2Check, BsPeople } from "react-icons/bs";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoMdLogOut } from "react-icons/io";

const PharmSideBar: React.FC = () => {
  return (
    <div className="h-screen w-60 bg-white shadow-lg flex flex-col justify-between">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-pink-500">Pill Me</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul className="space-y-2 px-4">
          <li>
            <Link href="/pharmacist/orders" className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
              <AiOutlineShoppingCart size={20} />
              조제 요청
            </Link>
          </li>
          <li>
            <Link href="/pharmacist/completed" className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
              <BsClipboard2Check size={20} />
              조제 완료
            </Link>
          </li>
          <li>
            <Link href="/pharmacist/pickup" className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
              <BsPeople size={20} />
              현장 접수
            </Link>
          </li>
          <li>
            <Link href="/pharmacist/inventory" className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
              <HiOutlineRectangleStack size={20} />
              매장 재고
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 pb-6 space-y-4">
        <Link href="/pharmacist/settings" className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
          <AiOutlineSetting size={20} />
          Settings
        </Link>
        <button className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
          <IoMdLogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default PharmSideBar;