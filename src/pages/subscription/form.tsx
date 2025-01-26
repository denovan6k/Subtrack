import {  z } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import img1 from '../assets/logo.svg'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useSubscriptionStore } from './store';



const formSchema = z.object({
  amount: z.string().min(3, "Amount must be at least 3 character long"),
  frequency: z.string().min(1,"Please select frequency"),
  payment: z.string().min(1, "Please fill payment date"),
  expiration: z.string().min(1,"Please fill expiration date"),
  renewal: z.string().min(1, "Please fill renewal date"),
  taxinfo: z.string().min(1,"Please fill tax information"),

});



const SubForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '',
      frequency: "",
      payment: "",
        expiration: "",
        renewal: "",
        taxinfo: "",    
    },
  });

const {setIsOpen,setIsClicked}=useSubscriptionStore()

  const onSubmit = (data: any) => {
    console.log(data);
    setIsClicked(true)
    setIsOpen(true)
    
  };
  return (
    <>
    <div className=''>

      <section className='flex flex-col gap-4'>
       
           <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col text-[12px] gap-4"
        >
         
  <div className='grid grid-cols-2  gap-4'>
          
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Amount to pay</FormLabel>
                  <FormControl>
                    <Input placeholder= '$19' type="text" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
             <FormField
            control={form.control}
            name="frequency"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Frequency</FormLabel>
                  <FormControl>
                    <Input placeholder= 'monthly' type="text" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
         </div>
         <div className='grid grid-cols-2  gap-4'>
          
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Payment date</FormLabel>
                  <FormControl>
                    <Input placeholder= '01/01/2025' type="text" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
             <FormField
            control={form.control}
            name="expiration"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Expiration date</FormLabel>
                  <FormControl>
                    <Input placeholder= '01/01/2026' type="text" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
         </div>
         <div className='grid grid-cols-2  gap-4'>
          
          <FormField
            control={form.control}
            name="renewal"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Renewal date</FormLabel>
                  <FormControl>
                    <Input placeholder= '30th' type="text" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
             <FormField
            control={form.control}
            name="taxinfo"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Tax deductible</FormLabel>
                  <FormControl>
                    <Input placeholder= 'deductible' type="text" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
         </div>
          <div className="">
          <Button type="submit" className="w-full  bg-[#2152FF] mt-[44px] " >
           
          
           Add Subcription
           
          </Button>
          </div>
        </form>
      </Form>

      </section>
    
      
    </div>
    </>
  )
}

export default SubForm