import { PersonStanding } from "lucide-react"
import { Button } from "../../../../components/ui/button"

import { WhatData } from "./whatData"
const WhatCard = () => {
  return (
    <>
    <section className="lg:px-32 py-4 lg:py-16 px-4 flex flex-col gap-8">
      <div className="">
      <p className='text-center text-3xl font-medium text-[#373F41]'> What makes us unique? </p>
      <div className="flex justify-end">
      <svg xmlns="http://www.w3.org/2000/svg" width="126" height="128" viewBox="0 0 126 128" fill="none">
  <g filter="url(#filter0_d_1357_12502)">
    <circle cx="64" cy="54" r="34" fill="#2152FF"/>
  </g>
  <path d="M54.0268 39.0075C51.5063 39.0075 50.9602 41.36 51.0022 42.5362V63.2045C51.0022 65.6242 53.0186 66.3132 54.0268 66.3552H70.2842L77.8458 69.6318V42.5362C77.8458 39.5116 76.4175 38.9235 75.7033 39.0075H54.0268Z" fill="white"/>
  <path d="M54.0268 39.0075C51.5063 39.0075 50.9602 41.36 51.0022 42.5362V63.2045C51.0022 65.6242 53.0186 66.3132 54.0268 66.3552H70.2842L77.8458 69.6318V42.5362C77.8458 39.5116 76.4175 38.9235 75.7033 39.0075H54.0268Z" stroke="white" stroke-width="1.26026"/>
  <path d="M55 58.2891C57.8566 60.6415 65.5358 63.935 73.3998 58.2891" stroke="#2152FF" stroke-width="1.5" stroke-linecap="round"/>
  <defs>
    <filter id="filter0_d_1357_12502" x="0" y="0" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="10"/>
      <feGaussianBlur stdDeviation="15"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1357_12502"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1357_12502" result="shape"/>
    </filter>
  </defs>
</svg>
        </div>
      
      </div>
        
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
    <div className="fixed bottom-4 right-4 z-50">
    <Button
     variant="ghost"
    
    className="h-12 w-12 rounded-full hover:bg-primary/90 bg-[#2152FF]"
    >
  <PersonStanding size={48} className="text-white"/>
    </Button>
   </div>
    </>
    
  )
}

export default WhatCard