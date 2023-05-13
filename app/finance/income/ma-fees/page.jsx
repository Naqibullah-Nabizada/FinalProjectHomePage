import Header from "@/components/Header";
import MAFees from "./components/MAFees";

const IdCard = () => {

  return (
    <>
      <header className="flex">
        <Header href="./income/ma-fees/add" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto">
        <MAFees />
      </main>
    </>
  )
}

export default IdCard;