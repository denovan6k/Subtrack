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


const formSchema = z.object({
  businessName: z.string().min(3, "Business name must be at least 3 characters long"),
  country: z.string().nonempty("Please select a country"),
  industry: z.string().min(3, "Industry must be at least 3 characters long"),
  language: z.string().nonempty("Please select a language"),
});

const countries = [{name:"Mail"}, {name:"Phone number"}, {name:"Whatsapp"}];
// const languages = [{name:"English"}, {name:"Spanish"}, {name:"French"}];

const TeamForm = () => {
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
           <header className=''>
         
           <p className="text-xl font-bold  text-white">Invite your team members</p>
           </header>
          
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder= 'Olgamarketing@gmail.com' type="text" {...field} className=" focus:border-[#2152FF] focus:shadow-[#2152FF3f] focus:shadow-lg focus:border-2 focus:ring-0" />
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
                  <FormLabel>Action</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} value={field.value || ''}>
      <SelectTrigger className="w-full">
  {/* Conditionally render SelectValue with placeholder */}
              {field.value ? (
                              <SelectValue>{field.value}</SelectValue>
                            ) : (
                              <SelectValue placeholder="Select an Action" />
                            )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select an Action</SelectLabel>
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

export default TeamForm