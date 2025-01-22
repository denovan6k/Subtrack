import figma from '../../assets/figma.svg'
import dribbble from '../../assets/dribbble.svg'
import dropbox from '../../assets/dropbox.svg'
import adobe from '../../assets/adobe.svg'
import netflix from '../../assets/netflix.svg'
import sportify from '../../assets/spotify.svg'
import chatgpt from '../../assets/chatgpt.svg'
import snapchat from '../../assets/snapchat.svg'
import behance from '../../assets/behance.svg'
import grammarly from '../../assets/grammarly.svg'
import x from '../../assets/x.svg'

export interface SubscriptionProps {
    id?: number;
    image: React.ReactNode;
    title: string;
    category: string;
    description: string;
    status: 'active' | 'in' | 'due';  // Status is now mandatory for all
}

export const RemData: SubscriptionProps[] = [
    {
        id: 1,
        image: <img src={dropbox} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Dropbox',
        category: 'Storage',
        description: 'Cloud storage service for file sharing and collaboration.',
        status: 'active'  // Active status
    },
    {
        id: 2,
        image: <img src={figma} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Figma',
        category: 'Design',
        description: 'Collaborative design tool for user interfaces and prototyping.',
        status: 'due'  // Due status
    },
    {
        id: 3,
        image: <img src={adobe} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Adobe XD',
        category: 'Design',
        description: 'Design and prototype websites and apps with Adobe XD.',
        status: 'in'  // Inactive status
    },
    {
        id: 4,
        image: <img src={snapchat} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Snapchat',
        category: 'Social Media',
        description: 'A multimedia messaging app for quick communication.',
        status: 'active'  // Active status
    },
    {
        id: 5,
        image: <img src={sportify} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Spotify',
        category: 'Music',
        description: 'Music streaming service with millions of songs and playlists.',
        status: 'due'  // Due status
    },
    {
        id: 6,
        image: <img src={chatgpt} className='rounded-full' width={40} height={40} alt='' />,
        title: 'ChatGPT',
        category: 'AI',
        description: 'OpenAI’s language model for conversational tasks.',
        status: 'active'  // Active status
    },
    {
        id: 7,
        image: <img src={grammarly} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Google',
        category: 'Search Engine',
        description: 'The world’s leading search engine and productivity tools.',
        status: 'in'  // Inactive status
    },
    {
        id: 8,
        image: <img src={behance} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Behance',
        category: 'Tools',
        description: 'Web browser for accessing websites and apps.',
        status: 'active'  // Active status
    },
    {
        id: 9,
        image: <img src={netflix} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Netflix',
        category: 'Entertainment',
        description: 'Streaming service for TV shows, movies, and documentaries.',
        status: 'due'  // Due status
    },
    {
        id: 10,
        image: <img src={x} className='rounded-full' width={40} height={40} alt='' />,
        title: 'X',
        category: 'Social Media',
        description: 'Formerly Twitter, a social platform for sharing short messages.',
        status: 'in'  // Inactive status
    },
    {
        id: 11,
        image: <img src={dribbble} className='rounded-full' width={40} height={40} alt='' />,
        title: 'Dribbble',
        category: 'Design',
        description: 'Community for showcasing and discovering creative work.',
        status: 'active'  // Active status
    }
];
