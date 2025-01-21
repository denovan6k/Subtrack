import SettingCard from "./card"

import { Outlet } from "react-router-dom"


const SettingLayout = () => {
  return (
    <>
    <main className="p-4 lg:p-8 grid grid-cols-[240px_1fr] gap-4 ">
    <SettingCard/>
    <Outlet/>
    </main>
    </>
  )
}

export default SettingLayout