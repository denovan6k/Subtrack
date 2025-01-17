import img from '../../../assets/testimg.svg'
import img1 from '../../../assets/quote.svg'

const Testimonial = () => {
  return (
    <>
    <main className='flex flex-col gap-4'>
        <p className='text-center text-3xl font-bold'>Testimonials</p>
      <section className=" lg:px-32 py-4 lg:py-16 px-4 grid gap-4 grid-cols-2">
          <img src={img} alt="" />
          <ul className="flex flex-col gap-8 ">
            <li>
            <img src={img1} alt="" />
            </li>
            <li>
            <p className="text-2xl font-semibold text-wrap text-[#373F41] ">SubTrack transformed how I manage subscriptions! Its centralized dashboard, timely alerts, and cost-saving insights have saved my business time and money. The role-based access ensures security, and everything stays organized. I couldn’t run my business without it!</p>
            </li>
            <li className=' text-[#3568D4]'>
            Emily R., Owner of BrightPath Marketing
            </li>
          
          </ul>
      </section>
      </main>
    </>
  )
}

export default Testimonial
