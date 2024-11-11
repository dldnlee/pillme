
// import Image from 'next/image';
'use client'
import { FiSearch } from 'react-icons/fi';
import Header from '../components/Header';
import ReturnButton from '../components/ReturnButton';


export default function PrescriptionPage() {

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
        {[...Array(3)].map((_, index) => (
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
      <div className="absolute bottom-0 w-full bg-white p-4 border-t flex justify-between">
        <button className="flex items-center justify-center gap-2 w-1/2 py-3 bg-pink-100 text-pink-500 font-bold rounded-lg">
          <FiSearch />
          약사와 상담하기
        </button>
        <button className="flex items-center justify-center w-1/2 py-3 ml-2 bg-pink-500 text-white font-bold rounded-lg">
          결제하기
        </button>
      </div>
    </div>
  );
}