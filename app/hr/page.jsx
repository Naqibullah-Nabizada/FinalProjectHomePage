import Hero from "@/components/hr_components/Hero";
import Navbar from "@/components/hr_components/Navbar";

export default function HomePage() {
  return (
    <>
      <div className="bg-[url('/images/hr/HR_bg.webp')] w-full h-screen bg-no-repeat">
        <Navbar />
        <hr />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}
