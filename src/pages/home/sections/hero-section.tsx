import img1 from '../../../assets/logo.svg'
import { Button } from '../../../components/ui/button'
import img2 from '../../../assets/tail-right.svg'
import { Link } from 'react-router-dom'

// import { useAuth0 } from "@auth0/auth0-react";

const HeroSection = () => {
  // const { loginWithRedirect } = useAuth0();
  
  // const getHandleLogin = async () => {
   
  //   await   loginWithRedirect({
  //     authorizationParams: {

  //       redirect_uri: "https://subtrack-psi.vercel.app/authentication/signup", 
        
  //     },
  //   })
  // };

  return (
    <>
    <section className='lg:px-32 py-4 lg:py-16 px-4 flex flex-col gap-8 bg-hero-image bg-no-repeat bg-cover xl:min-h-[500px] '>
     <header className=' '>
        <ul className='flex justify-between items-center'>
          <li className='flex items-center gap-4'>
      
        <img className='' alt='' src={img1} />
        <h1 className='text-3xl text-white font-bold'>SUBTrack</h1>
          </li>
          <li className='flex items-center gap-2'>
            <Button variant={'ghost'} className='text-white' asChild>
               <Link to={`/authentication/signup`}>
              
              Login
              </Link>
            </Button>
            <Button variant={'default'} className='text-white bg-[#2152FF] hover:bg-[#2152FF]/70'>
             Sign Up
            </Button>

          </li>
        </ul>

     </header>
     <main className='flex xl:justify-center flex-col gap-4  xl:my-auto xl:gap-8'>
     <p className='text-4xl text-white font-bold text-start text text-wrap max-w-2xl'>
     Simplify Subscription Management Effortlessly
     </p>

     <p className='text-wrap text-white max-w-xl' >
     Take control of your subscriptions with a single, easy-to-use platform. Stay organized, save money, and never miss a renewal again.
     </p>

     <Button variant={'default'} className='text-white flex justify-between items-center bg-[#2152FF] hover:bg-[#2152FF]/50 max-w-[150px]' >
            Get For Free
            <img src={img2} alt='get free cta'/>
            </Button>
            </main>
    </section>
    </>
  )
}

export default HeroSection