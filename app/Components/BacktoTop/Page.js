"use client"

import { useState, useEffect } from "react";
export default function BackToTop(){
        const [isVisible, setIsVisible] = useState(false);
      
        const scrollToTop = () => {
          if (typeof window !== 'undefined') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        };
      
        const handleScroll = () => {
          if (typeof window !== 'undefined') {
            if (window.scrollY > 200) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
    return(
        <a href="#" className={`back-to-top d-flex align-items-center justify-content-center ${isVisible? 'active': ''}`} onClick={scrollToTop}><i className="bi bi-arrow-up-short"></i></a>
    )
}