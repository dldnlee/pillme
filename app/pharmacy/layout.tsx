// app/pharmacist/layout.tsx
import React from "react";
import Sidebar from "./components/Sidebar";
import "@/app/globals.css";

const PharmacistLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* Global Header */}
      <div className="top-0 bg-white w-full border-b px-6 py-1 text-2xl font-bold text-pink-500">
        Pill Me
      </div>

      {/* Main Body */}
      <div className="flex flex-grow h-full w-full">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="w-full overflow-y-auto bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PharmacistLayout;
