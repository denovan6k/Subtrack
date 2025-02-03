// import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
//   DialogFooter,
  DialogHeader,
  DialogTitle,
//   DialogTrigger,
} from "../../components/ui/dialog"

import { Label } from "../../components/ui/label"
import { useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import { TableDat } from "./tabledata"
import { tableData } from "./tabledata"
import figma from '../../assets/figma.svg'
import dribbble from '../../assets/dribbble.svg'
import dropbox from '../../assets/dropbox.svg'
import adobe from '../../assets/adobe.svg'
import netflix from '../../assets/netflix.svg'
import sportify from '../../assets/spotify.svg'
import chatgpt from '../../assets/chatgpt.svg'
import snapchat from '../../assets/snapchat.svg'
import behance from '../../assets/behance.svg'
import grammarly from '../../assets/grammarly.svg'
import x from '../../assets/x.svg'
import active from '../../assets/active.svg'
import inactive from '../../assets/inactive.svg'
import due from '../../assets/duein.svg'

interface DialogDemoProps {
    id: string
}
const statusIcon = (row: tableData) => {
    switch (row.status) {
      case 'active':
        return (
          <img
            src={active}
            
            alt=''
          />
        );
      case 'inactive':
        return (
          <img
            src={inactive}
          
            alt=''
          />
        );
      case 'Due':
        return (
          <img
            src={due}
            
            alt=''
          />
        );
     
    
      default:
        return (
          <img
            src={active}
           
            alt=''
          />
        );
    }
  };
const logoIcon = (row: tableData) => {
    switch (row.platform) {
      case 'Figma':
        return (
          <img
            src={figma}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Dribbble':
        return (
          <img
            src={dribbble}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Dropbox':
        return (
          <img
            src={dropbox}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Adobe':
        return (
          <img
            src={adobe}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Netflix':
        return (
          <img
            src={netflix}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Spotify':
        return (
          <img
            src={sportify}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Chat GPT':
        return (
          <img
            src={chatgpt}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Snapchat':
        return (
          <img
            src={snapchat}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Behance':
        return (
          <img
            src={behance}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
      case 'Grammarly':
        return (
          <img
            src={grammarly}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
        case 'X':
            return (
              <img
                src={x}
                className='rounded-full'
                width={40}
                height={40}
                alt=''
              />
            );
      default:
        return (
          <img
            src={figma}
            className='rounded-full'
            width={40}
            height={40}
            alt=''
          />
        );
    }
  };
export function DialogDemo({id}:DialogDemoProps) {
    const navigate= useNavigate()
     const [dat,setDat]=useState<tableData|null>(null)
useEffect(() => {
    if(id){
       const index= parseInt(id as string) 
       const data = TableDat.find((item) => item.id === index)
       if(data){
       setDat(data)
    }}
    console.log(dat)
}, [id])

    const closeDialog = () => {
        navigate('/dashboard/subscription'); // Change the route back to the main page (or any other route)
      };
  return (
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
          {dat !== null && logoIcon(dat)}
          </li>
          <li className="flex flex-col gap-2">
            <Label>{dat?.platform}</Label>
            <p>Entertainment</p>
          </li>
        </ul>
        <ul className="text-black flex flex-col gap-2 font-medium">
            <li>
           {dat?.platform} Premium plan
            </li>
            <li>
            $1,140/mo
            </li>
        </ul>
        <DialogDescription>
       {dat?.description}
        </DialogDescription>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
        <ul className="flex justify-between gap-4 p-4 border border-black/20 rounded-lg">
            <li className="flex flex-col justify-between">
                <Label className="text-black/70" >Start date</Label>
                <p className="font-medium">8 september 2024</p>
                <p className="text-black/70">1 year 4 month ago</p>
            </li>
            <li className="flex flex-col gap-2">
                <Label className="text-black/70">Status </Label>
                <p className="font-medium">{dat !== null && statusIcon(dat)}</p>
                <p className="text-black/70"> 22 Feb 2021 </p>
            </li>   
         
            <li className="flex flex-col gap-2">
                <Label className="text-black/70"> Renew date </Label>
                <p className="font-medium">8 September 2020</p>
                
            </li>
            <li className="flex flex-col gap-2">
                <Label className="text-black/70"> Category </Label>
                <p className="font-medium">Entertainment</p>
                
            </li>
          
        </ul>
      </DialogContent>
    </Dialog>
  )
}
