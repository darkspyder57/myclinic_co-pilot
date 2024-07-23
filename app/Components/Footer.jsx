"use client"

import Link from "next/link"
export default function Footer() {
    return (
        // <!-- ======= Footer ======= -->
        <footer id="footer">
            <div className="container">
                <div className="logo">
                <Link href="/" legacyBehavior><a><img src="assets/img/logo/logo.png" alt="" className="img-fluid" /></a></Link>
                </div>
                
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                <div className="social-links">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>

                <div className="copyright">
                    &copy; Copyright <strong><span>Selecao</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
            {/* <!-- End Footer --> */}
        </footer>

    )
}