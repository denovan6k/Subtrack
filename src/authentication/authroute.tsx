import { Routes, Route } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";

const Authroute = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<SignUp/>} />
</Routes>   
    </>
  )
}

export default Authroute