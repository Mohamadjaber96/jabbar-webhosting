import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/index";
// import Service from "../../components/Hero/card";
import Multiservice from "../../components/theservices/Multiservice";
import OurOffers from "../../components/Ourservices/OurOffers.jsx";
// import Hosting from "../../components/Hostingplan/Hosting.jsx";
import Managment from "../../components/Managment/index";
import PricingCard from "../../components/Hostingplan/PricingCard";
import Footer from "../../components/Footer/Footer.jsx";
// import Login from "../../components/auth/Login/Login";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Multiservice />
      <OurOffers />

      <PricingCard />
      <Managment />

      <Footer />
    </>
  );
}
