import FormHeader from "@/components/supplies/form/header";
import ListProducts from "@/components/supplies/products/listProducts";
import Link from "next/link";
import Header from "@/components/Header";
function DepotList({ params }) {
  console.log(params);
  return (
    <div>
      {/* <FormHeader/> */}
      <header className="flex">
        <Header href="/finance/income/nocturnal-fees/add" pageName="nocturnal-fees"/>
      </header>
      <main className="w-[99%] mx-auto">
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark text-white">
            <tr>
              <th>شماره</th>
              <th>جنس</th>
              <th>واحد</th>
              <th> مقدار فی واحد</th>
              <th>تعداد</th>
              <th>مجموعه </th>
            </tr>
          </thead>
          <ListProducts/>
        </table>
        <Link href="../supplies" className="container mx-auto">
            <button className="btn btn-dark w-auto text-white p-2 text-center transform hover:scale-105 mx-10">بازگشت</button>
        </Link>
      </main>
    </div>
  );
}

export default DepotList;
