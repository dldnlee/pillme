// components/Sidebar.tsx
'use client'
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineSetting } from "react-icons/ai";
import { BsClipboard2Check, BsPeople } from "react-icons/bs";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoMdLogOut } from "react-icons/io";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();


  return (
    <div className="w-60 max-h-full bg-white flex flex-col flex-grow justify-between border-e">
      {/* Navigation */}
      <nav className="">
        <ul className="">
          <li>
            <Link href="/pharmacist/orders" className="p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-pink-500">
              <AiOutlineShoppingCart size={20} />
              조제 요청
            </Link>
          </li>
          <li>
            <Link href="/pharmacist/completed" className="p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-pink-500">
              <BsClipboard2Check size={20} />
              조제 완료
            </Link>
          </li>
          <li>
            <Link href="/pharmacist/pickup" className="p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-pink-500">
              <BsPeople size={20} />
              현장 접수
            </Link>
          </li>
          <li>
            <Link href="/pharmacist/inventory" className="p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-pink-500">
              <HiOutlineRectangleStack size={20} />
              매장 재고
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 pb-6 space-y-4">
        <Link href="/settings" className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
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

export default Sidebar;
