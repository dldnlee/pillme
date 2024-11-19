import PharmSideBar from "./components/PharmSideBar";


export default function PharmacyLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="">
      sidebar will go here
      <PharmSideBar />
    
      {children}

    </div>
  )
}