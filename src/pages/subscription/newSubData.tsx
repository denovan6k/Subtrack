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

  }
  
 export const SubsData: SubscriptionProps[] = [
    {
        id: 1,
      image: <img src={dropbox} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'Dropbox',
      category: 'Storage',
      description: 'Cloud storage service for file sharing and collaboration.'
    },
    {id: 2,
      image: <img src={figma} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'Figma',
      category: 'Design',
      description: 'Collaborative design tool for user interfaces and prototyping.'
    },
    {id: 3,
      image: <img src={adobe} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'Adobe XD',
      category: 'Design',
      description: 'Design and prototype websites and apps with Adobe XD.'
    },
    {id: 4,
      image: <img src={snapchat} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'Snapchat',
      category: 'Social Media',
      description: 'A multimedia messaging app for quick communication.'
    },
    {id: 5,
      image: <img src={sportify} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'Spotify',
      category: 'Music',
      description: 'Music streaming service with millions of songs and playlists.'
    },
    {id: 6,
      image: <img src={chatgpt} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'ChatGPT',
      category: 'AI',
      description: 'OpenAI’s language model for conversational tasks.'
    },
    {id: 7,
      image: <img src={grammarly} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'Google',
      category: 'Search Engine',
      description: 'The world’s leading search engine and productivity tools.'
    },
    {id: 8,
      image: <img src={behance} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'Behance',
      category: 'Tools',
      description: 'Web browser for accessing websites and apps.'
    },
    {id: 9,
      image: <img src={netflix} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
      title: 'Netflix',
      category: 'Entertainment',
      description: 'Streaming service for TV shows, movies, and documentaries.'
    }, {id: 10,
        image: <img src={x} className='rounded-full'
            width={40}
            height={40}
            alt=''/>,
        title: 'X',
        category: 'Social Media',
        description: 'Formerly Twitter, a social platform for sharing short messages.'
      },
      {id: 11,
        image: <img src={dribbble} className='rounded-full'
            width={40}
            height={40}
            alt='' />,
        title: 'Dribbble',
        category: 'Design',
        description: 'Community for showcasing and discovering creative work.'
      }
  ];
  