import '@/public/assets/vendor/animate.css/animate.min.css'
import '@/public/assets/vendor/aos/aos.css'
import '@/public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '@/public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/public/assets/vendor/boxicons/css/boxicons.min.css'
import '@/public/assets/vendor/glightbox/css/glightbox.min.css'
import '@/public/assets/vendor/remixicon/remixicon.css'
import '@/public/assets/vendor/swiper/swiper-bundle.min.css'
import BootstrapClient from './BoostrapClient'


// <!-- Template Main CSS File -->
import '@/public/assets/css/style.css'
import Script from 'next/script'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
        <Script src="assets/vendor/aos/aos.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
        {/* <!-- Template Main JS File --> */}
        <Script src="assets/js/main.js" />
      </body>

    </html>
  );
}
