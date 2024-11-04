import Form from "next/form";
import Image from "next/image";
import search from "@/app/assets/icons/search.svg";

export default function ResultPage() {
  return (
    <div>
      <Form action="/home/inner" className='w-full flex flex-col items-center justify-center'> 
          <label htmlFor="search-bar" className='flex px-4 py-2 border-2 rounded-full w-full'>
            <Image src={search} alt="검색" className='w-[20px]'/>
            <input id="search-bar" type="text" placeholder='눈이 자꾸 떨려요' className=' pl-2 outline-none w-full' />
          </label>
          <p className='text-sm m-2'>건강기능 상품을 추천해드릴게요!</p>
        </Form>

    </div>
  )
}