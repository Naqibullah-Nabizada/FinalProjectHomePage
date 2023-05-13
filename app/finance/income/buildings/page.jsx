import Header from "@/components/Header";

const Building = () => {
  return (
    <>
      <header className="flex">
        <Header href="./income/buildings/add" />
      </header>
      <hr />
      <main>
        <table className="table table-bordered table-sm table-striped">
          <thead>
            <tr>
              <th>شماره</th>
              <th>نام</th>
              <th>نام پدر</th>
              <th>مرجع</th>
              <th>مبلغ</th>
              <th>نمبر تعرفه</th>
              <th>تاریخ تعرفه</th>
              <th>نمبر آویز</th>
              <th>تاریخ آویز</th>
              <th>ملاحضات</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr key=""></tr>
          </tbody> */}
        </table>
      </main>
    </>
  )
}

export default Building;