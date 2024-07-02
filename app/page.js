"use client"

import About from "./Components/About/Page.js";
import Features from "./Components/Features/Page.js";
import Header from "./Components/Header/Page.js";
import Hero from "./Components/Hero/Page.js";
import { useEffect } from "react";
import aos from "@/public/assets/vendor/aos/aos.js";
import Cta from "./Components/Cta/Paje.js";
import Services from "./Components/Services/Page.js";
import Portfolio from "./Components/Portfolio/Page.js";
import Testimonials from "./Components/Testimonials/Page.js";
import Pricing from "./Components/Pricing/Page.js";
import Faq from "./Components/Faq/Page.js";
import Team from "./Components/Team/Page.js";
import Contact from "./Components/Contact/Page.js";
import Footer from "./Components/Footer/Page.js";
import BackToTop from "./Components/BacktoTop/Page.js";


export default function Home() {
  useEffect(() => {
    aos.init();
      }, []);
  return (
    <>
    <Header />
    <Hero />
    <main id="main">
      <About />
      <Features />
      <Cta />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Faq />
      <Team />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
    </>
  );
}
