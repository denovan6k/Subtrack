import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout";
import Dashboard from "./dashboard";
import Subscription from "../subscription/subcription";
import NewSub from "../subscription/newSub";
import SettingRoutes from "../setting/settingRoutes";
import ReminderCard from "../setting/reminderCard";



const Dashboardroute = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<DashboardLayout/>} > 
    <Route index element={<Dashboard/>} />
     <Route path='/subscription' element={<Subscription/>}/>
    <Route path='/subscription' element={<Subscription/>}/>
    <Route path='/subscription/:id' element={<Subscription/>}/>
    <Route path='/subscription/new' element={<NewSub/>}/>
    <Route path='/subscription/new/:id' element={<NewSub/>}/>
    <Route path='/reminder/*' element={<ReminderCard/>}/>
    <Route path='/reminder/:id*' element={<ReminderCard/>}/>
    <Route path='/setting/*' element={<SettingRoutes/>}/>
    

    </Route>
</Routes>   
    </>
  )
}

export default Dashboardroute