// return the list of products from stuff table
async function getProducts() {
  // request for below link for information
  console.log(process.env.NEXT_PUBLIC_URL)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/lib/supplies/mysql/products`,
    {
      method: "GET",
      headers: {
        "Content-Types": "application/json",
      },
    }
  );
    // returned values change to json  
  const response = await res.json();
//   return products to frontend
  return response.products;
}

// insert data into database
async function InsertProduct(data) {
  // get data from form (data)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/lib/supplies/mysql/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.statusText;
}

export { getProducts, InsertProduct };
