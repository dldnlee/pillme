'use client'
import pillMeChar from '@/app/assets/icons/pillme_character.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import forward from '@/app/assets/icons/forward.svg';
import backward from '@/app/assets/icons/backward.svg';
import { useSwiper } from 'swiper/react';
import InputField from '../components/InputField';
import PillMeDesc from './components/PillMeDesc';
import 'swiper/css';

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
          <InputField/>
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
          className='w-[90px] flex items-center' 
          onClick={() => swiper.slidePrev()}>
            <p className='text-xs font-semibold text-black/50'>건강기능식품</p>
            <Image src={backward} alt="Forward" />
          </button>
          <Image src={pillMeChar} alt="필미 매스콧" className='w-[120px] min-w-[120px]'/>
          <button className='w-[80px]' disabled></button>
        </div>
        {/* Form action에 search engine 포함 예정 */}
        <div className='w-full flex flex-col items-center justify-center gap-3'>
          <InputField placeholder='물만 마셔도 살이 쪄요' />
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
    <div className='w-full p-10 h-full'>
      <SearchCategory />
      <PillMeDesc />

    </div>
  )
}