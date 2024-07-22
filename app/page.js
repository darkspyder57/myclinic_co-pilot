"use client"

import About from "./Components/About.jsx";
import Features from "./Components/Features.jsx";
import Hero from "./Components/Hero.jsx";
import { useEffect } from "react";
import aos from "@/public/assets/vendor/aos/aos.js";
import Cta from "./Components/Cta.jsx";
// import Pricing from "./Components/Pricing.jsx";
import Faq from "./Components/Faq.jsx";
import Team from "./Components/Team.jsx";
import Contact from "./Components/Contact.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";
import BackToTop from "./Components/BackToTop.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";


export default function Home() {
  useEffect(() => {
    aos.init();
      }, []);
  return (
    <>

    {/* <Header /> */}
    {/* <AuthProvider> */}
    <Header />
    <Hero />
    <main id="main">
      <About />
      <Features />
      <Cta />
      {/* <Pricing /> */}
      <Faq />
      <Team />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
    {/* </AuthProvider> */}
    {/* <Footer /> */}
    {/* <BackToTop /> */}
    </>
  );
}
