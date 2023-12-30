import axios from "axios";
import IMAGES from "../../images";
import SingleDatePicker from "../common/SingleDatePicker";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EIModal = ({ fetchEI, onClose, modalData }) => {
  const [isExtended, setIsExtended] = useState(
    modalData?.extended_date !== null
  );
  const [startDate, setStartDate] = useState(null);

  const [endDate, setEndDate] = useState(null);

  const [extendedDate, setExtendedDate] = useState(null);

  const [targetAmt, setTargetAmt] = useState(null);

  const [targetUnit, setTargetUnit] = useState(null);

  const [percentage, setPercentage] = useState(null);

  const [file, setFile] = useState(null);

  const [extendedFile, setExtendedFile] = useState();

  useEffect(() => {
    setStartDate({
      startDate: modalData?.start_date,
      endDate: modalData?.start_date,
    });
    setEndDate({
      startDate: modalData?.end_date,
      endDate: modalData?.end_date,
    });
    setExtendedDate({
      startDate: modalData?.extended_date,
      endDate: modalData?.extended_date,
    });

    setTargetAmt(modalData?.target_amount);

    setTargetUnit(modalData?.target_unit);

    setPercentage(modalData?.target_percent);
  }, []);

  const updateEI = async () => {
    if (!(targetAmt || targetUnit) && !percentage) {
      toast.error("Please fill all the value");
      return;
    }

    if (isExtended) {
      if (!extendedDate.startDate || !extendedFile) {
        toast.error("Please enter the extended date & file");
        return;
      }
    }

    if (
      isExtended &&
      new Date(extendedDate.startDate) < new Date(endDate.startDate)
    ) {
      toast.error("Extended date should not be less than end date");
      return;
    }

    axios
      .post("https://aarnainfra.com/ladder/updateEi.php", {
        start_date: startDate.startDate,
        end_date: endDate.startDate,
        target_amount: targetAmt,
        target_unit: targetUnit,
        target_percent: percentage,
        unique_id: modalData?.ei_id,
        extended_date: isExtended ?? extendedDate?.startDate,
      })
      .then((res) => {
        if (file) uploadFreshFile();
        if (extendedFile) uploadExtendedFile();
        toast.success("EI Updated Successfully");
        fetchEI();
        onClose((prev) => !prev);
      })
      .catch((err) => toast.error("Error while updating EI"));
  };

  const uploadFreshFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_type", "fresh");
    formData.append("unique_id", modalData?.ei_id);
    axios
      .post(`https://aarnainfra.com/ladder/upload.php`, formData)
      .then((res) => {
        // toast.success("Fresh File Uploaded Successfully");
      });
  };

  const uploadExtendedFile = async () => {
    const formData = new FormData();
    formData.append("file", extendedFile);
    formData.append("file_type", "extended");
    formData.append("unique_id", modalData?.ei_id);
    axios
      .post(`https://aarnainfra.com/ladder/upload.php`, formData)
      .then((res) => {
        // toast.success("Extended File Uploaded Successfully");
      });
  };

  return (
    <div className="fixed  inset-0 z-[100] flex items-start justify-center  overflow-x-hidden pt-20 font-ubuntu outline-none backdrop-brightness-50 focus:outline-none">
      <div className="modal mx-auto max-h-[80vh] w-[560px] overflow-y-scroll rounded-xl bg-white pb-4   pl-6 pr-6 outline-none">
        <div className="sticky top-0 z-10 flex items-center justify-between pt-5 pb-4 bg-white border-b-[#9A55FF] border-b-2 h-fit">
          <span className="text-lg font-semibold text-[#9A55FF] ">
            {modalData?.project_name}
          </span>
          <img
            onClick={() => onClose(false)}
            className="cursor-pointer"
            src={IMAGES.CloseIcon}
            alt="close icon"
          />
        </div>
        <div className="px-4 mt-5  pb-5">
          <div className="flex gap-8">
            <div className="flex-1">
              <p className="text-[#696969] text-xs font-medium mb-2">
                Start Date
              </p>
              <SingleDatePicker
                isDisabled={true}
                value={startDate}
                setValue={setStartDate}
              />
            </div>
            <div className="flex-1">
              <p className="text-[#696969] text-xs font-medium mb-2">
                End Date
              </p>
              <SingleDatePicker
                isDisabled={true}
                value={endDate}
                setValue={setEndDate}
              />
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

          {isExtended && (
            <div className="flex gap-8 mt-3">
              <div className="flex-1">
                <p className="text-[#696969] text-xs font-medium mb-2">
                  Extended Date
                </p>
                <SingleDatePicker
                  value={extendedDate}
                  setValue={setExtendedDate}
                />
              </div>

              <div className="flex-1">
                <p className="text-[#696969] text-xs font-medium mb-2">
                  Extended Creatives
                </p>
                <input
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files[0].size > 2000000) {
                      toast.error("File size should be less than 2mb");
                    } else {
                      setExtendedFile(e.target.files[0]);
                    }
                  }}
                  type="file"
                  className=" h-8 w-full rounded border border-[#E0E0E0] pl-2  text-xs text-[#9D9D9D] file:mr-4 file:mt-[3px]     file:h-6 file:w-20 file:rounded-md file:border-0 file:bg-[#9A55FF]   file:text-xs file:text-white "
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-6 justify-center mt-6">
            <label className="relative inline-flex items-center cursor-pointer ">
              <span className="mr-2 text-sm font-semibold text-[#9A55FF] leading-none">
                Extended
              </span>

              <input
                checked={isExtended}
                onChange={(e) => setIsExtended(e.target.checked)}
                type="checkbox"
                className="sr-only peer"
              />
              <div className="w-7 h-[14px] bg-gray-200 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[10px] after:w-[14px] after:transition-all  peer-checked:bg-[#9A55FF]"></div>
            </label>

            <a
              target="_blank"
              href={`https://aarnainfra.com/ladder/download.php?file_type=fresh&unique_id=${modalData?.ei_id}`}
              className="bg-[#9A55FF] text-white rounded text-xs font-semibold  py-2 px-4"
            >
              View Creative
            </a>
            {modalData?.extended_date !== null && (
              <a
                href={`https://aarnainfra.com/ladder/download.php?file_type=extended&unique_id=${modalData?.ei_id}`}
                className="bg-[#9A55FF] text-white rounded text-xs font-semibold  py-2 px-4"
              >
                View Ext. Creative
              </a>
            )}
          </div>
        </div>
        <button
          onClick={updateEI}
          className="block mx-auto mt-3 bg-[#9A55FF] text-white rounded text-xs font-semibold  py-2 px-4"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EIModal;
