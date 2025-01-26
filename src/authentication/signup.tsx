import { z } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom';
// import img1 from '../assets/logo.svg'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "../components/ui/select";
import img4 from '../assets/logo.svg';
import img5 from '../assets/logob.svg'
const formSchema = z.object({
  businessName: z.string().min(3, "Business name must be at least 3 characters long"),
  country: z.string().nonempty("Please select a country"),
  industry: z.string().min(3, "Industry must be at least 3 characters long"),
  language: z.string().nonempty("Please select a language"),
});

const countries = [{name:"USA"}, {name:"Canada"}, {name:"Mexico"}];
const languages = [{name:"English"}, {name:"Spanish"}, {name:"French"}];

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      country: "",
      industry: "",
      language: "",
      
    },
  });
 const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    navigate(`/authentication/started`)
  };
  return (
    <>
    <div className='md:grid md:grid-cols-2 min-h-screen  '>

      <section className='flex flex-col gap-4 justify-center lg:px-10 lg:py-12 md:px-6 md:py-8 px-4 py-6'>
           {/* <header className='flex items-center gap-4'>
           <img src={img1} alt="" />
           <p className="text-2xl font-bold  text-white">SUBTrack</p>
           </header> */}
           <ul className='flex flex-col gap-4'>
           <li className="flex items-center  gap-4">
            <img src={img5} alt="" />
            <p className="text-2xl font-bold  text-black">SUBTrack</p>
            </li>
            <li><p className='text-black text-2xl font-semibold'>Complete Profile</p></li>
            <li className='text-sm text-black'>
            Fill in the required details 
            </li>
            </ul>
           <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col text-[12px] gap-4"
        >
         
  
          
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => {
              return (
                
                <FormItem className="">
                  <div className="flex flex-col gap-4">
                  <FormLabel>Business name</FormLabel>
                  <FormControl>
                    <Input placeholder= 'Olga’s Marketing' type="text" {...field} className=" focus:border-[#2152FF] focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
                  </FormControl>
                  </div>            
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => {
              return (
                <FormItem >
                 <div className="flex flex-col gap-4">
                  <FormLabel>Country</FormLabel>
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
          <SelectLabel>Select a country</SelectLabel>
          {countries.map((option, index) => (
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
            name="industry"
            render={({ field }) => {
              return (
                <FormItem>
                   <div className="flex flex-col gap-4">
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input
                      placeholder= 'Marketing and Advertisement'
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
            name="language"
            render={({ field }) => {
              return (
                <FormItem >
                 <div className="flex flex-col gap-4">
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} value={field.value || ''}>
      <SelectTrigger className="w-full">
  {/* Conditionally render SelectValue with placeholder */}
              {field.value ? (
                              <SelectValue>{field.value}</SelectValue>
                            ) : (
                              <SelectValue placeholder="Select a language" />
                            )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a language</SelectLabel>
          {languages.map((option, index) => (
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
          <div className="">
          <Button type="submit" className="w-full  bg-[#2152FF] mt-[44px] ">
            Next
          </Button>
          </div>
        </form>
      </Form>

      </section>
      <main className='bg-login-image bg-cover bg-no-repeat  md:flex-col md:justify-center md:items-center hidden md:flex'>
       <ul className='flex flex-col justify-center items-center'>
       <li className="flex items-center  gap-4">
            <img src={img4} alt="" />
            <p className="text-2xl font-bold  text-white">SUBTrack</p>
            </li>
            <li className='text-wrap max-w-sm text-center text-white lg:text-2xl'>
            Stay updated on your subscriptions
            </li>
       </ul>
      </main>
      
    </div>
    </>
  )
}

export default SignUp