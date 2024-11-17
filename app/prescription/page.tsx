
// import Image from 'next/image';
'use client'
import Header from '../components/Header';
import ReturnButton from '../components/ReturnButton';
import { CgSearchLoading } from "react-icons/cg";
import React, { useState } from "react";
import PopUp from './components/Popup';


interface Medication {
  id: number;
  name: string;
  company: string;
  ingredients: string;
  usage: string;
  warnings: string;
}

const MedicineContent: React.FC = () => {
  const [view, setView] = useState<"list" | "details">("list"); // Tracks the current screen
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null); // Selected item

  const dummyData: Medication[] = [
    {
      id: 1,
      name: "복합써스펜좌약",
      company: "한미약품(주)",
      ingredients: "아세트아미노펜, 이부프로펜",
      usage: "감기로 인한 발열 및 통증에 사용합니다.",
      warnings: "복용 전에 의사와 상담하세요.",
    },
    {
      id: 2,
      name: "보령뮤코미스트액(아세틸시스테인)",
      company: "(주)보령",
      ingredients: "아세틸시스테인",
      usage: "기관지염 및 호흡기 질환에 사용합니다.",
      warnings: "간 기능 장애 환자는 복용을 피하세요.",
    },
    // Add more dummy data here
  ];

  const handleItemClick = (medication: Medication) => {
    setSelectedMedication(medication);
    setView("details");
  };

  const handleBackClick = () => {
    setSelectedMedication(null);
    setView("list");
  };

  return (
    <div className="h-full px-4">
      {view === "list" && (
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">약품 검색</h2>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="약명을 입력하세요."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* List Items */}
          <ul className="divide-y divide-gray-200">
            {dummyData.map((medicine) => (
              <li
                key={medicine.id}
                onClick={() => handleItemClick(medicine)}
                className="flex justify-between items-center py-4 cursor-pointer hover:bg-gray-100"
              >
                <div>
                  <p className="text-sm font-bold">{medicine.name}</p>
                  <p className="text-xs text-gray-500">{medicine.company}</p>
                </div>
                <span className="text-gray-400">→</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === "details" && selectedMedication && (
        <div>
          {/* Header with Back Button */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={handleBackClick} className="text-gray-500 hover:text-gray-800">
              ← Back
            </button>
            <h2 className="text-lg font-bold">{selectedMedication.name}</h2>
          </div>

          {/* Details Content */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">제조사</h3>
              <p className="text-gray-600">{selectedMedication.company}</p>
            </div>
            <div>
              <h3 className="font-bold">주성분</h3>
              <p className="text-gray-600">{selectedMedication.ingredients}</p>
            </div>
            <div>
              <h3 className="font-bold">효능 및 효과</h3>
              <p className="text-gray-600">{selectedMedication.usage}</p>
            </div>
            <div>
              <h3 className="font-bold">사용상의 주의사항</h3>
              <p className="text-gray-600">{selectedMedication.warnings}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};







export default function PrescriptionPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  return (
    <div className="w-full h-full flex flex-col items-center bg-white relative">
      <Header />
      {/* Header */}
      <header className="flex items-center w-full px-4 py-2 border-b bg-white">
        <ReturnButton /> 
        <h1 className="flex-1 text-center text-lg font-bold text-black">처방전 미리보기</h1>
      </header>

      {/* Prescription Information */}
      <div className="w-full p-4 bg-white">
        <div className="flex justify-between text-sm text-gray-700">
          <div>
            <p>환자정보:</p>
            <p>발행기관:</p>
          </div>
          <div className="text-right">
            <p>조제약사:</p>
            <p>조제일자:</p>
          </div>
        </div>
      </div>

      {/* Prescription Items */}
      <div className="flex-1 w-full overflow-y-auto p-4 space-y-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex items-center border border-pink-200 rounded-lg p-4 bg-white"
          >
            <div className="w-16 h-16 bg-gray-300 rounded-md" />
            <div className="ml-4 text-sm text-gray-700">
              <p>약품명:</p>
              <p>1회투약량:</p>
              <p>1일투약횟수:</p>
              <p>총투약일수:</p>
              <p>※주의사항:</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t flex justify-between gap-2">
        <button 
        onClick={() => setIsPopupOpen(true)}
        className="flex items-center justify-center gap-2 p-2 border border-primary rounded-lg bg-white hover:bg-tertiary">
          <CgSearchLoading className='size-[30px] text-primary'/> 
        </button>
        <button className="flex items-center justify-center gap-2 w-full bg-tertiary hover:bg-tertiary/50 rounded-lg">
          약사와 상담하기
        </button>
        <button className="flex items-center justify-center w-full bg-tertiary text-black hover:bg-tertiary/50 rounded-lg">
          결제하기
        </button>
      </div>
      {/* Popup Component */}
      <PopUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        content={
          <MedicineContent />
        }
      />
    </div>
  );
}