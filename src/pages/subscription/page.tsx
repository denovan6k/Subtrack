
import {columns } from './column'
import { DataTable } from "./dataTable"
import { TableDat } from './tabledata'
import { DialogDemo } from './dialog'

// import TableSkeleton from "../skeletonLoaders/table-skeleton"
// import TrendingSkeleton from "../skeletonLoaders/trending-skeleton"

import { useParams,  } from 'react-router-dom';
export default function Table() {
 
          
//    const tableData = coins.data
//    if (!tableData){
//     return (<div className="flex flex-col gap-4">
//       <TrendingSkeleton/>
//       <TableSkeleton/></div>)
//    }
const { id } = useParams();
  return (
    <div className="px-4 pb-4 ">
      <DataTable columns={columns} data={TableDat} />
      {id&&( <DialogDemo id={id} />   )}
      
    </div>
  )
}
