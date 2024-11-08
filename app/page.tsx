'use client'
import Image from "next/image";
import mainChar from "@/app/assets/icons/pillme_character.png";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { setTimeout } from "timers";


export default function Home() {
  
  useEffect(() => {
    setTimeout(() => {
      redirect("/home");
    }, 2000)
  }, [])


  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen animate-pulse sm:p-20 font-[family-name:var(--font-geist-sans)] w-full h-full">
      <p className="text-xs">약사에게 추천받는 맞춤형 건강기능식품</p>
      <div className="flex items-center flex-col justify-center gap-2">
        <Image src={mainChar} alt="Pill Me 케릭터" className="w-[100px]"/>
        <h1 className="text-3xl font-extrabold text-primary">Pill Me</h1>
      </div>

    </div>
  );
}
