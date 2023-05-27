import Header from "@/components/hr_components/header";



export const metadata = {
  title: 'آمریت منابع بشری',
  description: 'Developed by Atiqullah Poya and Mirwais Jafari',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body>
        {children}
        <Header/>
      </body>
    </html>
  )
}
