'use client'
import React from "react";
import InputField from "@/app/components/InputField";

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

interface ListItemProps {
  name: string;
  oneDayAmount: string;
  oneDayFreq: string;
  medPeriod: string;
  caution: string;
}

const ListItem = ({name, oneDayAmount, oneDayFreq, medPeriod, caution} : ListItemProps) => {
  return (
    <div className="flex items-center justify-start w-full p-2 gap-2 border border-primary rounded-lg">
      <div className="size-[100px] flex-shrink-0 flex bg-gray-300"></div>
      <div className="flex flex-col w-full">
        <p>약품명: {name}</p>
        <p>1회투약량: {oneDayAmount}</p>
        <p>1일투약횟수: {oneDayFreq}</p>
        <p>총투약일수: {medPeriod}</p>
        <p className="truncate w-[200px]">주의사항: {caution}</p>
      </div>
    </div>
  )
}



const StockDetailsPage: React.FC = () => {
  // const { id } = useParams(); // Extract the `id` from the dynamic route

  return (
    <div className="w-full h-screen bg-white">
      {/* Medication Info */}
      <div className="p-4 pb-0">
        <InputField />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-y-3 pb-[100px]">
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

export default StockDetailsPage;