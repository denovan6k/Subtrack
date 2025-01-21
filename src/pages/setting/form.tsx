import PassForm from "./passwordForm"
import ProfileForm from "./profileForm"


const PoForm = () => {
  return (
    <>
    <section className='flex flex-col gap-4'>
        <ProfileForm/>
        <PassForm/>
 
    </section>
    </>
  )
}

export default PoForm