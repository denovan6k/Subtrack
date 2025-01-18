import img1 from '../../assets/logob.svg'
import { SidebarData } from './sidebardata'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
    <section className='flex flex-col gap-8 p-4 border-r border-[#CCCCCC] '>
    <header className='flex items-center gap-4'>
           <img src={img1} alt="" />
           <p className="text-2xl font-bold  text-black">SUBTrack</p>
           </header>
           {SidebarData.map((item,index) => (
                <ul className='flex flex-col gap-6' key={index}>
                <li className=''>
                        <Link to={item.link} className='flex items-center gap-4 hover:text-[#2152FF] hover:bg-[#DBEDFF] p-4 rounded-lg'> 
                        
                        {item.icon}
                        <p>{item.title}</p>
                        </Link>
                </li>
               </ul>
           ))}
          
    </section>

    </>
  )
}

export default Sidebar