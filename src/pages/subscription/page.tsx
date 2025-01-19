
import {columns } from './column'
import { DataTable } from "./dataTable"
import { TableDat } from './tabledata'
// import TableSkeleton from "../skeletonLoaders/table-skeleton"
// import TrendingSkeleton from "../skeletonLoaders/trending-skeleton"


export default function Table() {
 
          
//    const tableData = coins.data
//    if (!tableData){
//     return (<div className="flex flex-col gap-4">
//       <TrendingSkeleton/>
//       <TableSkeleton/></div>)
//    }
  return (
    <div className="px-4 pb-4 ">
      <DataTable columns={columns} data={TableDat} />
    </div>
  )
}
