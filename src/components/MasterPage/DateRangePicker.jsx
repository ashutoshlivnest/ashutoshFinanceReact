import Datepicker from "react-tailwindcss-datepicker";

const DateRangePicker = ({ value, setValue }) => {
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Datepicker
      configs={{
        shortcuts: {
          FYQ1: {
            text: "FY Q1",
            period: {
              start: "2023-04-01",
              end: "2023-06-30",
            },
          },
          FYQ2: {
            text: "FY Q2",
            period: {
              start: "2023-07-01",
              end: "2023-09-30",
            },
          },
          FYQ3: {
            text: "FY Q3",
            period: {
              start: "2023-10-01",
              end: "2023-12-31",
            },
          },

          FYQ4: {
            text: "FY Q4",
            period: {
              start: "2024-01-01",
              end: "2024-03-31",
            },
          },
          currentMonth: `This month`,
          pastMonth: `Last month`,
          },
      }}
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
