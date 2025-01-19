import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout";
import Dashboard from "./dashboard";
import Subscription from "../subscription/subcription";


const Dashboardroute = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<DashboardLayout/>} > 
    <Route index element={<Dashboard/>} />
    <Route path='/subscription' element={<Subscription/>}/>
    </Route>
</Routes>   
    </>
  )
}

export default Dashboardroute