
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
import HeroSection from "./sections/hero-section";
import WhatCard from "./sections/what/whatCard";
import WhyChoose from "./sections/whyChoose";
import SubCard from "./sections/sub/subCard";
import Testimonial from "./sections/testimonial";
import Footer from "./sections/footer";
const Home = () => {
  // const navigate = useNavigate();
  // , isLoading
  // const { user, isAuthenticated, logout } = useAuth0();

  // const handleLoginClick = () => {
  //   console.log("Login clicked!");
  //   navigate("/login");
  // };
  // const handleLogout = () => {
  //   logout({ logoutParams: { returnTo: window.location.origin } });
  // };
  // if (isAuthenticated) {
  //   console.log("userid:", user?.sub);
  // }
  // console.log(isAuthenticated);
  return (
    <>
    <div className="min-h-screen">
      <HeroSection/>
      <WhatCard/>
      <WhyChoose/>
      <SubCard/>
      <Testimonial/>
      <Footer/>
    </div>

 
    </>
  );
};

export default Home;
