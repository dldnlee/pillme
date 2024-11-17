import Image from 'next/image';
import pinkBrain from '@/app/assets/icons/pink_brain.svg';
import pinkFunnel from '@/app/assets/icons/pink_funnel.svg';
import pinkCamera from '@/app/assets/icons/pink_pill_cam.svg';
import descImg from '@/app/assets/images/descImg.png';
import pillMeDesc from '@/app/assets/images/PillMeDesc.png';

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


export default function PillMeDesc() {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='font-extrabold'><span className='text-primary'>PillMe</span>는 어떤 서비스인가요?</h2>
      <div className='w-full flex flex-col gap-6 items-center justify-center'>
        <div className='flex flex-col gap-5'>
          {
            desc.map((item, idx) => (
              <Desc key={idx} icon={item.icon} title={item.title} text1={item.text1} text2={item.text2} />
            ))
          }
        </div>
      <Image src={descImg} alt="Description" /> 
      <Image src={pillMeDesc} alt="Description" /> 
      </div>
    </div>
  )
}