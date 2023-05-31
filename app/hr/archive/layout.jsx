import Header from "@/components/hr_components/header";
export const metadata = {
  title: "بخش سوانح منابع بشری",
  description: "Developed by Atiqullah Poya and Mirwais Jafari",
};

export default function ArchiveLayout({ children }) {
  return (
    <main>
      <Header title={"بخش سوانح منابع بشری"} />
      <hr />
      {children}
    </main>
  );
}