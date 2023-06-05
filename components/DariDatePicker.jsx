import react from "react";
// //! Shamsi Date
import Persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DariDatePicker = ({title,placeholder, name,value,onchange,...props }) => {
  return (
    <div className="w-[32%]">
              <label className="form-label">{title}</label>
              <DatePicker
                months={[
                  "حمل",
                  "ثور",
                  "جوزا",
                  "سرطان",
                  "اسد",
                  "سنبله",
                  "میزان",
                  "عقرب",
                  "قوس",
                  "جدی",
                  "دلو",
                  "حوت",
                ]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder={placeholder}
                currentDate={new DateObject({ calendar: Persian })}
                animations={[transition()]}
                calendar={Persian}
                locale={persian_fa}
                inputClass="custom-input"
                // value={tariff_date}
                // onChange={setTariff_date}
                name={name}
                required
                {...props}
              />
            </div>
  )
}

export default DariDatePicker;