
import { useParams, useNavigate, Link } from "react-router-dom"
import {
    Dialog,
    DialogContent,

  
 
    DialogDescription,

  
 
    DialogHeader,
    DialogTitle,
  
  } from "../components/ui/dialog"




import { Button } from "../components/ui/button"
 
 



const RewBankDialog = () => {
   const {id}=useParams()
    const navigate= useNavigate()
    



    const closeDialog = () => {
        
        navigate('/authentication/started');
     
      };




  return (
    <>
    <Dialog open={id === '2'?true:false} onOpenChange={closeDialog}>
       
       <DialogContent className="sm:max-w-[425px] lg:max-w-3xl">
         <DialogHeader>
          
          <DialogTitle className="text-center text-black text-2xl">Review and share with subtrack</DialogTitle>
        </DialogHeader>
       
            <DialogDescription className="text-center text-wrap text-black/70 text-sm">
            This information is based on the last 365 days of selected income from your Gimham bank accounts
         </DialogDescription>
          <main >
          
            <ul className="flex flex-col gap-2">
            <label className="text-black/80">Gig_economy_ deirect_rpt_cA</label>
                <li className="flex justify-between">
                    <div className="flex flex-col ">
                    <h1 className="text-black">
                    Most recent deposit
                    </h1>
                    <p  className="text-black/80">$2,845,92</p>
                    </div>
                    <div>
                    <h1 className="text-black">
                    12 month earnings
                    </h1>
                    <p className="text-black/80">
                    $28,445,92
                    </p>
                    </div>
                   
                </li>
                <li className="flex justify-between">
                    <div className="flex flex-col ">
                    <h1 className="text-black">
                    Interval
                    </h1>
                    <p  className="text-black/80">Monthly</p>
                    </div>
                    <div>
                    <h1 className="text-black">
                    12 month earnings
                    </h1>
                    <p className="text-black/80">
                    $28,445,92
                    </p>
                    </div>
                   
                </li>
                <label className="text-black/80">Gig_economy_ deirect_rpt_cA</label>
                <li className="flex justify-between">
                    <div className="flex flex-col ">
                    <h1 className="text-black">
                    Most recent deposit
                    </h1>
                    <p  className="text-black/80">$2,845,92</p>
                    </div>
                    <div>
                    <h1 className="text-black">
                    12 month earnings
                    </h1>
                    <p className="text-black/80">
                    $28,445,92
                    </p>
                    </div>
                   
                </li>

            </ul>

          </main>
          <Button  className="w-full  bg-[#2152FF] mt-[44px] " asChild>
            <Link to={`/dashboard`} replace>
            Continue
            </Link>
         
          </Button>

       </DialogContent>
     </Dialog>
    
    
    </>
  )
}

export default RewBankDialog