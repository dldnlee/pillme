import location from "@/app/assets/icons/location.svg";
import phone from "@/app/assets/icons/phone.svg";
import Image from "next/image";
import Popup from "./Popup";
import { useState } from "react";

export default function PickupItems({title, address, number} : {title: string, address: string, number: string}) {
  // const [active, setActive] = useState();
  const [popUpOpen, setPopUpOpen] = useState(false);


  return (
    <li className="border-b-2 py-2 flex justify-between items-center">
      <div>
        <h3 className="font-bold py-1">{title}</h3>
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
      onClick={() => setPopUpOpen(true)}
      className="text-xs font-semibold p-2 rounded-lg h-[53px] bg-skyblue hover:bg-skyblue/30">
        픽억예약
      </button>
      <Popup isOpen={popUpOpen} onClose={() => setPopUpOpen(false)} title={title} address={address} number={number}/>
    </li>
  )
}