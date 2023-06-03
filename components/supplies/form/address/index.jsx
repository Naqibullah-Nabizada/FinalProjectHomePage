import StuffRestructure from "../add-stuffs";

export default function Address() {
  return (
    <div className="container flex items-center gap-5 pb-3">
      <div className="">
        <label className="form-label">نمبر مکتوب</label>
        <input type="number" min={1} className="form-control" placeholder="نمبر مکتوب" name="documentNo" />
      </div>
      <div className="">
        <label className="form-label"> تاریخ</label>
        <input type="date" className="form-control" placeholder="تاریخ " name="date"/>
      </div>
      <div className="">
        <label className="form-label">تشریحات</label>
        <textarea className="form-control" cols="30" rows="1" name="details"></textarea>
      </div>
    </div>
  );
}
