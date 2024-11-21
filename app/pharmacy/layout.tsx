// app/pharmacist/layout.tsx
import React from "react";
import Sidebar from "./components/Sidebar";
import "@/app/globals.css";

const PharmacistLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full">
      {/* Global Header */}
      <div className="bg-white fixed w-full z-20 border-b px-6 py-1 text-2xl font-bold text-pink-500">
        Pill Me
      </div>

      {/* Main Body */}
      <div className="h-full pt-[40px] w-full flex flex-grow-0">
        {/* Sidebar */}
        <Sidebar/>
        {children}
        {/* Main Content */}
      </div>
    </div>
  );
};

export default PharmacistLayout;
