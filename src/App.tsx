


import Logout from "./authentication/logout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

import Authroute from "./authentication/authroute";
import Sidebar from "./pages/dashboard/sidebar";
import './index.css'; // Ensure this line is present to import your global styles

import Dashboardroute from "./pages/dashboard/dasboardroute";


function App() {
  return (
    <>
    <div className="font-custom">
    <Router>
      <Routes>
        <Route path="/authentication/*" element={<Authroute />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
       
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/dashboard/*" element={<Dashboardroute/>} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
