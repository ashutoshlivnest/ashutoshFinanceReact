import { useEffect, useRef, useState , useContext } from "react";
import IMAGES from "../../images";
import CustomMultiSelect from "./CustomMultiSelect";
import axios from "axios";
import DateRangePicker from "../common/DateRangePicker";
import { useFilterContext } from '../../context/FilterContext';


const FilterContainer = ({ isFiltersVisible, setIsFiltersVisible  }) => {
  // filter name state in the save filter input textbox
  const [filterName, setFilterName] = useState("");
  const { updateFilterData } = useFilterContext();
  const [activeElementIds, setActiveElementIds] = useState([]);
  const handleElementClick = (id) => {
    setActiveElementIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((activeId) => activeId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  // state to toggle the between filters & saved filters
  const [filterOrSavedFilterVisible, setFilterOrSavedFilterVisible] =
    useState("filters");

  // state to maintain the selected filters eg. Name/contact, OCR, Project etc
  const [selectedFilter, setselectedFilter] = useState(null);

  // state to toggle save filter popoup in which the user will enter the filter name
  const [saveFilerVisible, setSaveFilterVisible] = useState(false);

  // ref of the container to close it if click outside
  const filterContainerRef = useRef(null);

  const [savedFilters, setSavedFilters] = useState([]);

  const [dropdownData, setDropdownData] = useState();

  const [name, setName] = useState();
  const [selectedProjectIds, setSelectedProjectIds] = useState();
  const [configuration, setConfiguration] = useState();
  const [sourcedBy, setSourcedBy] = useState();
  const [closedBy, setClosedBy] = useState();
  const [invoiceStatus, setInvoiceStatus] = useState();
  const [dealStatus, setDealStatus] = useState();
  const [closureDate, setClosureDate] = useState();
  const [ba2Date, setBa2Date] = useState();
  const [ba3Date, setBa3Date] = useState();
  const [sdrDate, setSdrDate] = useState();
  const [followUpDate, setFollowUpDate] = useState();


  //console.log(selectedFilter);

  const handleFilter = async () => {
    axios
      .post(`https://aarnainfra.com/ladder/client/filterFetch.php`, {
        name_number: name,
        project_ids: selectedProjectIds,
        sourced_by: sourcedBy,
        closed_by: closedBy,
        configurations: activeElementIds.join(","),
        closure_date:
          closureDate?.startDate != null || undefined
            ? closureDate?.startDate + " - " + closureDate?.endDate
            : null,
      })
      .then((res) => {
        console.log(res);
        //sendDataToParent(res?.data);
        updateFilterData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Function to close the dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(event.target)
      ) {
        setIsFiltersVisible(false);
      }
    };

    // Add event listener when the dropdown is visible
    if (isFiltersVisible && filterContainerRef.current) {
      document.addEventListener("click", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isFiltersVisible, filterContainerRef]);

  useEffect(() => {
    fetchDropdownData();
  }, []);
  const fetchDropdownData = async () => {
    axios
      .get(`https://aarnainfra.com/ladder/client/bookingdd.php`)
      .then((res) => {
        setDropdownData(res?.data);
        console.log(dropdownData);
      });
  };
  console.log(dropdownData);
  return (
    <div
      ref={filterContainerRef}
      className=" absolute w-[250px] pr-1 top-9 z-20 bg-white rounded  drop-shadow-2xl border border-[#E1E1E1] "
    >
      {/* Heading Filters OR Saved Fitlers*/}
      <div className="sticky top-0 flex pt-4 bg-white justify-evenly">
        <p
          onClick={() => setFilterOrSavedFilterVisible("filters")}
          className={`${
            filterOrSavedFilterVisible === "filters"
              ? "border-b-2 border-b-[#9A55FF] text-[#9A55FF]"
              : "text-[#919191]"
          } px-2 pb-1 text-sm font-medium  cursor-pointer`}
        >
          Filters
        </p>

        <p
          onClick={() => {
            setFilterOrSavedFilterVisible("savedFilters");
          }}
          className={`${
            filterOrSavedFilterVisible === "savedFilters"
              ? "border-b-2 border-b-[#9A55FF] text-[#9A55FF]"
              : "text-[#919191]"
          } px-2 pb-1 text-sm font-medium  cursor-pointer`}
        >
          Saved Filters
        </p>
      </div>

      {/* Filters Div's visible when filterOrSavedFilterVisible is filters*/}
      {filterOrSavedFilterVisible === "filters" && (
        <div
          id="filter-container"
          className="pl-4 pr-4 h-[440px]  overflow-y-scroll pt-1 "
        >
          <div className="border-b border-b-[#F7F7F7] py-2">
            {/* Name  */}
            <div
              onClick={() =>
                setselectedFilter((prev) => (prev === "name" ? "" : "name"))
              }
              className="flex mt-1  justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "name"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                Name
              </p>
              {selectedFilter === "name" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "name" && (
              <div className="pt-2 pb-1">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder={"Enter Here"}
                  type="text"
                  className="border  border-[#E0E0E0] outline-none rounded h-8 pl-2 placeholder:text-[#9D9D9D] placeholder:text-xs text-[#6F6B6B] text-sm w-[94%] font-normal"
                />
              </div>
            )}

            {/* Project */}
            <div
              onClick={() =>
                setselectedFilter((prev) =>
                  prev === "project" ? "" : "project"
                )
              }
              className="flex mt-3 justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "project"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                Project
              </p>
              {selectedFilter === "project" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "project" && (
              <div className="pt-2 pb-1">
                <CustomMultiSelect
                  setValue={setSelectedProjectIds}
                  options={dropdownData?.project}
                />
              </div>
            )}

            {/* Configuration */}
            <div
              onClick={() =>
                setselectedFilter((prev) =>
                  prev === "configuration" ? "" : "configuration"
                )
              }
              className="mt-3 flex justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "configuration"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                Configuration
              </p>
              {selectedFilter === "configuration" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "configuration" && (
              <div className="pt-2 pb-1">
                <div className="flex flex-wrap gap-2 mt-4">
                  {dropdownData?.configuration.map((value, id) => (
                    <div
                      key={value.id}
                      onClick={() => {
                        handleElementClick(value.id);
                      }}
                      className={`text-xs text-[#6F6B6B]   ${
                        activeElementIds.includes(value.id)
                          ? "bg-[#F8EFFF]"
                          : "bg-white"
                      } cursor-pointer rounded  border border-[#E0E0E0] px-2 py-[5px] font-medium shadow-sm`}
                    >
                      {value.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/*   OB Status */}
            <div
              onClick={() =>
                setselectedFilter((prev) =>
                  prev === "ob_status" ? "" : "ob_status"
                )
              }
              className="mt-3 flex justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "ob_status"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                OB Status
              </p>
              {selectedFilter === "ob_status" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "ob_status" && (
              <div className="pt-2 pb-1">
                <input
                  onChange={(e) => {
                    // setName(e.target.value);
                  }}
                  placeholder={"Enter Here"}
                  type="text"
                  className="border  border-[#E0E0E0] outline-none rounded h-8 pl-2 placeholder:text-[#9D9D9D] placeholder:text-xs text-[#6F6B6B] text-sm w-[94%] font-normal"
                />
              </div>
            )}

            {/* Sourced By */}
            <div
              onClick={() =>
                setselectedFilter((prev) =>
                  prev === "sourced_by" ? "" : "sourced_by"
                )
              }
              className="mt-3 flex justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "sourced_by"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                Sourced By
              </p>
              {selectedFilter === "sourced_by" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "sourced_by" && (
              <div className="pt-2 pb-1">
                <CustomMultiSelect
                  setValue={setSourcedBy}
                  options={dropdownData?.source_by_and_closed_by}
                />
              </div>
            )}

            {/* Closed By */}
            <div
              onClick={() =>
                setselectedFilter((prev) =>
                  prev === "closed_by" ? "" : "closed_by"
                )
              }
              className="mt-3 flex justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "closed_by"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                Closed By
              </p>
              {selectedFilter === "closed_by" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "closed_by" && (
              <div className="pt-2 pb-1">
                <CustomMultiSelect
                  setValue={setClosedBy}
                  options={dropdownData?.source_by_and_closed_by}
                />
              </div>
            )}

            {/* Invoice Status */}
            <div
              onClick={() =>
                setselectedFilter((prev) =>
                  prev === "invoice_status" ? "" : "invoice_status"
                )
              }
              className="mt-3 flex justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "invoice_status"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                Invoice Status
              </p>
              {selectedFilter === "invoice_status" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "invoice_status" && (
              <div className="pt-2 pb-1">
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  placeholder={"Enter Here"}
                  type="text"
                  className="border  border-[#E0E0E0] outline-none rounded h-8 pl-2 placeholder:text-[#9D9D9D] placeholder:text-xs text-[#6F6B6B] text-sm w-[94%] font-normal"
                />
              </div>
            )}

            {/* Closure Date */}
            <div
              onClick={() =>
                setselectedFilter((prev) =>
                  prev === "closure_date" ? "" : "closure_date"
                )
              }
              className="mt-3 flex justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "closure_date"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                Closure Date
              </p>
              {selectedFilter === "closure_date" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "closure_date" && (
              <div className="custom-daterange pt-2 pb-1">
                <DateRangePicker
                  value={closureDate}
                  setValue={setClosureDate}
                />
              </div>
            )}

            {/* Follow Up Date */}
            <div
              onClick={() =>
                setselectedFilter((prev) =>
                  prev === "follow_up_date" ? "" : "follow_up_date"
                )
              }
              className="mt-3 flex justify-between cursor-pointer"
            >
              <p
                className={` ${
                  selectedFilter === "follow_up_date"
                    ? "text-[#9A55FF] font-medium"
                    : "text-[#6F6B6B] "
                }  text-base text-[15px]  select-none cursor-pointer`}
              >
                Follow Up Date
              </p>
              {selectedFilter === "follow_up_date" && (
                <img
                  src={IMAGES.ArrowIcon}
                  alt="arrow icon"
                  className="mr-3 "
                />
              )}
            </div>
            {selectedFilter === "follow_up_date" && (
              <div className="custom-daterange pt-2 pb-1">
                <DateRangePicker
                  value={followUpDate}
                  setValue={setFollowUpDate}
                />
                {/* <input
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  placeholder={"Enter Here"}
                  type="date"
                  className="border  border-[#E0E0E0] outline-none rounded h-8 pl-2 placeholder:text-[#9D9D9D] placeholder:text-xs text-[#6F6B6B] text-sm w-[94%] font-normal"
                /> */}
              </div>
            )}
          </div>

          {/* Icon's Container (search, clear all, save filters)*/}
          <div className="sticky bottom-0 flex items-center justify-end gap-3 py-1 bg-white ">
            <img
              onClick={handleFilter}
              className="cursor-pointer"
              src={IMAGES.SearchIcon}
              alt="search icon "
            />
            <img
              onClick={() => {
                setIsFiltersVisible(false);
                setselectedFilter(null);
              }}
              className="cursor-pointer"
              src={IMAGES.ClearAllIcon}
              alt="clear all icon"
            />
            <img
              className="cursor-pointer"
              src={IMAGES.SaveIcon}
              alt="save icon"
            />
          </div>
        </div>
      )}

      {/* Saved Filters Div */}
      {filterOrSavedFilterVisible === "savedFilters" && (
        <div className="p-2 ">
          {savedFilters.length === 0 ? (
            <p className="text-[#919191] text-base font-normal">
              No Saved Filters
            </p>
          ) : (
            <div
              key={filter?.id}
              className="flex items-center justify-between px-1 mt-2"
            >
              <span>{filter?.name}</span>
              <img
                className="cursor-pointer"
                src={IMAGES.DeleteIcon}
                alt="delete icon"
              />
            </div>
          )}
        </div>
      )}

      {/* Save Filter Popup */}
      {saveFilerVisible && (
        <div className="absolute w-52 h-fit left-[104%] bg-white top-[72%] rounded-md py-2 px-3 shadow-lg">
          <span className="text-sm font-medium text-[#9A55FF] underline decoration-[#9A55FF] decoration-solid decoration-2 underline-offset-[8px]">
            Save Filter
          </span>
          <div>
            <p className="text-[#696969] text-sm pt-3 pb-2">Filter Name</p>
            <input
              onChange={(e) => {
                setFilterName(e.target.value);
              }}
              placeholder="Name Here"
              type="text"
              className="border border-[#B4B4B4] rounded w-full h-8 placeholder:text-xs text-sm text-[#696969] outline-none placeholder:text-[#818181] pl-3"
            />
          </div>
          <button className="bg-[#9A55FF] text-white font-medium text-sm h-6  rounded px-4 mt-4 block mx-auto">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterContainer;
