export default function Hero() {
    return (
        // <!-- ======= Hero Section ======= -->
        <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
            <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">

                {/* <!-- Slide 1 --> */}
                <div className="carousel-item active">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>MyClinicCopilot</span></h2>
                        <p className="animate__animated fanimate__adeInUp">Do you eat a five course meal with each course served at different restaurants, or at the same restaurant?<br /> No reason your marketing should be handled by 5 different vendors, we deliver integrative digital marketing for you...</p>
                        <a href="#about1" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div>

                {/* <!-- Slide 2 --> */}
                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Why US?</h2>
                        <p className="animate__animated animate__fadeInUp">We are one of the few AI-enabled integrated digital marketing service providers, combining cutting-edge practices with extensive experience to deliver exceptional results...</p>
                        <a href="#about2" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                </a>

            </div>

            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsxxlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                </g>
            </svg>
            {/* <!-- End Hero --> */}
        </section>

    )
}