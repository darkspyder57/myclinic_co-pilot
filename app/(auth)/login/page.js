// auth/login.js
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/Firebase';
import Link from 'next/link';

const Login= () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error("Error logging in..", error);
      alert('Login failed');
      setLoading(false);
    }
  };

  return (
    <>
      <Link href="/">
        <p style={{ backgroundColor: "#ef6603", color: "#fff", textDecoration: "none", fontSize: "1rem", padding: "8px" }}>Back to home</p>
      </Link>
      <div className="container-fluid bg-light vh-100 d-flex align-items-center justify-content-center">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" className="form-control mt-2" id="inputEmail" placeholder="Enter email" value={email} onChange={e => { setEmail(e.target.value) }} required/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control mt-2" id="inputPassword" placeholder="Password" value={password} onChange={e => { setPassword(e.target.value) }} required/>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-block">{loading ? "Logging in..." : "Login"}</button>
            </div>
          </form>
          <div className="text-center mt-3">
            <Link href="/forgot-password">
              <p className="mr-3">Forgot Password?</p>
            </Link>
            {/* <span>or</span>
            <Link href="/sign-up">
              <p className="ml-3">Sign Up Here</p>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;