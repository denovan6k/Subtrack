import img1 from '../../../../assets/SUBTrack Demo Day-3.png'
import SubscriptionAccordion from "./subcriptionAccordion"
const SubCard = () => {
  return (
            <>
            <section className="lg:px-32 py-4 lg:py-16 px-4 flex flex-col gap-8">
              <main className="grid grid-cols-2 gap-8 items-center">
                <ul className='mt-8 flex flex-col gap-8'>
                    <li className='text-3xl font-bold text-[#373F41]'>
                    Do you have subscriptions you want to manage?
                    </li>
                    <li className='text-[18px]  text-[#737B7D] max-w-lg'>
                    Let us help you take charge of your subscriptions effortlessly. Track, organize, and optimize your spending—all in one place.
                    </li>
                    <li className=''>
                      <SubscriptionAccordion/>
                    </li>

                </ul>
                <img src={img1} alt='' className='w-full rounded-xl'/>
              </main>
            </section>
            </>
  )
}

export default SubCard