'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const OrderCompletedPage: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const router = useRouter();
  const totalPages = 5;

  const dummyOrders = [
    { id: "as129e8uaw", title: "바이토린정", date: "2024-10-12", patient: "박지민", info: "10/10외 1종" },
    { id: "as129e8uaw", title: "바이토린정", date: "2024-10-12", patient: "박지민", info: "10/10외 1종" },
    { id: "as129e8uaw", title: "바이토린정", date: "2024-10-12", patient: "박지민", info: "10/10외 1종" },
    { id: "as129e8uaw", title: "바이토린정", date: "2024-10-12", patient: "박지민", info: "10/10외 1종" },
    { id: "as129e8uaw", title: "바이토린정", date: "2024-10-12", patient: "박지민", info: "10/10외 1종" },
    { id: "as129e8uaw", title: "바이토린정", date: "2024-10-12", patient: "박지민", info: "10/10외 1종" },
    
  ];

  return (
    <div className="w-full h-screen bg-white relative flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white shadow">
        <button onClick={() => router.back()} className="text-gray-600">
          <FiArrowLeft className="size-[20px]" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">조제 완료 목록</h1>
        <div className="w-5" />
      </div>

      {/* Order List */}
      <div className="flex w-full h-full overflow-auto">
        <ul className="divide-y divide-gray-200 w-full">
          {dummyOrders.map((order, idx) => (
            <li key={idx}>
              <Link href={`orderinfo/list/details/${order.id}`} className="flex justify-between items-center px-4 py-3 hover:bg-gray-200">
                <div>
                  <p className="text-sm font-bold text-gray-800">{order.title}</p>
                  <p className="text-xs text-gray-500">
                    <span>{order.info} - </span>
                    {order.patient}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <p className="text-black text-xs">{order.date}</p>
                  <SlArrowRight size={12} className="text-gray-400" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination */}
      <div className="sticky bottom-[61px] flex justify-center items-center gap-2 bg-white shadow-lg border-t">
        <SlArrowLeft size={12} className="text-gray-400" />
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)} // Update active page on click
            className={`px-4 py-2  text-sm rounded ${
              activePage === page
                ? "bg-black text-white" // Active page styling
                : "text-gray-600 hover:bg-gray-200" // Inactive page styling
            }`}
          >
            {page}
          </button>
        ))}
        <SlArrowRight size={12} className="text-gray-400" />
      </div>
    </div>
  );
};

export default OrderCompletedPage;
