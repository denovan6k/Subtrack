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




const formSchema = z.object({
  currentpassword: z.string().min(8, "password must be at least 8 character long"),
  newpassword: z.string().min(8,"password must be at least 8 character long"),
  confirmpassword: z.string().min(8, "password must be at least 8 character long"),
 

});



const PassForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentpassword: '',
      newpassword: "",
      confirmpassword: "",
         
    },
  });



  const onSubmit = (data: any) => {
    console.log(data);
   
    
  };
  return (
    <>
    <div className='p-4 border border-black/20 rounded-lg '>

      <section className='flex flex-col gap-4 p-4'>
       
           <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col text-[12px] gap-4"
        >
         
  <div className='grid grid-cols-2  gap-4'>
          
          <FormField
            control={form.control}
            name="currentpassword"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input placeholder= 'Current password' type="password" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
             <FormField
            control={form.control}
            name="newpassword"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input placeholder= 'New password' type="password" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
         </div>
       
          
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input placeholder= 'Confirm password' type="password" {...field} className=" focus:border-[#2152FF] w-full focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
            
        
          <div className="">
          <Button type="submit" className="w-full  bg-[#2152FF] mt-[44px] mb-0 " >
           
          
           Save Changes
           
          </Button>
          </div>
        </form>
      </Form>

      </section>
    
      
    </div>
    </>
  )
}

export default PassForm