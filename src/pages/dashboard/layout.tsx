import Sidebar from "./sidebar"

import { Outlet } from "react-router-dom"
const DashboardLayout = () => {
  return (
    <>
    {/* sidebar takes 308px while main takes the remaining space */}
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] min-h-screen">
        <Sidebar/>
        <main className="">

      <div className="overflow-x-hidden w-full max-w-full">
        <Outlet/>
      </div>
        </main>
    </div>
    
    </>
  )
}

export default DashboardLayout