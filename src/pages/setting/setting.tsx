import Navbar from "../dashboard/navbar"
import SettingCard from "./card"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import ReminderDialog from "./reminderDialog"


const SettingLayout = () => {
  const location = useLocation();
  const { pathname } = location;

  // Function to render header and paragraph based on pathname
  const renderContent = () => {
    switch (pathname) {
      case '/dashboard/setting':
        return (
          <>
            <h1 className="text-black font-semibold text-xl">Profile</h1>
            <p className="text-[#000000]/70"> Update your personal information and password to keep your account secure</p>
          </>
        );
      case '/dashboard/setting/team':
        return (
          <>
                <h1 className="text-black font-semibold text-xl">Team Member</h1>
                <p className="text-[#000000]/70"> Add your team members</p>
          </>
        );
      case '/dashboard/setting/delete':
        return (
          <>
            <h1 className="text-black font-semibold text-xl">Delete account</h1>
            <p className="text-[#000000]/70">Feel free to reach out to us via email or phone.</p>
          </>
        );
      default:
        return (
          <>
             <h1 className="text-black">Profile</h1>
             <p className="text-[#000000]/70"> Update your personal information and password to keep your account secure</p>
          </>
        );
    }
  };
  return (
    <>
    <header className="px-4">
      <Navbar/>
    </header>
    <section className="px-4 pb-4 lg:px-8 lg:pb-8"> {renderContent()} </section>
    <main className="px-4 pb-4 lg:px-8 lg:pb-8 grid grid-cols-[240px_1fr] gap-4 ">
    <div className={`${pathname === ''}`}>
    <SettingCard/>
    </div>
    <Outlet/>
    </main>
    <ReminderDialog />
    </>
  )
}

export default SettingLayout