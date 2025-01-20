import { Link, useParams } from "react-router-dom"
import { Button } from "../../components/ui/button"
import filter from '../../assets/filter-outline.svg'
import { useDebouncedCallback } from "use-debounce"; 
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { Search } from "lucide-react"
import { Input } from "../../components/ui/input"
import { SubsData } from "./newSubData"
import { useSubscriptionStore } from "./store";
import { DialogNew } from "./newDialog";
const NewSub = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const {id} =useParams();
    const {setIsOpen}=useSubscriptionStore()
    const itemsPerPage = 9; // Number of items per page
    const currentPage = parseInt(searchParams.get("page") || "1", 10); 
    const [filteredData, setFilteredData] = useState(SubsData);
    const handleSearch =useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams as any); // Convert searchParams to URLSearchParams for manipulation
        console.log(value)
    
        
        if (value) {
          params.set('query', value); // Set 'query' param if a search term exists
        } else {
          params.delete('query'); // Remove 'query' param if search term is cleared
        }
    
        navigate({ search: params.toString() }, { replace: true });
        // (setIsClicked(true)) 
      }, 300);
    
      useEffect(() => {
        const query = searchParams.get("query")?.toLowerCase();

        if (query) {
            // Filter the data by title or other fields that match the query
            const filtered = SubsData.filter((data) =>
                data.title.toLowerCase().includes(query)
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(SubsData); // Show all data when there's no query
        }
    }, [searchParams]);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

      const handleSubmit = (id:number|undefined)=>{
         
          setIsOpen(false)
          navigate(`/dashboard/subscription/new/${id}?`, { replace: true });
 }

      // Handle page change (can be triggered from pagination controls)
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params, { replace: true }); // Update URL with the new page number
    navigate({ search: params.toString() }, { replace: true });
  };
  return (
    <>
<main className="p-4 flex flex-col gap-4">
            <header className="flex flex-col gap-4 pt-2">
                <Link to={'/dashboard/subscription'} replace>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <rect width="36" height="36" rx="7.08333" fill="#EDEDED" fill-opacity="0.49"/>
  <path d="M21.0035 25.4094C20.8454 25.4099 20.6891 25.375 20.5462 25.3072C20.4033 25.2394 20.2774 25.1405 20.1777 25.0177L15.0641 18.6653C14.9084 18.4759 14.8232 18.2383 14.8232 17.993C14.8232 17.7478 14.9084 17.5102 15.0641 17.3207L20.3577 10.9684C20.5374 10.7522 20.7956 10.6162 21.0756 10.5904C21.3556 10.5646 21.6343 10.6511 21.8505 10.8308C22.0667 11.0105 22.2027 11.2687 22.2285 11.5487C22.2543 11.8286 22.1678 12.1074 21.9881 12.3236L17.2556 17.9983L21.8293 23.6731C21.9588 23.8285 22.041 24.0177 22.0663 24.2184C22.0916 24.4191 22.0589 24.6228 21.972 24.8055C21.8851 24.9881 21.7477 25.1421 21.5761 25.2491C21.4045 25.3561 21.2058 25.4118 21.0035 25.4094Z" fill="black" fill-opacity="0.7"/>
</svg>
                </Link> 
                <ul className="flex justify-between items-center">
        <li className="text-sm text-black/70 font-semibold">
        Add Subscription
        </li>
       
        <li className="">
        
            <div className="flex gap-4 items-center">
             <Button size={'icon'} className="border-0 rounded-none bg-transparent hover:bg-muted-foreground hover:rounded-xl">
                <img src={filter} alt='filter'/>
             </Button>
             <div className="relative py-2 ">
    <Input
          placeholder="Search..."
        //   value={} // Set your default value here
        //   onChange={(event) =>
           
        //   }
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()} // Retrieve current 'query' param
          className="max-w-sm rounded-xl  pl-10 pr-2"
        />
           <Search className="absolute left-2 top-4 text-black/40" />
        </div>
            </div>
        </li>
       
      </ul>
            </header>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" >
                {paginatedData.length>0?(paginatedData.map((data, index) => (
                    <ul key={index} className="flex flex-col gap-8 px-6 py-9 border border-black/20 rounded-lg">
                        <li className="flex gap-4 items-center">
                         {data.image}
                         <div className="flex flex-col">
                           {data.title}
                           <p className="text-sm text-black/70">{data.category}</p>
                         </div>
                        </li>
                        <li>
                        <Button variant={'default'} className="rounded-lg w-full bg-[#2152FF] hover:bg-[#2152FF]/60" onClick={()=>{handleSubmit(data.id)} }>
                                
                                    
                                    Add subscription
                                    
                                </Button>
                        </li>

                    </ul>
                ))):(
                    <p>No products match your criteria.</p>
                   
                  )}
                   </section>

                {paginatedData.length > 0 && <div className="flex justify-between items-center mt-4 mb-4">
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button> </div> }
           {id && <DialogNew id={id} />}

            </main>

    </>
  )
}

export default NewSub