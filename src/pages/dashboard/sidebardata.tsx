import { Icon } from '@iconify/react';

interface sidebarProps{
    icon: React.ReactNode,
    title:string,
    link:string,
}

export const SidebarData:sidebarProps[] = [
    { 
        icon:<Icon icon="ic:outline-space-dashboard" className='text-2xl' />,
        title:'Dashboard',
        link:'/dashboard'
        
}, 
 { icon:<Icon icon="ic:outline-subtitles" className='text-2xl' />,
    title:'Subscription',
    link:'/dashboard/subscription'
    
        
},
{ icon:<Icon icon="carbon:reminder" className='text-2xl' />,
    title:'Reminders',
    link:'/dashboard/reminder'
    
        
},
  {
    icon:<Icon icon="material-symbols:analytics-outline" className='text-2xl' />,
    title:'Reports',
    link:'/dashboard/report'
        
},
  {icon:<Icon icon="ic:baseline-support-agent" className='text-2xl' />,
    title:'Support',
    link:'/dashboard/support'
        
}, 
 {icon:<Icon icon="ci:settings" className='text-2xl' />,
    title:'Settings',
    link:'/dashboard/setting'
        
}, 
 {icon:<Icon icon="iconoir:log-out" className='text-2xl' />,
    title:'Sign Out',
    link:'/dashboard/signout'
        
},
  
]