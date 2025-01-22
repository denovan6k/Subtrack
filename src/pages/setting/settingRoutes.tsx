import { Routes, Route } from "react-router-dom";
import SettingLayout from "./setting";
import PoForm from "./form";
import ReminderCard from "./reminderCard";



const SettingRoutes = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<SettingLayout/>} > 
    <Route index element={<PoForm/>} />
    <Route path='/reminder' element={<ReminderCard/>}/>
    <Route path='/reminder/:id' element={<ReminderCard/>}/>
    

    </Route>
</Routes>   
    </>
  )
}

export default SettingRoutes