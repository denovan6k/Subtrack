import Sidebar from "./sidebar"
import Navbar from "./navbar"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
    {/* sidebar takes 308px while main takes the remaining space */}
    <div className="grid grid-cols-1 lg:grid-cols-[308px_1fr] min-h-screen">
        <Sidebar/>
        <main className="">
<Navbar/>
      <div className="overflow-x-hidden w-full max-w-full">
        <Outlet/>
      </div>
        </main>
    </div>
    
    </>
  )
}

export default Layout