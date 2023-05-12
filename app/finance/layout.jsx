// "use client";

import '@/public/bootstrap/bootstrap.css';
// import 'react-toastify/dist/ReactToastify.css';
import '../globals.css';

// import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'آمریت مالی و حسابی',
  description: 'Developed by Naqibullah Nabizada and Shoaib Nigzad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body>
        {/* <ToastContainer /> */}
        {children}
      </body>
    </html>
  )
}
