import { useEffect, useState } from "react";
import IMAGES from "../../images";
import QuickFilter from "./QuickFilter";
import AddLadderModal from "./AddLadderModal";
import FilterContainer from "./FilterContainer";
import axios from "axios";
import AddKickerModal from "./AddKickerModal";
import AddEIModal from "./AddEIModal";
const ActionBar = ({  
  getFilteredKickerData,
  projectData,
  getFilteredLadderData,
  daterange,
  setDaterange,
  fetchLader,
  fetchKicker,
  fetchEI,
  selectedQuickFilter,
  setSelectedQuickFilter,
}) => {
  const [isQuickFilterDropdownVisible, setIsQuickFilterDropdownVisible] =
    useState(false);

  const [isAddLadderModalVisible, setIsAddLadderModalVisible] = useState(false);

  const [isAddKickerModalVisible, setIsAddKickerModalVisible] = useState(false);

  const [isEIModalVisible, setIsEIModalVisible] = useState(false);

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  return (
    <>
      <div className="z-20 flex items-center gap-4 py-3 pl-3 pr-5 bg-white">
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
              selectedQuickFilter={selectedQuickFilter}
              getFilteredKickerData={getFilteredKickerData}
              projectData={projectData}
              getFilteredLadderData={getFilteredLadderData}
              daterange={daterange}
              setDaterange={setDaterange}
              isFiltersVisible={isFiltersVisible}
              setIsFiltersVisible={setIsFiltersVisible}
            />
          )}
        </div>

        <QuickFilter
          setSelectedQuickFilter={setSelectedQuickFilter}
          selectedQuickFilter={selectedQuickFilter}
          isQuickFilterDropdownVisible={isQuickFilterDropdownVisible}
          setIsQuickFilterDropdownVisible={setIsQuickFilterDropdownVisible}
        />
        <img
          onClick={() => {
            selectedQuickFilter === "ladder"
              ? setIsAddLadderModalVisible(true)
              : selectedQuickFilter === "kicker"
              ? setIsAddKickerModalVisible(true)
              : setIsEIModalVisible(true);
          }}
          src={IMAGES.PlusIcon}
          alt="plus icon"
          className="ml-auto cursor-pointer"
        />
      </div>

      {isAddLadderModalVisible && (
        <AddLadderModal
          fetchLader={fetchLader}
          projectData={projectData}
          onClose={setIsAddLadderModalVisible}
        />
      )}
      {isAddKickerModalVisible && (
        <AddKickerModal
          fetchKicker={fetchKicker}
          projectData={projectData}
          onClose={setIsAddKickerModalVisible}
        />
      )}
      {isEIModalVisible && (
        <AddEIModal
          fetchEI={fetchEI}
          projectData={projectData}
          onClose={setIsEIModalVisible}
        />
      )}
    </>
  );
};

export default ActionBar;
