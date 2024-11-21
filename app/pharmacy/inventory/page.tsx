'use client';

import InputField from '@/app/components/InputField';
import React, { useState } from 'react';

const InventoryPage: React.FC = () => {
  const [searchQuery, ] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy data for the inventory
  const dummyInventory = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `약품명 ${index + 1}`,
    openingDate: `2024-0${(index % 12) + 1}-01`,
    expiryDate: `2025-0${(index % 12) + 1}-01`,
    quantity: Math.floor(Math.random() * 100),
  }));

  // Pagination setup
  const itemsPerPage = 9;
  const totalPages = Math.ceil(dummyInventory.length / itemsPerPage);
  const filteredInventory = dummyInventory.filter((item) =>
    item.name.includes(searchQuery)
  );
  const paginatedInventory = filteredInventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white w-full">
      {/* Header */}
      <h1 className="sticky top-0 bg-white text-xl font-bold text-center border-b py-3">매장 재고 목록</h1>

      {/* Search Bar */}
      <div className="flex justify-center py-2">
        <div className="relative w-1/2">
          <InputField path="/pharmacy/inventory" placeholder='약명을 입력하세요.'/>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 py-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1  text-sm rounded hover:bg-gray-300"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 text-sm rounded ${
                currentPage === page
                  ? 'bg-black text-white'
                  : 'bg-white hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-3 py-1 text-sm rounded hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-3 gap-4">
        {paginatedInventory.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
          >
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-4"></div>
            <p className="text-sm font-bold text-gray-800">{item.name}</p>
            <p className="text-xs text-gray-600">개봉일자: {item.openingDate}</p>
            <p className="text-xs text-gray-600">유효기간: {item.expiryDate}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-gray-700">수량: {item.quantity}</p>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                  -
                </button>
                <button className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      
    </div>
  );
};

export default InventoryPage;
