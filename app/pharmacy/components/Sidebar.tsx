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
    <div className="h-full bg-white flex flex-col flex-grow justify-between border-e rounded-e-xl">
      {/* Navigation */}
      <div className="flex w-full h-full py-4">
        <nav className="w-60 flex flex-col justify-between">
          <ul className="">
            <li>
              <Link href="/pharmacy" className={`${pathname === "/pharmacy" ? "font-extrabold text-primary" : ""} p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-primary`}>
                <AiOutlineShoppingCart size={20} />
                조제 요청
              </Link>
            </li>
            <li>
              <Link href="/pharmacy/completed" className={`${pathname.includes("/completed") ? "font-extrabold text-primary" : ""} p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-primary`}>
                <BsClipboard2Check size={20} />
                조제 완료
              </Link>
            </li>
            <li>
              <Link href="/pharmacy/pickup" className={`${pathname.includes("/pickup") ? "font-extrabold text-primary" : ""} p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-primary`}>
                <BsPeople size={20} />
                현장 접수
              </Link>
            </li>
            <li>
              <Link href="/pharmacy/inventory" className={`${pathname.includes("/inventory") ? "font-extrabold text-primary" : ""} p-4 hover:bg-gray-200 flex items-center gap-4 text-gray-700 hover:text-primary`}>
                <HiOutlineRectangleStack size={20} />
                매장 재고
              </Link>
            </li>
          </ul>
          <ul className="pb-6 border-t">
            <li>
              <Link href="/settings" className="flex p-4 items-center gap-4 text-gray-700 hover:text-primary hover:bg-gray-200">
                <AiOutlineSetting size={20} />
                Settings
              </Link>
            </li>
            <li>
              <Link href="/login" className="flex p-4 items-center gap-4 text-gray-700 hover:text-primary hover:bg-gray-200">
                <IoMdLogOut size={20} />
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
        
      </div>

      {/* Footer */}
    </div>
  );
};

export default Sidebar;
