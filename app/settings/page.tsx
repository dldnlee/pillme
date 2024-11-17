'use client'
import React from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { AiOutlineUser, AiOutlineBell, AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SettingsPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow">
        <button 
        onClick={() => router.back()}
        className="text-gray-600">
          <FiArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">Settings</h1>
        <button className="text-gray-600">
          <FiSearch size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        <h2 className="text-sm font-semibold text-gray-600 mb-4">Account</h2>
        <div className="space-y-4">
          {/* Account Settings */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center gap-3">
              <AiOutlineUser size={24} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-800">
                Account Settings
              </span>
            </div>
            <FiArrowLeft size={16} className="rotate-180 text-gray-400" />
          </div>

          {/* Notification Settings */}
          <Link 
          href={"settings/notification"}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center gap-3">
              <AiOutlineBell size={24} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-800">알림 설정</span>
            </div>
            <FiArrowLeft size={16} className="rotate-180 text-gray-400" />
          </Link>

          {/* Sign Out */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center gap-3">
              <AiOutlineLogout size={24} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-800">Sign Out</span>
            </div>
            <FiArrowLeft size={16} className="rotate-180 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;