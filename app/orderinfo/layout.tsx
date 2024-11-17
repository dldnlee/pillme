import BottomNavBar from "../components/BottomNavBar"
import Header from "./components/Header"

export default function OrderLayout({children}: {children : React.ReactNode}) {
  
  return (
    <div className="h-inherit">
      <Header />
        {children}
      <BottomNavBar />
    </div>
  )
}