import img1 from '../../assets/logo.svg'
import { SidebarData } from './sidebardata'

import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
    <section className='flex flex-col gap-8 p-4 border-r border-[#CCCCCC] bg-[#2152FF] '>
    <header className='flex mt-6 items-center gap-4'>
           <img src={img1} alt="" />
           <p className="text-2xl font-semibold  text-white">SUBTrack</p>
           </header>
           {SidebarData.map((item,index) => (
                <ul className='flex flex-col text-white gap-6' key={index}>
                  <NavLink to={item.link}
                  end={item.link === "/dashboard" || item.link === "/dashboard/setting"}  
                  className={({ isActive }) =>
                isActive ? "bg-[#DBEDFF] text-[#2152FF] rounded-lg  " : ""
              
              }>
                <li className='flex items-center gap-4 hover:border hover:border-[#2152FF]  hover:text-[#2152FF] hover:bg-[#eef5fe] p-4 rounded-lg'>
                          
                        
                        {item.icon}
                        <p>{item.title}</p>
                       
                </li>
                </NavLink>
               </ul>
           ))}
          
    </section>

    </>
  )
}

export default Sidebar