"use client";
import { getProducts } from "@/lib/supplies/routes";

const products = async()=>{
    const response = await getProducts();
    // return response;
    console.log(response)
}

export default async function ListProducts() {
    // console.log(await products());
  return (
    <tbody>
      {/* {product.map((item) => (
              <Row item={item} key={item.id} number={++counter} />
            ))} */}
    </tbody>
  );
}
