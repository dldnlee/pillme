'use client'
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import InputField from "@/app/components/InputField";
import arrowLeft from "@/app/assets/icons/arrow_left.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { Suspense } from "react";
import box from '@/app/assets/icons/box.svg'
import link from '@/app/assets/icons/link.svg'


const dummyData = [
  {
    main: "녹차추출물",
    sub: ["셀레늄", "홍삼", "하비탈출", "비타민E", "비타민C"]
  },
  {
    main: "오렌지쥬스",
    sub: ["셀레늄", "홍삼", "하비탈출", "비타민E", "비타민C"]
  },
]

// const dummyData2 = [
//   {
//     "text" : "녹차추출물"
//   },
//   {
//     "text" : "오랜지주스"
//   },
//   {
//     "text" : "오랜지주스"
//   }
// ]

function BottomMenu() {
  return (
    <div className='fixed flex overflow-hidden justify-center gap-2 text-center items-center w-full h-fit p-4 text-black bg-white pb-10 border-t-2 px-10 bottom-0 left-0'>
      <Link href="https://www.coupang.com/np/search?component=&q=%EB%85%B9%EC%B0%A8%EC%B6%94%EC%B6%9C%EB%AC%BC&channel=user" className="flex items-center justify-center gap-2 py-4 px-4 w-full bg-tertiary hover:bg-white hover:border hover:border-tertiary rounded-lg">
        <Image src={link} alt="구매하기"/> 
        <p>구매하기</p>
      </Link>
      <Link href="/pickup" className="flex items-center justify-center gap-2 py-4 px-4 w-full bg-tertiary hover:bg-white hover:border hover:border-tertiary rounded-lg">
        <Image src={box} alt="픽업 신청"/>
        <p>Pick-up 신청</p>
      </Link>
    </div>
  )
}

// interface CircleDiagramProps {
//   main: string;
//   sub: string[];
// }

// interface CircleDiagramComponentProps {
//   data: CircleDiagramProps;
// }

// // const CircleDiagram = ({data} : CircleDiagramComponentProps) => {
// //   const items = data.sub;
// //   const centerItem = data.main;

// //   // Calculate positions in a circular layout based on the number of items
// //   const angleStep = (2 * Math.PI) / items.length;
// //   const radius = 100; // distance from center, adjust as needed

// //   return (
// //     <div className="relative flex items-center justify-center w-80 h-80">
// //       {/* Center Circle */}
// //       <div className="flex items-center justify-center w-24 h-24 bg-white border-2 border-pink-500 rounded-full text-center font-bold text-black">
// //         {centerItem}
// //       </div>

// //       {/* Outer Circles */}
// //       {items.map((item, index) => {
// //         const angle = index * angleStep;
// //         const x = radius * Math.cos(angle);
// //         const y = radius * Math.sin(angle);

// //         return (
// //           <div
// //             key={index}
// //             className="absolute flex items-center justify-center w-20 h-20 bg-white border-2 border-pink-500 rounded-full text-center text-black"
// //             style={{
// //               transform: `translate(${x}px, ${y}px)`,
// //             }}
// //           >
// //             {item}
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };



function CircularMenu() {
  return (
    <CircleMenu
    startAngle={-90}
    rotationAngle={360}
    itemSize={3.5}
    radius={7}
    rotationAngleInclusive={false}
    className="w-full h-[350px] flex items-center justify-center z-0"
    open={true}
    
    menuToggleElement={(
      <button type="button" className="rounded-full size-[90px] border-2 bg-primary/20 shadow-md shadow-primary border-primary hover:bg-primary hover:text-white bg-white">
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
          >
            <p>{item.sub[idx]}</p>
          </CircleMenuItem>
        ))
      }
    </CircleMenu>
  )
}

function Feedback() {
  return (
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
  )
}

function SearchHeader() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams()

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery ) return;
    setSearch(searchQuery)
  }, [searchParams])

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Link href="./" replace={true}>
        <Image src={arrowLeft} alt="돌아가기" className="w-[30px]"/>
      </Link>
      <InputField userInput={search} />
    </div>
  )
}

function Information() {
  return (
    <div className="bg-tertiary w-full h-fit rounded-lg p-3 text-center text-xs mb-[110px]">
      <div className="bg-white p-5">
        <p>탄수화물 컷 분홍이 포켓,체지방 컷 초록이 포켓
        성분: 가르시니아캄보지아, 비타민A, 비타민B1, 비타민B2, 비타민B6, 나이아신, 판토텐산, 비타민C, 녹차추출물, 알로에전잎, 비타민B1, 비타민B6, 판토텐산, 비타민C, 셀레늄, 아연
        효과: [가르시니아캄보지아추출물] 탄수화물이 지방으로 합성 되는 것을 억제하여 체지방 감소에 도움을 줄 수 있음 [비타민A] 어두운 곳에서 시각 적응을 위해 필요 / 피부와 점막을 형성하고 기능을 유지하는데 필요 / 상피세의 성장과 발달에 필요 [비타민B1] 탄수화물과에너지 대사에 필요 [비타민B2] 체내 에너지 생성에 필요 [비타민B6] 단백질 및 아미노산 이용에 필요 / 혈액의 호모시스테인 수준을 정상으로 유지하는데 필요 [나이아신] 체내 에너지 생성에 필요 [판토텐산] 지방, 탄수화물, 단백질 대사와 에너지 생성에 필요 [비타민C] 결합조직 형성과 기능유지에 필요 / 철의 흡수에 필요</p>
      </div>
    </div>
  )
}


export default function ResultPage() {
  
  return (
    <div className="p-5 flex flex-col gap-4 w-full h-screen overflow-auto relative">
      <div className="w-full flex flex-col gap-3">
        <Suspense>
          <SearchHeader />
        </Suspense>
        <Feedback />
        <div className="w-full h-fit flex items-center justify-center z-0">
          {/* <CircleDiagram data={dummyData[0]} /> */}
          <CircularMenu />
        </div>
        <div className="w-full flex items-center justify-center gap-3 ">
          {
            dummyData.map((item, idx) => (
              <button key={idx} type="button" className="rounded-full text-xs bg-primary size-[70px] hover:bg-white text-white hover:text-black hover:border-2 hover:border-primary">{item.main}</button>
            ))
          }
        </div>
        <Information />
      </div>
      <BottomMenu />
    </div>
  )
}