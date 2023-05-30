"use client";
// import { getProducts } from "@/lib/supplies/routes";

const products = async()=>{
    // const response = await getProducts();
    // return response;
    console.log(response)
}

export default async function ListProducts() {
  return (
    <tbody>
    <tr>
      <td>1</td>
      <td>کتاب</td>
      <td className="flex overflow-clip">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Recusandae molestias nostrum voluptas quidem. 
        Nam reprehenderit deleniti temporibus necessitatibus atque impedit.adipisicing elit.
         Recusandae molestias nostrum voluptas quidem.
      </td>
      <td className="text-center items-center">
        <Link href={"/supplies/depot-list/details"} className="btn bg-yellow-500">
          <AiOutlineEye/>
        </Link>
      </td>
    </tr>
    </tbody>
  );
}
