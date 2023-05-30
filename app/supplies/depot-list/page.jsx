import ListProducts from "@/components/supplies/products/listProducts";
import Header from "@/components/Header";

function DepotList() {
  return (
    <div>
      <header className="flex">
        <Header hrefAddBtn="/supplies/depot" hrefBackBtn={"/supplies/"}pageName="nocturnal-fees"/>
      </header>
      <main className="w-[99%] mx-auto">
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark text-white">
            <tr>
              <th>شماره</th>
              <th>نمبر مکتوب</th>
              <th>توضحات</th>
              <th>مشاهده</th>
            </tr>
          </thead>
          <ListProducts/>
        </table>
      </main>
    </div>
  );
}

export default DepotList;
