import { Routes, Route } from "react-router-dom";
import SettingLayout from "./setting";
import PoForm from "./form";



const SettingRoutes = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<SettingLayout/>} > 
    <Route index element={<PoForm/>} />
 
    

    </Route>
</Routes>   
    </>
  )
}

export default SettingRoutes