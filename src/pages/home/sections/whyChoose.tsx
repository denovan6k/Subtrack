
import img1 from '../../../assets/team.svg' 
const WhyChoose = () => {
  return (
    <>
    <main className='lg:px-32 py-4 lg:py-16 px-4'> 
    <section className='grid grid-cols-2 lg:gap-12 md:gap-8 gap-4 items-center'>
        <img className='w-full' src={img1} alt=''/>
        <ul className='flex flex-col gap-4'>
            <li className='uppercase font-bold text-[#2152FF]'>
            why choose us
            </li>
            <li className='text-3xl font-bold text-[#373F41] max-w-xs'>
            We scratch, build and play together
            </li>
            <li className='text-sm text-[#737B7D] max-w-lg mt-2'>
            Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore re magna aliqua. Ut en im ad minim veniam, quis nostrudre  exercit ation ullamco laboris nisi ut aliquip ex ea iquip ex ea commodo consequat Lorem ipsum dolor sit amet, iqui ex ea consectetur adi pisicing elit, sed do eiusmod tempo incidid unt ut labore et dolore magna aliqua. Ut en im ad minim veniam, quis nostrud exercit ation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </li>
        </ul>

    </section>
    </main>
    </>
  )
}

export default WhyChoose