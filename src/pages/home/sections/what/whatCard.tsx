
import { WhatData } from "./whatData"
const WhatCard = () => {
  return (
    <>
    <section className="lg:px-32 py-4 lg:py-16 px-4 flex flex-col gap-8">
        <p className='text-center text-3xl font-medium text-[#373F41]'> What makes us unique? </p>
    <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 md:grid-cols-2 md:gap-6 ">
        {WhatData.map((item,index) => (
            <ul key={index} className=" flex flex-col gap-4 px-6 py-9 border border-[#E5E5E5] rounded-lg">
                <li>
                   <img src={item.icon} alt=''/>
                </li>
                <li className="text-[#373F41] font-medium">
                    {item.title}
                </li>
                <li className="text-sm text-[#737B7D] max-w-xl text-wrap">
                    {item.description}
                </li>
            </ul>
        ))}
    </div>
    </section>
   
    </>
    
  )
}

export default WhatCard