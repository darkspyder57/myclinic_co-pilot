"use client"


import Sidebar from "../Components/Sidebar";
import ContactAdmin from "../Components/ContactAdmin";
import NewsletterAdmin from "../Components/NewsletterAdmin";
import Link from "next/link";
import { useState } from "react";
export default function AdminDashboard() {

    const [view, setView] = useState('contact');

    return (
        <>
            <Link href="/">
                <p style={{ backgroundColor: "#ef6603", color: "#fff", textDecoration: "none", fontSize: "1rem", padding: "8px" }}>Back to home</p>
            </Link>
            <br />
            {/* ADMIN DASHBOARD
            <h1>
               Hello, {userName || 'admin'}
            </h1> */}
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