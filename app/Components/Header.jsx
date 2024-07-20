"use client"

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
export default function Header() {
    const { user, userName, logout } = useAuth();
    return (
        // <!-- ======= Header ======= -->
        <header id="header" className="fixed-top d-flex align-items-center  header-transparent ">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><Link href="/" legacyBehavior><a >MyClinicCopilot</a></Link></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about1">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        {user ? (
                            <>
                                <li className="dropdown"><a href="#"><span>Welcome, {userName || 'Mohnish'}</span> <i className="bi bi-chevron-down"></i></a>
                                    <ul>
                                        <li><Link  href="/dashboard" legacyBehavior><a>Go to dashboard</a></Link></li>
                                        <li><a style={{cursor: 'pointer'}} onClick={logout}>Logout</a></li>
                                    </ul>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link href="/login" legacyBehavior><a className="nav-link scrollto">Login</a></Link></li>

                            </>
                        )}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>

        </header>

    )
}
