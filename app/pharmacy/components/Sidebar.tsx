// components/Sidebar.tsx
'use client'
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineSetting } from "react-icons/ai";
import { BsClipboard2Check, BsPeople } from "react-icons/bs";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoMdLogOut } from "react-icons/io";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();


  return (
    <div className="h-full bg-white flex flex-col flex-grow justify-between border-e">
      {/* Navigation */}
      <div className="flex w-full h-full">
        <nav className="w-60 bg-gray-400 flex flex-col justify-between">
          <ul className="">
            <li>
              <Link href="/pharmacy" className={`${pathname === "/pharmacy" ? "font-bold" : ""} p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-pink-500`}>
                <AiOutlineShoppingCart size={20} />
                조제 요청
              </Link>
            </li>
            <li>
              <Link href="/pharmacy/completed" className={`${pathname.includes("/completed") ? "font-bold" : ""} p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-pink-500`}>
                <BsClipboard2Check size={20} />
                조제 완료
              </Link>
            </li>
            <li>
              <Link href="/pharmacy/pickup" className={`${pathname.includes("/pickup") ? "font-bold" : ""} p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-pink-500`}>
                <BsPeople size={20} />
                현장 접수
              </Link>
            </li>
            <li>
              <Link href="/pharmacy/inventory" className={`${pathname.includes("/inventory") ? "font-bold" : ""} p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-pink-500`}>
                <HiOutlineRectangleStack size={20} />
                매장 재고
              </Link>
            </li>
          </ul>
          <ul className="px-4 pb-6 space-y-4">
            <li>
              <Link href="/settings" className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
                <AiOutlineSetting size={20} />
                Settings
              </Link>
            </li>
            <li>
              <button className="flex items-center gap-4 text-gray-700 hover:text-pink-500">
                <IoMdLogOut size={20} />
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
        
      </div>

      {/* Footer */}
    </div>
  );
};

export default Sidebar;
