import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"




import { tableData } from "./tabledata";

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
import { Button } from "../../components/ui/button";

const statusIcon = (row: tableData) => {
  switch (row.status) {
    case 'active':
      return (
        <img
          src={active}
          
          alt=''
        />
      );
    case 'in':
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

// function to return icons
const logoIcon = (row: tableData) => {
    switch (row.platform) {
      case 'Figma':
        return (
          <img
            src={figma}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Dribbble':
        return (
          <img
            src={dribbble}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Dropbox':
        return (
          <img
            src={dropbox}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Adobe':
        return (
          <img
            src={adobe}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Netflix':
        return (
          <img
            src={netflix}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Spotify':
        return (
          <img
            src={sportify}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Chat GPT':
        return (
          <img
            src={chatgpt}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Snapchat':
        return (
          <img
            src={snapchat}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Behance':
        return (
          <img
            src={behance}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Grammarly':
        return (
          <img
            src={grammarly}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
        case 'X':
            return (
              <img
                src={x}
                className='rounded-full'
                width={20}
                height={20}
                alt=''
              />
            );
      default:
        return (
          <img
            src={figma}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
    }
  };

export const columns: ColumnDef<tableData>[] = [
 
  {
    
    header: "Platform",
    accessorKey: "platform",
    cell: ({ row }) => {
      const icon = logoIcon(row.original);
      return <div className="flex items-center space-x-2">
        {icon}
        <div className="flex space-x-2">
        <p className="">
          {row.original.platform}</p> 
         
          </div></div>
  },
  },

  { 
    accessorKey:'status', //id is the same as the accessorKey
    accessorFn: (row) => row.status, // set the price value
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} // onClick sort the column by asc or desc order
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      // const price = row.getValue("quote.USD.price"); // Fetch the price value
      const staicon = statusIcon(row.original);
      return <div className="">
      {staicon}
     </div>
  },},
  {
    accessorKey:'interval',
    accessorFn: (row) => row.interval,
    header: "Monthly",
    cell: ({ row }) => {
      const interval = row.original.interval // Fetch the percent change value
     

      return (
        <div className="">
        <p> {interval}</p>
        </div>
       
      );
    },
  },
  { accessorKey:'activated',
    accessorFn: (row) => row.activated,
    header: "Activated",
    cell: ({ row }) => {
      const activated = row.original.activated; 
      

      return (
        <div className="">
          <p>{activated} </p>
        </div>
       
      );
    },
  },
  {accessorKey:'expiry_date',
    accessorFn: (row) => row.expiry_date,
    header: "Expiry Date",
    cell: ({ row }) => {
      const expiry = row.original.expiry_date; 
     

      return (
        <div className="">
          <p> {expiry} </p>
        </div>
       
      );
    },
  },
  
];
