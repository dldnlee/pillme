'use client'
import { usePathname } from "next/navigation"


export default function RootStyle({children} : {children: React.ReactNode}) {
  const pathname = usePathname();

  if(pathname.includes("/pharmacy")) {
    return (
      <div className="h-full w-full">
        {children}
      </div>
    )
  } else {
    return (
      <div className="mx-auto max-w-[500px] h-dvh overflow-y-auto bg-white no-scrollbar relative">
        {children}
    </div>
    )
  }
}