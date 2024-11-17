
import React from "react";
import { useRouter } from "next/router";

const OrderDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const dummyDetails = [
    {
      id: 1,
      info: "환자정보: 박지민",
      issuingAgency: "발행기관: 서울 병원",
      prescriptionDate: "조제일자: 2024-10-10",
      pharmacist: "조제사: 김철수",
      items: [
        {
          id: "A1",
          medicine: "바이토린정",
          dose: "1회투약량: 1정",
          frequency: "1일투약횟수: 2회",
          total: "총투약수: 30정",
          caution: "※주의사항: 식후 복용",
        },
        {
          id: "A2",
          medicine: "아세트아미노펜",
          dose: "1회투약량: 2정",
          frequency: "1일투약횟수: 3회",
          total: "총투약수: 60정",
          caution: "※주의사항: 공복에 복용",
        },
      ],
    },
  ];

  const order = dummyDetails.find((detail) => detail.id === parseInt(id as string));

  if (!order) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow">
        <button onClick={() => router.back()} className="text-gray-600">←</button>
        <h1 className="text-lg font-bold text-gray-800">처방전</h1>
        <div className="w-5" />
      </div>

      {/* Order Details */}
      <div className="px-4 py-6">
        <p className="text-sm text-gray-800">{order.info}</p>
        <p className="text-sm text-gray-800">{order.issuingAgency}</p>
        <p className="text-sm text-gray-800">{order.prescriptionDate}</p>
        <p className="text-sm text-gray-800">{order.pharmacist}</p>

        {/* Prescription Items */}
        <div className="mt-4 space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="p-4 border rounded-md">
              <p className="text-sm font-bold">{item.medicine}</p>
              <p className="text-xs text-gray-600">{item.dose}</p>
              <p className="text-xs text-gray-600">{item.frequency}</p>
              <p className="text-xs text-gray-600">{item.total}</p>
              <p className="text-xs text-red-600">{item.caution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;