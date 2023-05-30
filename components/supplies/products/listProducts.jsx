"use client";
// import { getProducts } from "@/lib/supplies/routes";

const products = async()=>{
    // const response = await getProducts();
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
    <tr>
      <td>1</td>
      <td>کتاب</td>
      <td>جلد</td>
      <td>۱۰۰</td>
      <td>۱۰۰</td>
      <td>۱۰۰۰۰</td>
    </tr>
    </tbody>
  );
}
