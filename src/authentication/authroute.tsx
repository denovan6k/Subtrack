import { Routes, Route } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";
import BankForm from "./bankForm";

const Authroute = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/started" element={<BankForm/>} />
    <Route path="/started/:id" element={<BankForm/>} />
    
</Routes>   
    </>
  )
}

export default Authroute