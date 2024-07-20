"use client"

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
export default function AdminDashboard() {
    const { user, userName, logout } = useAuth();

    return (
        <>
            <Link href="/">
                <p style={{ backgroundColor: "#ef6603", color: "#fff", textDecoration: "none", fontSize: "1rem", padding: "8px" }}>Back to home</p>
            </Link>
            <br />
            ADMIN DASHBOARD
            <h1>
               Hello, {userName || 'admin'}
            </h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}