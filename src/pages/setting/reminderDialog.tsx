
import { useParams, useNavigate } from "react-router-dom"
import {
    Dialog,
    DialogContent,

  
 
    DialogHeader,
    DialogTitle,
  
  } from "../../components/ui/dialog"

import { Checkbox } from "../../components/ui/checkbox"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../../components/ui/form"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { z } from "zod"

  import { useForm } from "react-hook-form"
import { Switch } from "../../components/ui/switch"
import { Separator } from "../../components/ui/separator"
  const items = [
    {
      id: "free_trial",
      label: "Free Trial Expiry",
    },
    {
      id: "payment",
      label: "Payment is due",
    },
    {
      id: "payment_due_3d",
      label: "Payment due tomorrow, in 3 days",
    },
    {
      id: "active_inactive",
      label: "Active/Inactive subscriptions", 
    },
    {
      id: "monthly_quarterly_annual",
      label: "Monthly/Quarterly/Annual Spending Summary",
    },
  ] as const
  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  })



const ReminderDialog = () => {
   const {id}=useParams()
    const navigate= useNavigate()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          items: ["recents", "home"],
        },
      })
     
      function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
      }



    const closeDialog = () => {
        form.handleSubmit(onSubmit)();
        navigate('/dashboard/reminder');
     
      };




  return (
    <>
    <Dialog open={id?true:false} onOpenChange={closeDialog}>
       
       <DialogContent className="sm:max-w-[425px] lg:max-w-3xl">
         <DialogHeader>
          
          <DialogTitle className="text-center text-black/70">Manage Reminders</DialogTitle>
        </DialogHeader>
         <div className="">
            {/* <DialogDescription>
         Subscription Added successfully
         </DialogDescription> */}
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
                        className="flex flex-row items-start space-x-3 space-y-0"
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
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        
      </form>
    </Form>
         </div>
         
         <main className="flex flex-col gap-4">
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
         </main>
      
        
       </DialogContent>
     </Dialog>
    
    
    </>
  )
}

export default ReminderDialog