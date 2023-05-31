import FormHeader from "@/components/supplies/header";
import axios from "axios";

async function getData(id) {
  const data = await axios.get(
    `http://localhost:3001/supplies/stuffes/details/${id}`
  );
  return data.data;
  // return data;
}
async function Details({ params }) {
  const data = await getData(params.id);
  return (
    <div>
      <header>
        <FormHeader title={"مدیر جنسی"} />
      </header>
      <main className="w-[99%] mx-auto">
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark text-white">
            <tr>
              <th>شماره</th>
              <th>نام جنس</th>
              <th>واحد جنس</th>
              <th>مقدار</th>
              <th>قیمت فی واحد</th>
              <th>قیمت مجموعی</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{items.itemName}</td>
                  <td>{items.unit}</td>
                  <td>{items.amount}</td>
                  <td>{items.price}</td>
                  <td>{items.amount * items.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Details;
