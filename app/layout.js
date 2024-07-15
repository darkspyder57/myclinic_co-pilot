import '@/public/assets/vendor/animate.css/animate.min.css'
import '@/public/assets/vendor/aos/aos.css'
import '@/public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '@/public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/public/assets/vendor/boxicons/css/boxicons.min.css'
import '@/public/assets/vendor/glightbox/css/glightbox.min.css'
import '@/public/assets/vendor/remixicon/remixicon.css'
import '@/public/assets/vendor/swiper/swiper-bundle.min.css'
// import BootstrapClient from './BoostrapClient'
import {Open_Sans, Raleway} from 'next/font/google'


// <!-- Template Main CSS File -->
import '@/public/assets/css/style.css'
import Script from 'next/script'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import BackToTop from './Components/BackToTop.jsx'

export const metadata = {
  title: "Selecao Bootstrap Template - Index",
  description: "MyClinic Co-pilot",
  icons:{
    icon: ['./favicon-32x32.png'],
    apple: [ './apple-touch-icon.png' ],
    android: [ './android-chrome-192x192.png' ],
    manifest: [ 
      './site.webmanifest'
    ]
  }
};

const opensans = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700'],
  style: ['normal', 'italic'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${opensans.className}${raleway.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        {/* <BootstrapClient /> */}
        <Script src="assets/vendor/aos/aos.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy='beforeInteractive'/>
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
        {/* <!-- Template Main JS File --> */}
        <Script src="assets/js/main.js" strategy='beforeInteractive'/>
      </body>
    </html>
  );
}
