
import img1 from '../../../assets/SUBTrack Demo Day-5.png' 
const WhyChoose = () => {
  return (
    <>
    <main className='lg:px-32 py-4 lg:py-16 px-4'> 
    <section className='grid grid-cols-2 lg:gap-12 md:gap-8 gap-4 items-center'>
        <img className='w-full rounded-xl' src={img1} alt=''/>
        <ul className='flex flex-col gap-4'>
            <li className='uppercase font-bold text-[#2152FF]'>
            why choose us
            </li>
            <li className='text-3xl font-bold text-[#373F41] max-w-xs'>
            We scratch, build and play together
            </li>
            <li className='text-sm text-[#737B7D] max-w-lg mt-2'>
            We innovate, collaborate, and grow together. Our platform empowers businesses to track and manage their subscriptions seamlessly, reducing operational burdens and boosting efficiency. Whether you're overseeing software licenses or managing recurring payments, SUBTrack provides an intuitive dashboard that simplifies complex processes. With detailed analytics, automated reminders, and customizable workflows, you can ensure that nothing slips through the cracks. Our mission is to help businesses focus on what matters most by streamlining subscription management, ensuring that no opportunity for optimization or savings is missed. Empower your team, save time, and unlock potential with SUBTrack.
        </li>
        </ul>

    </section>
    </main>
    </>
  )
}

export default WhyChoose