import Header from "@/components/Header";
import NationalNumTable from "./components/NationalNumTable";

const IdCard = () => {

  return (
    <>
      <header className="flex">
        <Header href="./income/national-num-table/add" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto">
        <NationalNumTable />
      </main>
    </>
  )
}

export default IdCard;