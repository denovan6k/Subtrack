import img1 from '../../assets/active.svg';
import img2 from '../../assets/due.svg';
import img3 from '../../assets/inactive.svg';
import img4 from '../../assets/taxdeductible.svg';
interface dashProps{
    image: React.ReactNode,
    description:string,
    footer:string,
}

export const DashCardsData:dashProps[] = [
    { image: <img src={img1} alt='active' />,
    description:'8 Platforms',
    footer:'Paid for this month',

},
{ image: <img src={img2} alt='due' />,
    description:'18 Platforms',
    footer:'Due for this month',

},
{ image: <img src={img3} alt='inactive' />,
    description:'24 Platforms',
    footer:'Due for this month',

},
{ image: <img src={img4} alt='tax deductible' />,
    description:'$5600',
    footer:'Due for this month',

},
]