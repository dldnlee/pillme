import Image from "next/image"
import backward from "@/app/assets/icons/backward.svg";
import Form from "next/form";
import Link from "next/link";


export default function LoginPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <Link href="/home" replace={true} className="w-full">
        <Image src={backward} alt="뒤로가기" className="w-[30px]"/> 
      </Link>

      <div className="text-3xl flex flex-col p-5 gap-4">
        <h1>Log In</h1>
        <h2><span className="font-bold">Pill Me</span>에 로그인하세요</h2>
      </div>

      <Form action="" className="p-2 flex flex-col gap-7">
        <label htmlFor="email-input">
          <p>이메일</p>
          <input type="email" id="email-input" className="w-full border-2 rounded-full text-2xl py-2 px-5 outline-primary"/>

        </label>
        <label htmlFor="password-input">
          <p>비밀번호</p>
          <input type="password" id="password-input" className="w-full border-2 rounded-full text-2xl py-2 px-5 outline-primary"/>
        </label>
        <div className="text-center text-sm">
          <button className="w-full font-bold bg-primary text-white rounded-full text-xl py-3 hover:bg-primary/70">로그인
          </button>
          <div className="pt-3 flex flex-col gap-1">
            <p><Link href="/" className="font-bold underline">아이디</Link> / <Link href="" className="font-bold underline">비밀번호</Link> 찾기</p>
            <p>아직 회원이 아니신가요? <Link href="/" className="font-bold underline">회원가입</Link></p>
          </div>
        </div>
      </Form>

      <div className="flex items-center justify-center gap-4 text-black/50">
        <hr className="w-full border" />
        <p>OR</p>
        <hr className="w-full border" />
      </div>




    </div>
  )
}