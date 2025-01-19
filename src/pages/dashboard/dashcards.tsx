import { DashCardsData } from "./dashcardsdata"

const DashCards = () => {
  return (
    <>
    <section className="grid grid-cols-4 gap-4">
          {DashCardsData.map((item,index)=>(
                 <ul key={index} className="flex flex-col gap-8 p-4 border border-[#000000]/20 rounded-xl">
                    <li>
                       {item.image}
                    </li>
                    <li className="text-xl text-black">
                        {item.description}
                    </li>
                    <li className="text-sm text-[#000000]/70">
                        {item.footer}
                    </li>
                    
                 </ul>
          ))}
    </section>
    
    </>
  )
}

export default DashCards