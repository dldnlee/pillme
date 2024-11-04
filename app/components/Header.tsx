import pillmeChar from '@/app/assets/icons/pillme_character.png';
import Image from 'next/image';
import hamburger from '@/app/assets/icons/hamburger.svg';

export default function Header() {
  return (
    <div className='bg-white w-full fixed top-0 left-0 flex justify-between px-4 py-2 shadow-sm'>
      <div className='flex items-center justify-center gap-2'>
        <Image src={pillmeChar} className='w-[20px]' alt='필미 매스콧'/>
        <p className='text-primary font-extrabold text-xl'>Pill Me</p>
      </div>
      <button className='flex' type='button'>
        <Image src={hamburger} alt="메뉴 아이콘"/>
      </button>
    </div>
  )
}