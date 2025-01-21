import { CardData } from "./cardData"
import { NavLink } from "react-router-dom"
const SettingCard = () => {
  return (
    <>
  <section className="border rounded-lg border-black/20 p-2 h-[240px] flex flex-col justify-items-center max-w-xs">
    {CardData.map((item,index) => (
        <ul key={index} className="flex flex-col py-2 gap-8   ">
            <NavLink to={item.link}
               end={item.link === "/dashboard/setting"}  
               className={({ isActive }) =>
             isActive ? "bg-[#DBEDFF] text-[#2152FF] rounded-lg  " : ""
           
           }
            >
           <li className="flex items-center gap-4 hover:text-[#2152FF] hover:bg-[#eef5fe] hover:border hover:border-[#2152FF] p-4 rounded-lg">
                {item.icon}
                <p>{item.name}</p>
           </li>
           </NavLink>
        </ul>
    ))}
  </section>
    </>
  )
}

export default SettingCard