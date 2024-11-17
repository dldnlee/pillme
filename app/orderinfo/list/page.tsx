'use client'
import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

const OrderListPage: React.FC = () => {
  const router = useRouter();


  const dummyOrders = [
    { id: 1, title: "바이토린정", date: "2024-10-12", patient: "박지민" },
    { id: 2, title: "바이토린정", date: "2024-10-12", patient: "박지민" },
    { id: 3, title: "바이토린정", date: "2024-10-12", patient: "박지민" },
    { id: 4, title: "바이토린정", date: "2024-10-12", patient: "박지민" },
    { id: 5, title: "바이토린정", date: "2024-10-12", patient: "박지민" },
    { id: 6, title: "바이토린정", date: "2024-10-12", patient: "박지민" },
    { id: 7, title: "바이토린정", date: "2024-10-12", patient: "박지민" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow">
        <button 
        onClick={() => router.back()}
        className="text-gray-600">
          <FiArrowLeft className="size-[20px]"/>
        </button>
        
        <h1 className="text-lg font-bold text-gray-800">주문 목록</h1>
        <div className="w-5" />
      </div>

      {/* Order List */}
      <div className="px-4 py-6">
        <ul className="divide-y divide-gray-200">
          {dummyOrders.map((order) => (
            <li key={order.id} className="py-4">
              <Link href={`orderinfo/list/details/${order.id}`} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold">{order.title}</p>
                  <p className="text-xs text-gray-500">
                    {order.date} · {order.patient}
                  </p>
                </div>
                <span className="text-gray-400">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className="px-2 py-1 text-sm text-gray-600 rounded hover:bg-gray-200"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderListPage;