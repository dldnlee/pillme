'use client'

import Image from "next/image";

import { useSearchParams } from "next/navigation";
import InputField from "@/app/components/InputField";
import arrowLeft from "@/app/assets/icons/arrow_left.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { Suspense } from "react";


const dummyData = [
  {
    'text' : "셀레늄"
  },
  {
    'text' : "홍삼"
  },
  {
    'text' : "하비탈출"
  },
  {
    'text' : "비타민E"
  },
  {
    'text' : "비타민C"
  },
  {
    'text' : "셀레늄"
  }
]

const dummyData2 = [
  {
    "text" : "녹차추출물"
  },
  {
    "text" : "오랜지주스"
  },
  {
    "text" : "오랜지주스"
  }
]

function BottomMenu() {
  return (
    <div className='flex justify-center gap-2 text-center items-center w-full absolute p-4 bottom-0 text-white left-0 shadow-lg shadow-black pb-10 px-10'>
      <Link href="/home" className='py-4 px-4 w-full bg-primary hover:bg-primary/50 rounded-lg'>구매하기
      </Link>
      <Link href="/home" className="py-4 px-4 w-full bg-primary hover:bg-primary/50 rounded-lg">Pick-Up 신청
      </Link>
    </div>
  )
}

function CircularMenu() {
  return (
    <CircleMenu
    startAngle={-90}
    rotationAngle={360}
    itemSize={3.5}
    radius={7}
    rotationAngleInclusive={false}
    className="w-full h-[350px] flex items-center justify-center"
    open={true}
    menuToggleElement={(
      <button type="button" className="rounded-full size-[90px] border-2 border-primary hover:bg-primary hover:text-white bg-white">
        <p>녹차추출물</p>
      </button>
    )}
    >
      {
        dummyData.map((item,idx) => (
          <CircleMenuItem 
          key={idx}
          style={{
            borderColor: "#FF95DE",
            borderWidth: "2px",
          }}
          className=""
          >
            <p>{item.text}</p>
          </CircleMenuItem>
        ))
      }
    </CircleMenu>
  )
}


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
    <div className="p-5 flex flex-col gap-4 w-full h-full">
      <div className="flex w-full items-center justify-center gap-2">
        <Suspense>
          <Link href="./" replace={true}>
            <Image src={arrowLeft} alt="돌아가기" className="w-[30px]"/>
          </Link>
          <InputField userInput={search} />
      </Suspense>
      </div>
      <div className="w-full text-center text-xs p-4 bg-gray-200 rounded-xl flex flex-col gap-4">
        <div>
          <p><span className="font-bold">항산화 및 면역력 강화</span>에 대한 고민을 하고 계신 것 같아요.</p>
          <p>도움이 될만한 제품을 추천해드릴게요! 아래 원을 클릭해보세요.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-primary text-white p-3 text-xs hover:bg-white hover:text-black hover:border-primary font-bold rounded-xl w-2/5">도움이 되었어요!</button>
          <button className="bg-primary text-white p-3 hover:bg-white hover:text-black hover:border-primary font-bold rounded-xl w-3/5">의도한 결과가 아니에요...</button>
        </div>
      </div>
      <div className="w-full h-fit flex items-center justify-center">
        <CircularMenu />
      </div>
      <div className="w-full flex items-center justify-center gap-3 overflow-auto">
        {
          dummyData2.map((item, idx) => (
            <button key={idx} type="button" className="rounded-full text-xs bg-primary size-[60px] hover:bg-white text-white hover:text-black hover:border-2 hover:border-primary">{item.text}</button>
          ))
        }
      </div>
      
      <BottomMenu />
    </div>
  )
}