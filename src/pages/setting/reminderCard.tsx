import { useState } from "react";
import { RemData } from "../subscription/reminderData";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Switch } from "../../components/ui/switch";
import { useNavigate } from "react-router-dom";
import ReminderDialog from "./reminderDialog";
import Navbar from "../dashboard/navbar";
const ReminderCard = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const navigate = useNavigate();
  const filteredData = RemData.filter((data) => {
    if (activeFilter === 'All') return true;
    return data.status === activeFilter;
  });
  const handleSubmit = (id:number|undefined)=>{
         
    
    navigate(`/dashboard/reminder/${id}`, { replace: true });
}
  return (
    <>
    <section className="p-4">
     <header className="">
      <Navbar/>
    </header>
     
  
    <main className="flex flex-col gap-4  p-4 pb-4 lg:px-8 lg:pb-8 border border-black/20 rounded-lg">
       <header className="flex justify-between items-center">
         <p>Reminders</p>
         <div className="rounded-full px-2 py-2 flex gap-2 max-w-[346px] border border-black/20 items-center justify-between ">
        <Button
          variant={'ghost'}
          className={`hover:bg-[#f0f8ff] hover:text-[#2152FF] rounded-full border-0 ${activeFilter === 'All' ? 'bg-[#DBEDFF] text-[#2152FF]' : ''}`}
          onClick={() => setActiveFilter('All')}
        >
          All
        </Button>
        <Button
          variant={'ghost'}
          className={`hover:bg-[#f0f8ff] hover:text-[#2152FF] rounded-full border-0 ${activeFilter === 'active' ? 'bg-[#DBEDFF] text-[#2152FF]' : ''}`}
          onClick={() => setActiveFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={'ghost'}
          className={`hover:bg-[#f0f8ff] hover:text-[#2152FF] rounded-full border-0 ${activeFilter === 'inactive' ? 'bg-[#DBEDFF] text-[#2152FF]' : ''}`}
          onClick={() => setActiveFilter('inactive')}
        >
          Inactive
        </Button>
        {/* <Button
          variant={'ghost'}
          className={`hover:bg-[#f0f8ff] hover:text-[#2152FF] rounded-full border-0 ${activeFilter === 'due' ? 'bg-[#DBEDFF] text-[#2152FF]' : ''}`}
          onClick={() => setActiveFilter('due')}
        >
          Due
        </Button> */}
      </div>
       </header>
     

      <section className="grid grid-cols-2 gap-4">
        {filteredData.length > 0 ? (
          filteredData.slice(0, 8).map((data, index) => (
            <ul key={index} className="flex flex-col   border border-black/20 rounded-lg">
              <li className="flex gap-4 p-4 items-center">
                {data.image}
                <div className="flex flex-col">
                  {data.title}
                  <p className="text-sm text-black/70">{data.category}</p>
                </div>
              </li>
              <Separator />
              <li className="flex p-4 justify-between items-center">
                <Button
                  variant={'ghost'}
                  className="rounded-lg flex justify-between items-center text-black bg-white border border-black/20  hover:bg-[#f0f8ff]"
                  onClick={() => {handleSubmit(data.id)}}
                >
                 <p>Manage</p> 

                  <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M12.1597 5.04688C8.31423 5.04688 5.2041 8.15701 5.2041 12.0024C5.2041 15.8479 8.31423 18.958 12.1597 18.958C16.0051 18.958 19.1152 15.8479 19.1152 12.0024" stroke="black" strokeWidth="1.9873" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.1514 11.0103L20.1069 4.05469" stroke="black" strokeWidth="1.9873" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.1396 3.0625H21.1016V9.02441" stroke="black" strokeWidth="1.9873" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </Button>
                <Switch className='data-[state=checked]:bg-[#2152FF] data-[state=unchecked]:bg-black/30'/>
              </li>
            </ul>
          ))
        ) : (
          <p>No products match your criteria.</p>
        )}
      </section>
      </main>
     
      </section>
      <ReminderDialog />
    </>
  );
};

export default ReminderCard;
