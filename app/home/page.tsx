'use client'
import pillMeChar from '@/app/assets/icons/pillme_character.png';
import Image from 'next/image';
import pinkBrain from '@/app/assets/icons/pink_brain.svg';
import pinkFunnel from '@/app/assets/icons/pink_funnel.svg';
import pinkCamera from '@/app/assets/icons/pink_pill_cam.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import forward from '@/app/assets/icons/Forward.svg';
import backward from '@/app/assets/icons/backward.svg';
import { useSwiper } from 'swiper/react';
import InputField from '../components/InputField';
import 'swiper/css';

const desc = [
  {
    icon: pinkCamera,
    title: "Scan",
    text1: "어떤 약인지 모르겠나요?",
    text2: "약을 찍어 어떤 약인지 직접 찾아보세요!"
  },
  {
    icon: pinkBrain,
    title: "Data Analysis",
    text1: "나의 건강 데이터를 통해",
    text2: "맞춤형 영양제를 추천받을 수 있어요!"
  },
  {
    icon: pinkFunnel,
    title: "Personalized Recommendation",
    text1: "증상을 직접 입력하면 나에게 맞는",
    text2: "건강기능식품을 추천해드려요!"
  },
]

function Desc({icon, title, text1, text2} : {icon: string, title:string, text1: string, text2: string}) {
  return (
    <div className='w-full shadow-md flex items-center justify-center gap-4 p-5 text-center rounded-xl'>
      <Image src={icon} alt={title}/>
      <div>
        <p className='font-bold text-sm'>{title}</p>
        <p className='text-xs'>{text1}</p>
        <p className='text-xs'>{text2}</p>
      </div>
    </div>
  )
}

function PillMeDesc() {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='font-extrabold'><span className='text-primary'>PillMe</span>는 어떤 서비스인가요?</h2>
      <div className='w-full flex flex-col gap-5'>
        {
          desc.map((item, idx) => (
            <Desc key={idx} icon={item.icon} title={item.title} text1={item.text1} text2={item.text2} />
          ))
        }
      </div>
    </div>
  )
}

function HealthSlide() {
  const swiper = useSwiper();

  return (
    <div className='w-full flex flex-col items-center justify-center gap-8 pb-24'>
        <h1 className='text-xl font-bold'>건강 고민 있으신가요?</h1>
        <div className='flex items-center justify-between gap-4'>
          <button className='w-[80px]' disabled></button>
          <Image src={pillMeChar} alt="필미 매스콧" className='w-[120px] min-w-[120px]'/>
          <button 
          type="button" 
          className='w-[80px] flex items-center' 
          onClick={() => swiper.slideNext()}>
            <Image src={forward} alt="Forward" /> 
            <p className='text-xs font-semibold text-black/50'>다이어트</p>
          </button>
        </div> 
        {/* Form action에 search engine 포함 예정 */}
        <div className='w-full flex flex-col items-center justify-center gap-3'>
          <InputField />
          <p>건강기능 상품을 추천해드릴게요!</p>
        </div>
      </div>
  )
}

function DietSlide() {
  const swiper = useSwiper();

  return (
    <div className='w-full flex flex-col items-center justify-center gap-8 pb-24'>
        <h1 className='text-xl font-bold'>다이어트 고민 있으신가요?</h1>
        <div className='flex items-center justify-between gap-4'>
          <button
          type="button" 
          className='w-[80px] flex items-center' 
          onClick={() => swiper.slidePrev()}>
            <p className='text-xs font-semibold text-black/50'>건강기능식품</p>
            <Image src={backward} alt="Forward" /> 
          </button>
          <Image src={pillMeChar} alt="필미 매스콧" className='w-[120px] min-w-[120px]'/>
          <button className='w-[80px]' disabled></button>
        </div>
        {/* Form action에 search engine 포함 예정 */}
        <div className='w-full flex flex-col items-center justify-center gap-3'>
          <InputField />
          <p>보조제와 영양제를 추천해드릴게요!</p>
        </div>
      </div>
  )
}

function SearchCategory() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={100}
    >
      <SwiperSlide>
        <HealthSlide />
      </SwiperSlide>
      <SwiperSlide>
        <DietSlide />
      </SwiperSlide>
    </Swiper>
  )
}

export default function HomePage() {
  return (
    <div className='w-full p-10'>
      <SearchCategory />
      <PillMeDesc />
    </div>
  )
}