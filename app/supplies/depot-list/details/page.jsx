import FormHeader from "@/components/supplies/form/header";
function Details() {
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
              <th>قیمت فی واحد</th>
              <th>قیمت مجموعی</th>
            </tr>
          </thead>
          {/* <ListProducts /> */}
        </table>
      </main>
    </div>
  );
}

export default Details;
