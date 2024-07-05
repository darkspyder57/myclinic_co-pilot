"use client"

import { db } from "@/app/Firebase"
import { collection, addDoc } from "firebase/firestore"
import React, { useState, useEffect, useRef } from "react"


async function addDataToFirestore(name, email, subject, message) {
    try {
        const docRef = await addDoc(collection(db, "contact"),
            {
                name: name,
                email: email,
                subject: subject,
                message: message
            });
        console.log("Document written with ID: ", docRef.id);
        return true;
    }
    catch (error) {
        console.log("Error adding document ", error);
        return false;
    }
}


export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Clean up timeout on component unmount
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addDataToFirestore(name, email, subject, message);

        if (added) {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            // alert("Data added to firestore");    
            const submitButton = document.getElementById('submitButton');
            submitButton.textContent = 'Data Stored Successfully';
            submitButton.classList.add('success');

            timeoutRef.current = setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.classList.remove('success');
              }, 2000);
        }
    }

    return (
        // <!-- ======= Contact Section ======= -->
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </div>

                <div className="row mt-5">

                    <div className="col-lg-4" data-aos="fade-right">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                        <form className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" value={name} name="name" className="form-control" id="name" placeholder="Your Name" required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" value={email} className="form-control" name="email" id="email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" value={subject} className="form-control" name="subject" id="subject" placeholder="Subject" required onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="form-group mt-3">
                                <textarea value={message} className="form-control" name="message" rows="5" placeholder="Message" required onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit" id="submitButton">Send Message</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
            {/* <!-- End Contact Section --> */}
        </section>
    )
}