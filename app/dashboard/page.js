"use client"


import Sidebar from "../Components/Sidebar";
import ContactAdmin from "../Components/ContactAdmin";
import NewsletterAdmin from "../Components/NewsletterAdmin";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import withAuth from "../withAuth";
const AdminDashboard =()=> {

    const [view, setView] = useState('contact');
    const {logout} = useAuth();

    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center header-transparent bg-dark">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <Link href="/" legacyBehavior><a><img src="assets/img/logo/logo.png" alt="" className="img-fluid" /></a></Link>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" style={{cursor: "pointer"}} onClick={logout}>Logout</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
            <br />
            <br />
            <br />
            <div className="d-flex">
                <Sidebar setView={setView} />
                <div className="p-4 w-100">
                    {view === 'contact' && <ContactAdmin />}
                    {view === 'newsletter' && <NewsletterAdmin />}
                </div>
            </div>
        </>
    )
}

AdminDashboard.displayName = 'AdminDashboard';
export default withAuth(AdminDashboard);