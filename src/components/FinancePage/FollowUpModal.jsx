  import axios from "axios";
import IMAGES from "../../images";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FollowUpModal = ({ bookingID, onClose }) => {
  const [followUpData, setFollowUpData] = useState([]);
  const [type, setType] = useState();
  const [followUpDate, setFollowUpDate] = useState();
  const [followUpComment, setFollowUpComment] = useState();
 
  //console.log(bookingID);
  const getData = async () => {
    axios
      .patch(`https://aarnainfra.com/ladder/client/followup.php`, {
        booking_id: bookingID,
      })
      .then((res) => setFollowUpData(res?.data));
  };

  const updateData = async () => {
    console.log(bookingID, followUpComment, followUpDate, type);

    if (!followUpComment || !followUpDate || !type) {
      toast.error("Please fill all the value");
      return;
    }
    axios
      .post(`https://aarnainfra.com/ladder/client/followup.php`, {
        booking_id: bookingID,
        followup_date: followUpDate,
        followup_type: type,
        followup_comment: followUpComment,
      })
      .then((res) => {
        console.log(res);
        getData()
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="fixed  inset-0 z-[100] flex items-start justify-center  overflow-x-hidden pt-20 font-ubuntu outline-none backdrop-brightness-50 focus:outline-none">
      <div className="modal mx-auto max-h-[80vh] w-[560px] overflow-y-scroll rounded-xl bg-white pb-4   pl-6 pr-6 outline-none">
        <div className="sticky top-0 z-10 flex items-center justify-between py-5 bg-white h-fit">
          <span className="text-lg font-semibold text-[#9A55FF] underline decoration-[#9A55FF] decoration-solid underline-offset-[12px]">
            Follow Up
          </span>
          <img
            onClick={() => onClose((prev) => !prev)}
            className="cursor-pointer"
            src={IMAGES.CloseIcon}
            alt="close icon"
          />
        </div>
        <div>
          <p className="text-[#696969] font-medium text-sm mb-1">
            Enter Remark
          </p>
          <textarea
            onChange={(e) => setFollowUpComment(e.target.value)}
            placeholder="Remarks Here"
            className="outline-none text-sm resize-none w-full border border-[#CFCFCF] text-[#9A9A9A] rounded placeholder:text-xs placeholder:text-[#9A9A9A] pl-2 pt-2"
          ></textarea>

          <div className="flex gap-8 mt-3">
            <div className="flex-1">
              <p className="text-[#696969] font-medium text-sm mb-1">
                Follow Up Type
              </p>
              <select
                onChange={(e) => setType(e.target.value)}
                className="border border-[#CFCFCF] rounded w-full text-[#9A9A9A] text-xs pl-2 outline-none h-[30px]"
              >
                <option selected hidden>
                  Select Here
                </option>
                <option value="developer">Developer</option>
                <option value="client">Client</option>
              </select>
            </div>

            <div className="flex-1">
              <p className="text-[#696969] font-medium text-sm mb-1">
                Follow Up Date
              </p>
              <input
                onChange={(e) => setFollowUpDate(e.target.value)}
                type="date"
                className="border    border-[#CFCFCF] rounded w-full text-[#9A9A9A] text-xs pl-2 outline-none h-[30px]"
              />
            </div>

            
          </div>

          <button
            onClick={updateData}
            className="bg-[#9A55FF] text-white text-sm font-semibold h-[30px] rounded px-5 block mx-auto my-6"
          >
            Add
          </button>
          <hr className="mb-6 border border-[#9A55FF]" />
          <table className="w-full text-center ">
            <thead className="bg-[#E1CDFF] h-9 border border-[#E1CDFF] ">
              <tr>
                <th className=" text-sm text-[#3D3D3D] font-medium">Remarks</th>
                <th className=" text-sm text-[#3D3D3D] font-medium">
                  Follow Up Type
                </th>
                <th className=" text-sm text-[#3D3D3D] font-medium">
                  Follow Up Date
                </th>
              </tr>
            </thead>
            <tbody>
              {followUpData?.map((item, index) => (
                <tr className="h-9 border border-[#E1CDFF]">
                  <td className="border border-[#E1CDFF] text-[#555555] text-xs font-normal">
                    {item?.followup_comment}
                  </td>
                  <td className="border border-[#E1CDFF] text-[#555555] text-xs font-normal">
                    {item?.followup_type}
                  </td>
                  <td className="border border-[#E1CDFF] text-[#555555] text-xs font-normal">
                    {item?.followup_date}
                  </td>
                </tr>
              ))}
              {/* <tr className="h-9 border border-[#E1CDFF]">
                <td className="border border-[#E1CDFF] text-[#555555] text-xs font-normal">
                  Lorem Ipsum is simply dummy text..
                </td>
                <td className="border border-[#E1CDFF] text-[#555555] text-xs font-normal">
                  Developer
                </td>
                <td className="border border-[#E1CDFF] text-[#555555] text-xs font-normal">
                  23 Oct 2023 - 12:00 PM
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FollowUpModal;
