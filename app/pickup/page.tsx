'use client'
import InputField from "../components/InputField"
import Header from "../components/Header"
import PickupItems from "./components/PickupItems";
// import { useState } from "react";
import ConnectPharmacy from "../components/ConnectPharmacy";
import ReturnButton from "../components/ReturnButton";

const dummyData = [
  {
    title: "우리약국",
    address: "서울특별시 성동구 왕십리로 50, 지하 1층",
    number: "02-123-4567"
  },
  {
    title: "우리약국",
    address: "서울특별시 성동구 왕십리로 50, 지하 1층",
    number: "02-123-4567"
  },
  {
    title: "우리약국",
    address: "서울특별시 성동구 왕십리로 50, 지하 1층",
    number: "02-123-4567"
  },
  {
    title: "우리약국",
    address: "서울특별시 성동구 왕십리로 50, 지하 1층",
    number: "02-123-4567"
  },
]



function PickupHeader() {

  return (
    <div className="flex w-full items-center justify-center gap-2 px-6 py-3">
      <div className="flex flex-col items-center w-full gap-2">
        <div className="flex justify-between items-center w-full">
          <ReturnButton /> 
          <ConnectPharmacy />
          <button disabled className="size-[22px]" />
        </div>
        <InputField />
      </div>
    </div>
  )
}

export default function PickupPage() {


  return (
    <div className="w-full flex-col gap-4 h-full select-none relative">
      <Header />
      <PickupHeader />
      <div className="w-full py-3 px-9 flex flex-col gap-5 h-full">
        <iframe
        className="w-full h-[300px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.401553308366!2d126.92485753955076!3d37.55977100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989012a611d1%3A0xc5593fcec0823803!2sSinchon!5e0!3m2!1sen!2skr!4v1731042449409!5m2!1sen!2skr" width="600" height="450" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <h3 className="w-full border-b-2 pb-2 border-black/20 font-bold">검색 결과</h3>
          <ul>
            {dummyData.map((item, idx) => (
              <PickupItems key={idx} title={item.title} address={item.address} number={item.number}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}