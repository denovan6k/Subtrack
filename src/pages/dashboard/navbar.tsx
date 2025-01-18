import img1 from '../../assets/notification.svg'
import img2 from '../../assets/avatar.svg'
const Navbar = () => {
  return (
    <>
    <div className='flex justify-end gap-4 p-4'>
    <img src={img1} alt="" />
    <img src={img2} alt='' />
    </div>
    </>
  )
}

export default Navbar