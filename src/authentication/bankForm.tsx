import {  z } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate,Link } from 'react-router-dom';
import img5 from '../assets/logob.svg'
// import img1 from '../assets/logo.svg'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
    SelectValue,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Select,
  } from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import BankDialog from './bankDialog';
import RewBankDialog from './bankREDialog';

const bankSchema = z.object({
    bank: z.string().nonempty("Please select a country"),
    userid: z.string().min(1,"Please fill your user id"),
    password: z.string().min(1,"Please fill your password"),
  
  
  });
  
  const banks = [{name:"Gingham Bank"}, {name:"Capital Bank"}, {name:"JP Morgan"}];



const BankForm = () => {
     const form = useForm<z.infer<typeof bankSchema>>({
        resolver: zodResolver(bankSchema),
        defaultValues: {
          bank: "",
          userid: "",
          password: "",
          
          
        },
      });

      const navigate = useNavigate();

      const onSubmit = (data: any) => {
        console.log(data);
        navigate(`/authentication/started/${1}`)
      };
  return (
    <>
    <main className='flex flex-col gap-8 lg:p-8 p-4   min-h-screen'>
   
        <nav className="flex items-center py-2 gap-4">
            <img src={img5} alt="" />
            <p className="text-2xl font-bold  text-black">SUBTrack</p>
            </nav>
          
        <nav>
        <Link to={'/authentication/signup'} replace>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <rect width="36" height="36" rx="7.08333" fill="#EDEDED" fill-opacity="0.49"/>
  <path d="M21.0035 25.4094C20.8454 25.4099 20.6891 25.375 20.5462 25.3072C20.4033 25.2394 20.2774 25.1405 20.1777 25.0177L15.0641 18.6653C14.9084 18.4759 14.8232 18.2383 14.8232 17.993C14.8232 17.7478 14.9084 17.5102 15.0641 17.3207L20.3577 10.9684C20.5374 10.7522 20.7956 10.6162 21.0756 10.5904C21.3556 10.5646 21.6343 10.6511 21.8505 10.8308C22.0667 11.0105 22.2027 11.2687 22.2285 11.5487C22.2543 11.8286 22.1678 12.1074 21.9881 12.3236L17.2556 17.9983L21.8293 23.6731C21.9588 23.8285 22.041 24.0177 22.0663 24.2184C22.0916 24.4191 22.0589 24.6228 21.972 24.8055C21.8851 24.9881 21.7477 25.1421 21.5761 25.2491C21.4045 25.3561 21.2058 25.4118 21.0035 25.4094Z" fill="black" fill-opacity="0.7"/>
</svg>
                </Link> 
        </nav>
        <section className='my-auto -mt-4'>
        <header className="flex flex-col gap-2 text-center  text-wrap lg:px-44  p-4 ">
            <h1 className="lg:text-3xl text-2xl font-bold  ">Choose your bank and enter your credentials</h1>
            <p className="text-[#07080A] text-sm">By providing your first bank credentials to subtrack, you are enabling subtrack  to retrieve your financial data</p>

        </header>


    
    <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col text-[12px] gap-4 lg:px-64 p-4 md:px-32"
        >
         
          <FormField
            control={form.control}
            name="bank"
            render={({ field }) => {
              return (
                <FormItem >
                 <div className="flex flex-col gap-4">
                  <FormLabel className='text-black font-medium'>Bank</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} value={field.value || ''}>
      <SelectTrigger className="w-full">
  {/* Conditionally render SelectValue with placeholder */}
              {field.value ? (
                              <SelectValue>{field.value}</SelectValue>
                            ) : (
                              <SelectValue placeholder="Select a country" />
                            )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a bank</SelectLabel>
          {banks.map((option, index) => (
                      <SelectItem value={option.name} key={index}>
                        <div className="">
                            {option.name}
                        </div>
                      </SelectItem>
                    ))}
        
        
        </SelectGroup>
      </SelectContent>
    </Select>
                  </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
           <FormField
            control={form.control}
            name="userid"
            render={({ field }) => {
              return (
                <FormItem>
                   <div className="flex flex-col gap-4">
                  <FormLabel className='text-black font-medium'>User ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder= 'Enter your User ID'
                      type="text"
                      {...field}
                      className=" focus:border-[#2152FF] focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
           <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                   <div className="flex flex-col gap-4">
                  <FormLabel className='text-black font-medium'>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder= 'xxxx-xxxx-xxxx'
                      type="password"
                      {...field}
                      className=" focus:border-[#2152FF] focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
            
          <div className="">
          <Button type="submit" className="w-full  bg-[#2152FF] mt-[44px] ">
            Submit
          </Button>
          </div>
        </form>
      </Form>
      </section>

      <BankDialog/>
      <RewBankDialog/>  
      </main>
    </>
  )
}

export default BankForm