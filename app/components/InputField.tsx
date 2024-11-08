import Form from "next/form";
import Image from "next/image";
import searchIcon from "@/app/assets/icons/search.svg";
import { useState } from "react";

export default function InputField({userInput, path="/home/search", placeholder="눈이 자꾸떨려요"} : {userInput?: string, path?: string, placeholder?: string}) {
  const [outline, setOutline] = useState(false);


  return (
    <Form action={path} className='w-full flex flex-col items-center justify-center'>
      <label htmlFor="search-bar" className={`flex px-4 py-2 border-2 rounded-full w-full ${outline ? "border-primary" : ""}`}>
        <Image src={searchIcon} alt="검색" className='w-[20px]'/>
        <input id="search-bar"
        name="query"
        type="text"
        placeholder={placeholder}
        className=' pl-2 outline-none w-full'
        defaultValue={userInput}
        onFocus={() => setOutline(true)}
        onBlur={() => setOutline(false)}
        />
      </label>
    </Form>
  )
}