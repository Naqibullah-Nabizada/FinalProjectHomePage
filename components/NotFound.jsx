import Image from "next/image";

const NotFound = () => {
  return (
    <div className="my-4 mx-12">
      <Image src={"/img/no-found.gif"} width={300} height={300} alt="Not Found" />
    </div>
  )
}

export default NotFound;