'use client'

import Image from "next/image";

import { useSearchParams } from "next/navigation";
import InputField from "@/app/components/InputField";
import arrowLeft from "@/app/assets/icons/arrow_left.svg";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function ResultPage() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams()

  // const search = searchParams.get('query')
  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery ) return;
    setSearch(searchQuery)
  }, [searchParams])


  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="flex w-full items-center justify-center gap-2">
        <Link href="./" replace={true}>
          <Image src={arrowLeft} alt="돌아가기" className="w-[30px]"/>
        </Link>
        <InputField userInput={search} />
      </div>
      <div className="w-full text-center text-xs p-4 bg-gray-200 rounded-xl flex flex-col gap-4">
        <div>
          <p><span className="font-bold">항산화 및 면역력 강화</span>에 대한 고민을 하고 계신 것 같아요.</p>
          <p>도움이 될만한 제품을 추천해드릴게요! 아래 원을 클릭해보세요.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-primary text-white p-3 font-bold rounded-xl w-full"> 도움이 되었어요!</button>
          <button className="bg-primary text-white p-3 font-bold rounded-xl w-full">의도한 결과가 아니에요...</button>
        </div>
      </div>
    </div>
  )
}