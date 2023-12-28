import React, { useState, useEffect, useRef } from "react";

const TableSeeMore = ({
  setSelectedBookingID,
  followUp,
  details,
  setDetailsData,
  data,
  invoice,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);
  // Close the dropdown when clicking anywhere else on the page
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
      setQuickUpdate(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative h-full z-[100] cursor-pointer text-left text-[#8B8B8B]"
      onClick={() => setIsVisible(!isVisible)}
    >
      <span className="text-xl font-bold">⁝</span>
      {isVisible && (
        <div
          className="absolute w-40 pt-2 pb-1 px-2 text-left bg-white border-gray-300 rounded-md shadow-lg -left-40"
          ref={dropdownRef}
        >
          <p
            onClick={() => {
              setSelectedBookingID(data?.generic_details?.booking_id);
              followUp((prev) => !prev);
            }}
            className="px-3  py-[6px] text-xs rounded-md hover:bg-[#9A55FF] hover:text-white"
          >
            Follow Up
          </p>
          <p
            onClick={() => {
              details((prev) => !prev);
              setDetailsData(data);
            }}
            className="px-3  py-[6px] text-xs rounded-md hover:bg-[#9A55FF] hover:text-white"
          >
            Details
          </p>

          <p
            onClick={() => {
              invoice((prev) => !prev);
            }}
            className="px-3  py-[6px] text-xs rounded-md hover:bg-[#9A55FF] hover:text-white"
          >
            Invoice
          </p>
        </div>
      )}
    </div>
  );
};

export default TableSeeMore;
