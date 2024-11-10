import pharmacyShop from "@/app/assets/icons/pharmacy_shop.svg";
import Image from "next/image";



export default function ConnectPharmacy() {
  return (
    <div className="flex items-center gap-1">
      <Image src={pharmacyShop} alt="Connect Pharmacy" />
      <p className="text-black text-lg font-extrabold">Connect Pharmacy</p>
    </div>
  )
}