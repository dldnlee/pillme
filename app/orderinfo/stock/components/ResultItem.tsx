import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";


export default function ResultItems({id, title, address, number} : {id: string, title: string, address: string, number: string}) {


  return (
    <Link href={`/orderinfo/stock/${id}`} className="border-b-2 py-2 px-2 flex justify-between items-center hover:bg-gray-200">
      <div>
        <h3 className="font-bold py-1">{title}</h3>
        <div className="flex gap-2 text-xs">
          <FaLocationDot className="text-gray-400" />
          <p>{address}</p>
        </div>
        <div className="flex gap-2 text-xs">
          <FaPhoneAlt className="text-gray-400" />
          <p>{number}</p>
        </div>
      </div>
      <SlArrowRight className="text-gray-400"/>
    </Link>
  )
}