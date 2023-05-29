import { stuffTable } from "./table";

async function handler(req, res) {
    // get data from database and return the data as products
    console.log("handler");
  if (req.method == "GET") {
    const products = await stuffTable.findAll();
    console.log(products)
    res.status(200).json({ products });
  }
}
