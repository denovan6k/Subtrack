import { Button } from "../../../components/ui/button"
import img1 from '../../../assets/linkedin.svg' 
import img2 from '../../../assets/twitter.svg'
import img3 from '../../../assets/instagram.svg'
import img4 from '../../../assets/logo.svg'
const Footer = () => {
  return (
    <>
      <footer className="bg-[#212332] py-10 px-16 flex flex-col gap-12 " >
        <ul className="flex flex-col gap-8 justify-center items-center">
           <li>
            <Button variant={'default'} className="bg-white text-black border border-black">
                Get for free
            </Button>
           </li>
           <li className="text-white max-w-sm text-wrap text-center ">
           Join SUBTrack today to experience a new era of subscription management with ease
           </li>
           <li className="flex gap-12">
                    <img src={img1} alt="" />	
                    <img src={img2} alt="" />	
                    <img src={img3} alt="" />	
           </li>
        </ul>
        <ul className="flex justify-between">
           <li className="flex items-center  gap-4">
            <img src={img4} alt="" />
            <p className="text-2xl font-bold  text-white">SUBTrack</p>
            </li> 
            <li className="text-[#909198] text-sm">
            @2024 SUBTrack, inc. All rights reserved
            </li>
        </ul>

      </footer>
    </>
  )
}

export default Footer
