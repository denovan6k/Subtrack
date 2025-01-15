
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./sections/hero-section";
import WhatCard from "./sections/what/whatCard";
import WhyChoose from "./sections/whyChoose";
import SubCard from "./sections/sub/subCard";


const Home = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const handleLoginClick = () => {
    console.log("Login clicked!");
    navigate("/login");
  };
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  if (isAuthenticated) {
    console.log("userid:", user?.sub);
  }
  console.log(isAuthenticated);
  return (
    <>
    <div>
      <HeroSection/>
      <WhatCard/>
      <WhyChoose/>
      <SubCard/>
    </div>

 
    </>
  );
};

export default Home;
