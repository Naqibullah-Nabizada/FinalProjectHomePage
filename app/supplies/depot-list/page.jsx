import ListProducts from "@/components/supplies/products/listProducts";
import Header from "@/components/Header";
import TableHead from "@/components/supplies/table/th/tableHead";

function DepotList() {
  return (
    <div>
      <header className="flex">
        <Header hrefAddBtn="/supplies/depot" hrefBackBtn={"/supplies/"}pageName="nocturnal-fees"/>
      </header>
      <main className="w-[99%] mx-auto">
        <table className="table table-bordered table-sm table-striped items-center">
          <thead className="table-dark text-white">
            <tr>
              <TableHead title={"شماره"}/>
              <TableHead title={"نمبر مکتوب"}/>
              <TableHead title={"توضحات"}/>
              <TableHead title={"مشاهده"}/>
            </tr>
          </thead>
          <ListProducts/>
        </table>
      </main>
    </div>
  );
}

export default DepotList;
