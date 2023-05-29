import Header from "@/components/hr_components/header";
export const metadata = {
  title: "بخش استخدام منابع بشری",
  description: "Developed by Atiqullah Poya and Mirwais Jafari",
};

export default function RecruitmentLayout({ children }) {
  return (
    <main>
      <Header title={"بخش استخدام منابع بشری"} />
      <hr />
      {children}
    </main>
  );
}
