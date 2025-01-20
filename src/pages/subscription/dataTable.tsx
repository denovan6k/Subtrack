import * as React from "react"
import { Button } from "../../components/ui/button"
import filter from '../../assets/filter-outline.svg'
import plus from '../../assets/plus.svg'
import { Search } from "lucide-react"; 
//Tanstack Table
import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  // getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
// ShadCN Table
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import { Input } from "../../components/ui/input"
import { Link } from "react-router-dom"
import Navbar from "../dashboard/navbar"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting, //sorting change
    
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting, //storting state
      columnFilters, //column filter state
    },
  })

  return (
    <div className="flex flex-col gap-4">
    <div className="flex justify-between items-center ">
      <div className="relative">
    <Input
          placeholder="Search..."
          value={(table.getColumn("platform")?.getFilterValue() as string) ?? ""} // Set your default value here
          onChange={(event) =>
            table.getColumn("platform")?.setFilterValue(event.target.value) // On input change set the filter value
          }
          className="max-w-sm rounded-xl py-2 pl-10 pr-2"
        />
           <Search className="absolute left-2 top-2 text-black/40" />
        </div>
        
      
        <Navbar/>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="text-xl text-black font-semibold">
        Subscription Lists
        </li>
        <li className="text-sm text-black/50 font-semibold">
        Your list of subscription platforms including active, inactive, due, and failed.
        </li>
        <li className="flex justify-between">
        <div className="rounded-full px-2 py-1 flex  max-w-[346px] border border-black/20 items-center justify-between ">
           <Button variant={'ghost'} className="hover:bg-[#DBEDFF] hover:text-[#2152FF] rounded-full border-0">
            All
           </Button>
           <Button variant={'ghost'} className="hover:bg-[#DBEDFF] hover:text-[#2152FF] rounded-full border-0" >
            Active
           </Button>
           <Button variant={'ghost'} className="hover:bg-[#DBEDFF] hover:text-[#2152FF] rounded-full border-0">
            Inactive
           </Button>
           <Button variant={'ghost'} className="hover:bg-[#DBEDFF] hover:text-[#2152FF] rounded-full border-0">
            Due
           </Button>
            </div>
            <div className="flex gap-4">
             <Button size={'icon'} className="border-0 rounded-none bg-transparent hover:bg-muted-foreground hover:rounded-xl">
                <img src={filter} alt='filter'/>
             </Button>
             <Button variant={'default'} className="rounded-lg bg-[#2152FF] hover:bg-[#2152FF]/60" asChild>
              <Link to={'/dashboard/subscription/new'} > 
                <img src={plus} alt='plus'/>
                Add new Subscription
                </Link>
             </Button>
            </div>
        </li>
       
      </ul>
    <div className="rounded-md border ">
        
      <Table className="">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="bg-[#F6F6F6]">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              className="hover:bg-muted">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="">
            
                    <Link to={`/dashboard/subscription/${cell.row.id}?`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Link>   
                  
                  </TableCell>

                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 p-[16px]">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
    </div>
  )
}