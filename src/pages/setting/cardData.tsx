import { Icon } from '@iconify/react';
interface CardDat{
    name: string
    icon: React.ReactNode
    link:string
}

export const CardData:CardDat[] = [
    {
        name:'Profile',
        icon:<Icon icon="iconamoon:profile" className='text-2xl' />,
        link: '/dashboard/setting'
    },
    {
    name:'Team Members',
    icon:<Icon icon="carbon:reminder" className='text-2xl' />,
    link: '/dashboard/setting/team'
},

{
    name:'Delete account',
    icon:<Icon icon="hugeicons:delete-02" className='text-2xl' />,
    link: '/dashboard/setting/delete'
},]