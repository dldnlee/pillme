'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import ListItem from "@/app/components/ListItem";


const dummyMedicines = [
  {
    name: "타이레놀",
    oneDayAmount: "500mg",
    oneDayFreq: "3회",
    medPeriod: "5일",
    caution: "식사 후 복용하세요.",
  },
  {
    name: "아스피린",
    oneDayAmount: "100mg",
    oneDayFreq: "1회",
    medPeriod: "7일",
    caution: "공복에 복용을 피하세요.",
  },
  {
    name: "비타민 C",
    oneDayAmount: "1000mg",
    oneDayFreq: "1회",
    medPeriod: "30일",
    caution: "과다 복용 시 설사를 유발할 수 있습니다.",
  },
  {
    name: "플루코나졸",
    oneDayAmount: "150mg",
    oneDayFreq: "1회",
    medPeriod: "1일",
    caution: "임산부는 복용 전에 의사와 상담하세요.",
  },
  {
    name: "오메가 3",
    oneDayAmount: "1000mg",
    oneDayFreq: "2회",
    medPeriod: "60일",
    caution: "혈액 응고 장애 환자는 주의하세요.",
  },
  {
    name: "로사르탄",
    oneDayAmount: "50mg",
    oneDayFreq: "1회",
    medPeriod: "14일",
    caution: "어지러움을 유발할 수 있으니 운전 시 주의하세요.",
  },
  {
    name: "세파클러",
    oneDayAmount: "250mg",
    oneDayFreq: "3회",
    medPeriod: "10일",
    caution: "알레르기 반응이 나타나면 복용을 중단하세요.",
  },
];


const ListDetailsPage: React.FC = () => {
  const router = useRouter();
  // const { id } = useParams(); // Extract the `id` from the dynamic route

  return (
    <div className="w-full h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white shadow">
        <button onClick={() => router.back()} className="text-gray-600">
          <FiArrowLeft className="size-[20px]" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">처방전</h1>
        <div className="w-5" />
      </div>
      {/* Medication Info */}
      <div className="w-full flex p-4">
        <div className="flex-grow">
          <p>환자정보:</p>
          <p>발행기관:</p>
        </div>
        <div className="flex-grow">
          <p>조제약사:</p>
          <p>조제일자:</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 overflow-auto flex flex-col gap-y-3 pb-[100px]">
        {
          dummyMedicines.map((med, idx) => (
            <ListItem 
            key={idx}
            name={med.name} 
            oneDayAmount={med.oneDayAmount}
            oneDayFreq={med.oneDayFreq}
            medPeriod={med.medPeriod}
            caution={med.caution}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ListDetailsPage;