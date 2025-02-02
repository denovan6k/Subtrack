import { Routes, Route } from "react-router-dom";
import SettingLayout from "./setting";
import PoForm from "./form";

import TeamForm from "./team";



const SettingRoutes = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<SettingLayout/>} > 
    <Route index element={<PoForm/>} />
    <Route path='/team' element={<TeamForm/>}/>
    
    

    </Route>
</Routes>   
    </>
  )
}

export default SettingRoutes