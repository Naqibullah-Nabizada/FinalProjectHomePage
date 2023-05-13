import Header from "@/components/Header";
import NoctunalFees from "./components/NocturnalFees";

const Noctunal = () => {

  return (
    <>
      <header className="flex">
        <Header href="./income/nocturnal-fees/add" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto">
        <NoctunalFees />
      </main>
    </>
  )
}

export default Noctunal;