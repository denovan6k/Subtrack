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
        link:'/'
        
}, 
 { icon:<Icon icon="material-symbols-light:subtitles-outline" className='text-2xl' />,
    title:'Subscription',
    link:'/subcription'
    
        
},
  {
    icon:<Icon icon="material-symbols:analytics-outline" className='text-2xl' />,
    title:'Transaction',
    link:'/transaction'
        
},
  {icon:<Icon icon="ic:baseline-support-agent" className='text-2xl' />,
    title:'Support',
    link:'/support'
        
}, 
 {icon:<Icon icon="ci:settings" className='text-2xl' />,
    title:'Settings',
    link:'/settings'
        
}, 
 {icon:<Icon icon="iconoir:log-out" className='text-2xl' />,
    title:'Sign Out',
    link:'/signout'
        
},
  
]