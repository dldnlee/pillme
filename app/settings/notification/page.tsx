'use client'
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

const NotificationSettingsPage: React.FC = () => {
  const router = useRouter();


  const [settings, setSettings] = useState({
    messageAlerts: true,
    sound: true,
    vibration: true,
    popup: true,
    showContent: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow">
        <button 
        type="button"
        onClick={() => router.back()}
        className="text-gray-600">
          <FiArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">알림 설정</h1>
        <div className="w-5" />
      </div>

      {/* Notification Settings */}
      <div className="px-4 py-6 space-y-4">
        <div className="flex items-center justify-between border-b py-4">
          <span className="text-sm font-medium text-gray-800">메시지 알림</span>
          <button
            onClick={() => toggleSetting("messageAlerts")}
            className={`w-10 h-5 flex items-center rounded-full ${
              settings.messageAlerts ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                settings.messageAlerts ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <span className="text-sm font-medium text-gray-800">소리</span>
          <button
            onClick={() => toggleSetting("sound")}
            className={`w-10 h-5 flex items-center rounded-full ${
              settings.sound ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                settings.sound ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <span className="text-sm font-medium text-gray-800">진동</span>
          <button
            onClick={() => toggleSetting("vibration")}
            className={`w-10 h-5 flex items-center rounded-full ${
              settings.vibration ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                settings.vibration ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <span className="text-sm font-medium text-gray-800">알림 팝업</span>
          <button
            onClick={() => toggleSetting("popup")}
            className={`w-10 h-5 flex items-center rounded-full ${
              settings.popup ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                settings.popup ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <span className="text-sm font-medium text-gray-800">
            알림 내용 표시
          </span>
          <button
            onClick={() => toggleSetting("showContent")}
            className={`w-10 h-5 flex items-center rounded-full ${
              settings.showContent ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                settings.showContent ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsPage;