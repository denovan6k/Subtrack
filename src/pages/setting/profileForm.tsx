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
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "../../components/ui/select";

import img5 from '../../assets/pro.svg'
const formSchema = z.object({
  businessName: z.string().min(3, "Business name must be at least 3 characters long"),
  country: z.string().nonempty("Please select a country"),
  industry: z.string().min(3, "Industry must be at least 3 characters long"),
  language: z.string().nonempty("Please select a language"),
});

const countries = [{name:"USA"}, {name:"Canada"}, {name:"Mexico"}];
const languages = [{name:"English"}, {name:"Spanish"}, {name:"French"}];

const ProfileForm = () => {
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
    navigate(`/dashboard`)
  };
  return (
    <>
    <div className=' p-4 border border-black/20 rounded-lg  '>

      <section className='flex flex-col gap-4 p-4'>
           {/* <header className='flex items-center gap-4'>
           <img src={img1} alt="" />
           <p className="text-2xl font-bold  text-white">SUBTrack</p>
           </header> */}
           <ul className='flex items-center gap-4'>
           <li className="">
            <img src={img5} alt="" />
            
            </li>
            <li className='flex flex-col'><p className='text-black text-2xl font-semibold'>Bessie Cooper</p>
            <p className='text-sm text-black'>
            cooperbessie007@gmail.com
            </p>
            </li>
            </ul>
           <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col text-[12px] gap-4"
        >
         
  
          <div className='grid grid-cols-2  gap-4'> 
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
          </div>
          <div className='grid grid-cols-2  gap-4'> 
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
          </div>
          <div className="">
          <Button type="submit" className="w-full  bg-[#2152FF] mt-[44px] ">
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

export default ProfileForm