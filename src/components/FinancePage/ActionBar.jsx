import { useState } from "react";
import IMAGES from "../../images";
import FilterContainer from "./FilterContainer";
import SortIconComponent from "./SortIconComponent";
import TableFilterIconComponent from "./TableFilterIconComponent";
const ActionBar = ({ setTableFilter, tableFilter }) => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  return (
    <>
      <div className="z-20 flex items-center gap-4 pb-2  pr-5 bg-white border-b border-b-[#F6F6F6] mb-[10px]">
        <div className="relative">
          <img
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsFiltersVisible((prev) => !prev);
            }}
            src={IMAGES.FilterIcon}
            alt="filter icon"
          />
          {isFiltersVisible && (
            <FilterContainer
              isFiltersVisible={isFiltersVisible}
              setIsFiltersVisible={setIsFiltersVisible}
            />
          )}
        </div>
        <SortIconComponent />

        <TableFilterIconComponent
          tableFilter={tableFilter}
          setTableFilter={setTableFilter}
        />
      </div>
    </>
  );
};

export default ActionBar;
