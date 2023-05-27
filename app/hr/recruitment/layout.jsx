import Header from "@/components/hr_components/header/header";

export const metadata = {
    title: 'آمریت منابع بشری',
    description: 'Developed by Atiqullah Poya and Mirwais Jafari',
  }

  export default function RecruitmentLayout({ children }) {
    return (
      <main>
        {children}
        <Header/>
      </main>
    )
  }
  