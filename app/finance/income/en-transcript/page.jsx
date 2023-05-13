import Header from "@/components/Header";
import EnTranscript from "./components/EnTranscript";

const IdCard = () => {

  return (
    <>
      <header className="flex">
        <Header href="./income/en-transcript/add" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto">
        <EnTranscript />
      </main>
    </>
  )
}

export default IdCard;