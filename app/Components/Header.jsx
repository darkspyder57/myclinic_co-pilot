"use client"

import Link from "next/link"
// import { useAuth } from "../context/AuthContext";
export default function Header() {
    // const { user, userName, logout } = useAuth();
    return (
        // <!-- ======= Header ======= -->
        <header id="header" className="fixed-top d-flex align-items-center  header-transparent ">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><Link href="/" legacyBehavior><a>MyClinicCopilot</a></Link></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about1">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li> */}
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> */}
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        {/* {user ? (
                            <>
                                <li><span style={{ marginLeft: "3rem", fontWeight: "500" }}>Welcome, {userName || 'User'}</span></li>
                                <li><button onClick={logout} className="btn btn-primary px-4 py-2" style={{ fontSize: "0.7rem", backgroundColor: "#71c55d", marginLeft: "30px" }}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link href='/login'><button className="btn btn-primary px-4 py-2" style={{ fontSize: "0.7rem", backgroundColor: "#71c55d" }}>Login</button></Link></li>
                                <li><Link href='/sign-up'><button className="btn btn-primary px-4 py-2" style={{ fontSize: "0.7rem", backgroundColor: "#71c55d" }}>Sign Up</button></Link></li>
                            </>
                        )} */}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>

        </header>

    )
}
