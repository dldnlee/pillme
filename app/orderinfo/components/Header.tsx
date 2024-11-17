import Image from "next/image";
import pillMeChar from "@/app/assets/icons/pillme_character.png"


const Header = () => {
  return (
    <div className="sticky top-0 left-0 w-full flex items-center justify-start px-2 py-2 bg-white shadow-md shadow-gray-200">
      <Image src={pillMeChar} alt="Pill Me Character" className="w-[20px]"/>
      <h1 className="font-extrabold text-primary">Pill Me</h1>
    </div>
  )
}

export default Header;