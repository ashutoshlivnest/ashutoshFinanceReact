import IMAGES from "../../images";
import SingleDatePicker from "../common/SingleDatePicker";
import { useState } from "react";
import CustomMultiSelect from "./CustomMultiSelect";
import axios from "axios";
import { toast } from "react-toastify";

const AddKickerModal = ({ fetchKicker, onClose, projectData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const [targetAmt, setTargetAmt] = useState();

  const [targetUnit, setTargetUnit] = useState();

  const [percentage, setPercentage] = useState();

  const [file, setFile] = useState(null);

  const addLadder = async () => {
    if (new Date(startDate.startDate) > new Date(endDate.startDate)) {
      toast.error("Start date should be less than end date");
      return;
    }
    if (
      selectedProjectId &&
      startDate?.startDate &&
      endDate?.startDate &&
      file &&
      percentage &&
      (targetAmt || targetUnit)
    ) {
      axios
        .post(`https://aarnainfra.com/ladder/addKickerApi.php`, {
          project_id: selectedProjectId.join(","),
          start_date: startDate?.startDate,
          end_date: endDate?.startDate,
          target_amount: targetAmt || 0,
          target_unit: targetUnit || 0,
          target_percent: percentage,
        })
        .then((res) => {
          uploadFile(res?.data?.uniqueId);
          toast.success("Created Successfully");
          onClose((prev) => !prev);
          fetchKicker();
        })
        .catch((err) => toast.error("Something went wrong"));
    } else {
      toast.error("Please fill all the fields");
    }
  };

  // upload creative api call
  const uploadFile = async (id) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_type", "fresh");
    formData.append("unique_id", id);
    axios
      .post(`https://aarnainfra.com/ladder/upload.php`, formData)
      .then(() => {
        // toast.success("File Uploaded Successfully");
      })
      .catch((err) => toast.error("Something went wrong"));
  };

  return (
    <div className="fixed  inset-0 z-[100] flex items-start justify-center  overflow-x-hidden pt-20 font-ubuntu outline-none backdrop-brightness-50 focus:outline-none">
      <div className="modal mx-auto max-h-[80vh] w-[560px] overflow-y-scroll rounded-xl bg-white pb-4   pl-6 pr-6 outline-none">
        <div className="sticky top-0 z-10 flex items-center justify-between pt-5 pb-4 bg-white border-b-[#9A55FF] border-b-2 h-fit">
          <span className="text-lg font-semibold text-[#9A55FF] ">
            Add Kicker
          </span>
          <img
            onClick={() => onClose((prev) => !prev)}
            className="cursor-pointer"
            src={IMAGES.CloseIcon}
            alt="close icon"
          />
        </div>
        <div className="px-4 mt-5  pb-5 ">
          <p className="text-[#696969] text-xs font-medium mb-2">
            Select Project
          </p>
          <CustomMultiSelect
            setValue={setSelectedProjectId}
            options={projectData}
          />
          <div className="flex gap-8 mt-3">
            <div className="flex-1">
              <p className="text-[#696969] text-xs font-medium mb-2">
                Start Date
              </p>
              <SingleDatePicker value={startDate} setValue={setStartDate} />
            </div>
            <div className="flex-1">
              <p className="text-[#696969] text-xs font-medium mb-2">
                End Date
              </p>
              <SingleDatePicker value={endDate} setValue={setEndDate} />
            </div>
          </div>
          <div className="flex gap-8 mt-3">
            <div className="flex-1">
              <p className="text-[#696969] text-xs font-medium mb-2">
                Creatives
              </p>
              <input
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files[0].size > 2000000) {
                    toast.error("File size should be less than 2mb");
                  } else {
                    setFile(e.target.files[0]);
                  }
                }}
                type="file"
                className=" h-8 w-full rounded border border-[#E0E0E0] pl-2  text-xs text-[#9D9D9D] file:mr-4 file:mt-[3px]     file:h-6 file:w-20 file:rounded-md file:border-0 file:bg-[#9A55FF]   file:text-xs file:text-white "
              />
            </div>
            <div className="flex-1">
              <p className="text-[#696969] text-xs font-medium mb-2">
                Target Amount
              </p>
              <input
                onChange={(e) => setTargetAmt(e.target.value)}
                value={targetAmt}
                placeholder="Target Amount"
                type="number"
                className=" outline-none h-8 w-full rounded border border-[#E0E0E0] pl-2  text-xs text-[#9D9D9D]  "
              />
            </div>
          </div>
          <div className="flex gap-8 mt-3">
            <div className="flex-1">
              <p className="text-[#696969] text-xs font-medium mb-2">
                Target Unit
              </p>
              <input
                onChange={(e) => setTargetUnit(e.target.value)}
                value={targetUnit}
                placeholder="Target Unit"
                type="number"
                className=" outline-none h-8 w-full rounded border border-[#E0E0E0] pl-2  text-xs text-[#9D9D9D]  "
              />
            </div>
            <div className="flex-1">
              <p className="text-[#696969] text-xs font-medium mb-2">
                Percentage
              </p>
              <input
                onChange={(e) => setPercentage(e.target.value)}
                value={percentage}
                placeholder="Percentage"
                type="number"
                className=" outline-none h-8 w-full rounded border border-[#E0E0E0] pl-2  text-xs text-[#9D9D9D] file:mr-4 file:mt-[3px]     file:h-6 file:w-20 file:rounded-md file:border-0 file:bg-[#9A55FF]   file:text-xs file:text-white "
              />
            </div>
          </div>
        </div>

        <button
          onClick={addLadder}
          className="outline-none block mx-auto mt-6 bg-[#9A55FF] text-white rounded text-xs font-semibold  py-2 px-4"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddKickerModal;
