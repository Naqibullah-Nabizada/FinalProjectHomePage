import FormHeader from "@/components/supplies/header";
import Table from "@/components/supplies/table";
import axios from "axios";

async function getData(id) {
  const data = await axios.get(
    `http://localhost:3001/supplies/stuffes/details/${id}`
  );
  return data.data;
}
async function Details({ params }) {
  const data = await getData(params.id);
  return (
    <div>
      <header>
        <FormHeader title={"مدیر جنسی"} />
      </header>
      <Table data={data}/>
    </div>
  );
}

export default Details;
