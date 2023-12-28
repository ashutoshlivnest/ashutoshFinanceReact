import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Datepicker from "react-tailwindcss-datepicker";

const DateRangePicker = ({ value, setValue, ddName }) => {
  const { setFiltersSelectedData } = useContext(AppContext);
  // const [value, setValue] = useState(null);

  useEffect(() => {
    setFiltersSelectedData((prevData) => ({
      ...prevData,
      [ddName]: [value?.startDate, value?.endDate],
    }));
  }, [value]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Datepicker
      useRange={false}
      showShortcuts={true}
      toggleClassName="absolute text-[#9A55FF] fill-[#9A55FF] stroke-[#9A55FF] path-[#9A55FF] rounded-r-lg  right-2 h-full "
      placeholder={"Enter Date"}
      inputClassName={
        "border pl-1 border-[#E0E0E0] w-[99%] text-sm h-8 rounded outline-none text-[#6F6B6B]  "
      }
      value={value}
      onChange={handleValueChange}
    />
  );
};
export default DateRangePicker;
