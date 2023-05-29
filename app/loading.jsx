import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <Image src={"/loading.svg"} width={150} height={150} alt="loading..."
        className="bg-inherit" />
    </div>
  )
}

export default Loading;