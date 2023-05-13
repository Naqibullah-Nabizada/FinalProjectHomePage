import Header from "@/components/Header";
import EnDeploma from "./components/EnDeploma";

const IdCard = () => {

  return (
    <>
      <header className="flex">
        <Header href="./income/en-deploma/add" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto">
        <EnDeploma />
      </main>
    </>
  )
}

export default IdCard;