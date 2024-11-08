'use client'
import InputField from "../components/InputField"
import Header from "../components/Header"
import location from "@/app/assets/icons/location.svg";
import phone from "@/app/assets/icons/phone.svg";
import arrowLeft from "@/app/assets/icons/arrow_left.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import pharmacyShop from "@/app/assets/icons/pharmacy_shop.svg";

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

function PickupItems({title, address, number} : {title: string, address: string, number: string}) {
  // const [active, setActive] = useState();


  return (
    <li className="border-b-2 py-2 flex justify-between items-center">
      <div>
        <h3>{title}</h3>
        <div className="flex gap-2 text-xs">
          <Image src={location} alt=""/>
          <p>{address}</p>
        </div>
        <div className="flex gap-2 text-xs">
          <Image src={phone} alt=""/>
          <p>{number}</p>
        </div>
      </div>
      <button 
      className="text-xs p-2 rounded-lg h-[53px] bg-skyblue hover:bg-skyblue/30">
        픽억예약
      </button>
    </li>
  )
}

// function InfoPopup({active} : {active: boolean}) {
//   return ( 
//     <div className={`bottom-0 left-0 ${active ? "fixed" : "hidden"} bg-white`}>


//     </div>
//   )
// }


export default function PickupPage() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Header />
      <div className="flex w-full items-center justify-center gap-2">
        <div className="flex flex-col items-center w-full gap-2">
          <div className="flex justify-between items-center w-full">
            <Link href="/home" className="w-[22px]">
              <Image src={arrowLeft} alt="돌아가기" className="w-full"/>
            </Link>
            <div className="flex items-center gap-1">
              <Image src={pharmacyShop} alt="Connect Pharmacy" />
              <p className="text-black text-lg font-extrabold">Connect Pharmacy</p>
            </div>
            <button disabled className="size-[22px]" />
          </div>
          <InputField />
        </div>
      </div>
      <iframe 
      className="w-full h-[300px]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.401553308366!2d126.92485753955076!3d37.55977100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989012a611d1%3A0xc5593fcec0823803!2sSinchon!5e0!3m2!1sen!2skr!4v1731042449409!5m2!1sen!2skr" width="600" height="450" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div>
        <h3 className="w-full border-b-2 pb-2 border-black/20">검색 결과</h3>
        <ul>
          {dummyData.map((item, idx) => (
            <PickupItems key={idx} title={item.title} address={item.address} number={item.number}/> 
          ))}
        </ul>
      </div>
    </div>
  )
}