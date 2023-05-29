import FormHeader from "@/components/supplies/form/header";
import ListProducts from "@/components/supplies/products/listProducts";
import Link from "next/link";

function DepotList({ params }) {
  console.log(params);
  return (
    <div>
      <FormHeader/>
      <main className="row">
        <table className="table table-bordered table-lg table-striped">
          <thead className="bg-gray-900 text-white">
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
        <Link href="../supplies">
            <button className="btn w-auto bg-gray-900 text-white p-2 text-center transform hover:scale-105 mx-10">بازگشت</button>
        </Link>
      </main>
    </div>
  );
}

export default DepotList;
