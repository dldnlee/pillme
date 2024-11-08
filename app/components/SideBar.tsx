import clipBoard from '@/app/assets/icons/clipboard.svg';
import files from '@/app/assets/icons/files.svg';
import tripleBar from '@/app/assets/icons/tripleBar.svg';
import forward from '@/app/assets/icons/forward.svg';
import gear from '@/app/assets/icons/gear.svg';
import signin from '@/app/assets/icons/signin.svg';
import Image from 'next/image';
import Link from 'next/link';


const dummyData = [
  {
    text: "주문 목록",
    icon: files
  },
  {
    text: "조제 완료 목록",
    icon: clipBoard
  },
  {
    text: "매장 재고",
    icon: tripleBar
  },
]



export default function SideBar({active, setActive} : {active : boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div 
    className={`flex top-0 left-0 w-full h-screen backdrop-blur-md ${active ? 'absolute' : 'hidden'}`}>
      <div className='bg-white w-[500px] h-full rounded-tr-lg shadow-2xl z-20 flex flex-col justify-between py-8'>
        <div className=''>
          {
            dummyData.map((item, idx) => (
              <button key={idx} className='w-full hover:bg-gray-200 flex p-6 items-center justify-between'>
                <div className='flex gap-3'>
                  <Image src={item.icon} alt={item.text}/>
                  <p>{item.text}</p>
                </div>
                <Image src={forward} alt="Right Arrow" />
              </button>
            ))
          }
        </div>
        
        <div className='border-t'>
          <button className='w-full flex p-6 items-center justify-between hover:bg-gray-200'>
            <div className='flex gap-3'>
              <Image src={gear} alt="clipboard" />
              <p>설정</p>
            </div>
            <Image src={forward} alt="Right Arrow" /> 
          </button>
          <Link href="/login" className='w-full flex p-6 items-center justify-between hover:bg-gray-200'>
            <div className='flex gap-3'>
              <Image src={signin} alt="clipboard" />
              <p>로그인</p>
            </div>
            <Image src={forward} alt="Right Arrow" /> 
          </Link>
        </div>
      </div>
      <button className='w-full h-full' onClick={() => setActive(!active)} />
    </div>
  )
}