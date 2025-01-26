
import { useParams, useNavigate } from "react-router-dom"
import {
    Dialog,
    DialogContent,

  
 
    DialogDescription,

  
 
    DialogHeader,
    DialogTitle,
  
  } from "../components/ui/dialog"

import { Checkbox } from "../components/ui/checkbox"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../components/ui/form"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { z } from "zod"

  import { useForm } from "react-hook-form"

import { Button } from "../components/ui/button"
  const items = [
    {
      id: "1",
      label: "Spotify direct_wrp casy",
      subtitle:'Jan 8, 2025',
      price:'$4450'
    },
    {
      id: "2",
      label: "Spotify direct_wrp casy",
      subtitle:'Jan 8, 2025',
      price:'$250'
    },
    {
      id: "3",
      label: "Spotify direct_wrp casy",
      subtitle:'Jan 8, 2025',
      price:'$1370'
    },
    {
      id: "4",
      label: "Spotify direct_wrp casy", 
      subtitle:'Jan 8, 2025',
      price:'$950'
    },
  
  ] as const
  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  })



const BankDialog = () => {
   const {id}=useParams()
    const navigate= useNavigate()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          items: ["recents", "home"],
        },
      })
     
      function onSubmit(data: z.infer<typeof FormSchema>) {
        navigate(`/authentication/started/${2}`);
        console.log(data)
      }



      const closeDialog = () => {
        
        navigate('/authentication/started');
     
      };



  return (
    <>
    <Dialog open={id ==='1' ?true:false} onOpenChange={closeDialog}>
       
       <DialogContent className="sm:max-w-[425px] lg:max-w-3xl">
         <DialogHeader>
          
          <DialogTitle className="text-center text-black text-2xl">Select your Income</DialogTitle>
        </DialogHeader>
         <div className="">
            <DialogDescription className="text-center text-wrap text-black/70 text-sm">
            Below are transactions that may represent your income, you can add additional income from other banks later
         </DialogDescription>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Remind me when</FormLabel>
                <FormDescription>
             
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0 "
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            className={`${
                                field.value?.includes(item.id) ? 'bg-[#2152FF] text-white' : ''
                              } border-gray-300 rounded-sm`}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <section className="flex justify-between w-full ">
                            <div className="flex flex-col gap-2">
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                        <FormDescription>
                           {item.subtitle}
                        </FormDescription>
                        </div>
                        <p>
                        {item.price}
                        </p>
                      
                        </section>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
           <Button type="submit" className="w-full  bg-[#2152FF] mt-[44px] ">
            Continue
          </Button>
      </form>
    </Form>
         </div>
         
         {/* <main className="flex flex-col gap-4">
         <Separator/>
            <section className="flex justify-between items-center">
                <div>
                 <h1 className="text-black">Mobile push  Reminder</h1>
                 <p className="text-[#000000]/70 text-sm"> receive instant reminders directly on your mobile device </p>
                </div>
                 <Switch className='data-[state=checked]:bg-[#2152FF] data-[state=unchecked]:bg-black/30'/>
            </section>
            <Separator/>
            <section className="flex justify-between items-center">
                <div>
                 <h1 className="text-black">Desktop Reminder</h1>
                 <p className="text-[#000000]/70 text-sm">  receive instant reminders directly on your mobile device </p>
                </div>
                 <Switch className='data-[state=checked]:bg-[#2152FF] data-[state=unchecked]:bg-black/30'/>
            </section>
            <Separator/>
             
            <section className="flex justify-between items-center">
                <div className="flex flex-col">
                 <h1 className="text-black">Email Reminder</h1>
                 <p className="text-[#000000]/70 text-sm">  receive instant reminders directly  directly in your inbox </p>
                </div>

                 <Switch className='data-[state=checked]:bg-[#2152FF] data-[state=unchecked]:bg-black/30'/>
            </section>
         </main> */}
      
        
       </DialogContent>
     </Dialog>
    
    
    </>
  )
}

export default BankDialog