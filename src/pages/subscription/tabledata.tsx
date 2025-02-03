export interface tableData  {
    id?: number
    platform: string
    status: string
    interval: string
    activated: string
    expiry_date:string
    description:string    
}

export const TableDat : tableData[] = [{
    id: 0,
    platform: 'Figma',
    status: 'active',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Unlock Figma’s premium tools with advanced collaboration, unlimited version history, and exclusive resources to streamline your design process.'
},
{
    id: 1,
    platform: 'Dribbble',
    status: 'in',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Showcase your creative work on Dribbble’s premium platform with exclusive access to job boards, design challenges, and community feedback.'
},
{
    id: 2,
    platform: 'Dropbox',
    status: 'Due',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Secure cloud storage and advanced file sharing features make Dropbox ideal for managing and collaborating on your files with ease.'
},
{
    id: 3,
    platform: 'Adobe',
    status: 'Due',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Access Adobe’s suite of creative tools, including Photoshop, Illustrator, and Premiere Pro, to bring your creative visions to life.'
},
{
    id: 4,
    platform: 'Netflix',
    status: 'active',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Stream unlimited movies, series, and exclusive content with Netflix’s premium plan for non-stop entertainment on multiple devices.'
},
{
    id: 5,
    platform: 'Spotify',
    status: 'active',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Enjoy unlimited music streaming with Spotify’s premium plan, featuring ad-free listening, offline access, and personalized playlists.'
},
{
    id: 6,
    platform: 'Chat GPT',
    status: 'in',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Gain access to enhanced AI-powered conversation features and priority access to new updates with the Chat GPT subscription.'
},
{
    id: 7,
    platform: 'Snapchat',
    status: 'active',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Unlock premium lenses, exclusive filters, and priority support with Snapchat’s subscription for enhanced sharing and engagement.'
},
{
    id: 8,
    platform: 'Behance',
    status: 'in',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Showcase your creative projects and connect with other designers on Behance, with added benefits for professional exposure and job opportunities.'
},
{
    id: 9,
    platform: 'Grammarly',
    status: 'active',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Enhance your writing with Grammarly’s premium features, offering advanced grammar checks, style improvements, and plagiarism detection.'
},
{
    id: 10,
    platform: 'X',
    status: 'in',
    interval: 'Monthly',
    activated: 'Jan 05, 2025',
    expiry_date: 'Dec 12, 2025',
    description: 'Stay connected with your followers and gain access to exclusive features on X, including premium content creation and social analytics tools.'
}
]