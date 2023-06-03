import Header from "@/components/hr_components/header";
export const metadata = {
  title: "بخش آموزش و انکشاف اداره منابع بشری",
  description: "Developed by Atiqullah Poya and Mirwais Jafari",
};

export default function ArchiveLayout({ children }) {
  return (
    <main>
      <Header title={"بخش آموزش و انکشاف اداره منابع بشری"} />
      <hr />
      {children}
    </main>
  );
}