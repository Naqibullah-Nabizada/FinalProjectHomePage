import '@/public/bootstrap/bootstrap.css';
// import 'react-toastify/dist/ReactToastify.css';
import "../globals.css";

// import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'آمریت تهیه و تدارکات',
  description: 'Developed by Ali sajad Mohammadi and Rohullah Sarabi',
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
