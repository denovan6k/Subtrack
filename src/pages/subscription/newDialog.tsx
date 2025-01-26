import Confetti from 'react-confetti'
import {
    Dialog,
    DialogContent,
    DialogDescription,
  
 
    DialogHeader,
    DialogTitle,
  
  } from "../../components/ui/dialog"

  





  import check from '../../assets/check.svg'
  import { Label } from "../../components/ui/label"
  import { Link, useNavigate } from "react-router-dom"
  import { useEffect,useState } from "react"
  import { SubscriptionProps } from "./newSubData"
  import { SubsData } from "./newSubData"
import SubForm from "./form"
import { useSubscriptionStore } from "./store"
import { Button } from "../../components/ui/button"
  interface DialogDemoProps {
      id: string
      
  }
 

  export function DialogNew({id}:DialogDemoProps) {
      const navigate= useNavigate()
       const [dat,setDat]=useState<SubscriptionProps|null>(null)
      
       const {isOpen,isClicked,setIsClicked}=useSubscriptionStore()
  useEffect(() => {
     
      if(id){
         const index= parseInt(id as string) 
         const data = SubsData.find((item) => item.id === index)
         if(data){
         setDat(data)
      }}
      console.log(dat)
      isClicked && setTimeout(() => {
          setIsClicked(false)
        }, 3000);
  }, [id,isClicked])
  
      const closeDialog = () => {
        setIsClicked(false)
          navigate('/dashboard/subscription/new'); // Change the route back to the main page (or any other route)
        };
    return (
        <>
         {isClicked && <Confetti />}
        {!isOpen && (
          
          
          <Dialog open={id?true:false} onOpenChange={closeDialog}>
       
       <DialogContent className="sm:max-w-[425px] lg:max-w-3xl">
         <DialogHeader>
           <DialogTitle className="text-center text-black/70">Details </DialogTitle>
           {/* <DialogDescription>
             Make changes to your profile here. Click save when you're done.
           </DialogDescription> */}
         </DialogHeader>
         <div className="flex flex-col gap-4">
         <ul className="flex gap-4">
           <li>
           {dat?.image}
           </li>
           <li className="flex flex-col gap-2">
             <Label>{dat?.title}</Label>
             <p>{dat?.category}</p>
           </li>
         </ul>
        
         <DialogDescription>
       {dat?.description}
         </DialogDescription>
         </div>
         {/* <DialogFooter>
           <Button type="submit">Save changes</Button>
         </DialogFooter> */}
        <SubForm/>
       </DialogContent>
     </Dialog>) 
}
{isOpen && (<Dialog open={id?true:false} onOpenChange={closeDialog}>
       
       <DialogContent className="sm:max-w-[425px] lg:max-w-3xl">
         <DialogHeader>
            <div className="p-6 flex justify-center items-center">
            <img src={check} alt="" />
            </div>
          <DialogTitle></DialogTitle>
        </DialogHeader>
         <div className="flex flex-col items-center justify-center gap-4">
            <DialogDescription>
         Subscription Added successfully
         </DialogDescription>
         </div>
        <div className="px-12">
           <Button type="submit" className="w-full bg-[#2152FF] text-white hover:bg-[#2152FF]/70" asChild>
           <Link to={'/dashboard/subscription'}>
           Continue
           </Link>
           </Button>
           </div>
        
       </DialogContent>
     </Dialog>) }
      
        </>
      

    )
  }
  