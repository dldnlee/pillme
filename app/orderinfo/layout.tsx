import BottomNavBar from "../components/BottomNavBar"

export default function OrderLayout({children}: {children : React.ReactNode}) {
  
  return (
    <>
      {children}
      <BottomNavBar />
    </>
  )
}