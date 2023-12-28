import IMAGES from "../../images";

const InvoiceModal = ({ onClose }) => {
  return (
    <div className="fixed  inset-0 z-[100] flex items-start justify-center  overflow-x-hidden pt-20 font-ubuntu outline-none backdrop-brightness-50 focus:outline-none">
      <div className="modal mx-auto max-h-[80vh] w-[45vw] overflow-y-scroll rounded-xl bg-white pb-4   pl-6 pr-6 outline-none">
        <div className="border-b-2 border-b-[#5B5B5B] sticky top-0 z-10 flex items-center justify-between pb-3 pt-5 bg-white h-fit">
          <span className="text-lg font-semibold ">Client</span>
          <button className="bg-[#9A55FF] text-white text-xs flex h-6 w-32 rounded items-center justify-center gap-2 ml-auto mr-3">
            Add New Invoice
            <img src={IMAGES.AddIconWhite} alt="icon" />
          </button>
          <img
            onClick={() => onClose((prev) => !prev)}
            className="cursor-pointer"
            src={IMAGES.CloseIcon}
            alt="close icon"
          />
        </div>
        <div className="bg-[#F7F7F7] p-4">
          <div className="bg-white py-3 px-4 rounded-xl shadow-xl">
            <div className="flex items-center border-b border-b-[#F4F4F4] pb-3 justify-between">
              <img src={IMAGES.InvoiceYellow} alt="invoice yellow" />
              <div>
                <p className="text-xs">Invoice No:</p>
                <p className="text-[#172B4C] text-xs mt-1">01234</p>
              </div>

              <div>
                <p className="text-xs">Company Name:</p>
                <p className="text-[#172B4C] text-xs mt-1">
                  Raunak Maximum City
                </p>
              </div>

              <div>
                <p className="text-xs">Invoice Value:</p>
                <p className="text-[#172B4C] text-xs mt-1">50 Thousands</p>
              </div>
            </div>

            <div className="flex justify-between mt-5 ml-2">
              <div className="relative flex flex-col justify-center  flex-1 ">
                <div className="z-10 bg-[#9A55FF] w-5 h-5 rounded-full flex justify-center items-center">
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>
                <div
                  className={`absolute top-[10px]  w-full  bg-[#9A55FF] h-[2px]`}
                ></div>
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 1
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}
                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Raised
                </p>
              </div>
              <div className=" relative flex flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF]  w-5 h-5 rounded-full flex justify-center items-center`}
                >
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>

                {/* <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 2
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 2 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div> */}
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 2
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}

                <div
                  className={`absolute top-[10px]  w-full 
                       bg-[#EFE9FF]
                   h-[2px]`}
                ></div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Submit
                </p>
              </div>

              <div className=" relative flex flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF]  w-5 h-5 rounded-full flex justify-center items-center`}
                >
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>

                {/* <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 2
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 2 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div> */}
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 2
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}
                {/* 
                <div
                  className={`absolute top-[10px]  w-full 
                       bg-[#EFE9FF]
                   h-[2px]`}
                ></div> */}

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Expected Date
                </p>
              </div>

              {/* <div className=" relative flex  flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 3
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 3 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div>
                <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 3
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">SDR</p>
              </div> */}
              {/* <div className=" relative flex flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 4
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 4 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">BA3</p>
              </div> */}
            </div>
          </div>

          <div className="bg-white py-3 px-4 rounded-xl shadow-xl mt-3">
            <div className="flex items-center border-b border-b-[#F4F4F4] pb-3 justify-between">
              <img src={IMAGES.InvoiceYellow} alt="invoice yellow" />
              <div>
                <p className="text-xs">Invoice No:</p>
                <p className="text-[#172B4C] text-xs mt-1">01234</p>
              </div>

              <div>
                <p className="text-xs">Company Name:</p>
                <p className="text-[#172B4C] text-xs mt-1">
                  Raunak Maximum City
                </p>
              </div>

              <div>
                <p className="text-xs">Invoice Value:</p>
                <p className="text-[#172B4C] text-xs mt-1">50 Thousands</p>
              </div>
            </div>

            <div className="flex justify-between mt-5 ml-2">
              <div className="relative flex flex-col justify-center  flex-1 ">
                <div className="z-10 bg-[#9A55FF] w-5 h-5 rounded-full flex justify-center items-center">
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>
                <div
                  className={`absolute top-[10px]  w-full  bg-[#9A55FF] h-[2px]`}
                ></div>
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 1
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}
                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Raised
                </p>
              </div>
              <div className=" relative flex flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF]  w-5 h-5 rounded-full flex justify-center items-center`}
                >
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>

                {/* <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 2
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 2 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div> */}
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 2
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}

                <div
                  className={`absolute top-[10px]  w-full 
                       bg-[#EFE9FF]
                   h-[2px]`}
                ></div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Submit
                </p>
              </div>

              <div className=" relative flex flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF]  w-5 h-5 rounded-full flex justify-center items-center`}
                >
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>

                {/* <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 2
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 2 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div> */}
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 2
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}
                {/* 
                <div
                  className={`absolute top-[10px]  w-full 
                       bg-[#EFE9FF]
                   h-[2px]`}
                ></div> */}

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Expected Date
                </p>
              </div>

              {/* <div className=" relative flex  flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 3
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 3 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div>
                <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 3
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">SDR</p>
              </div> */}
              {/* <div className=" relative flex flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 4
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 4 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">BA3</p>
              </div> */}
            </div>
          </div>

          <div className="bg-white py-3 px-4 rounded-xl shadow-xl mt-3">
            <div className="flex items-center border-b border-b-[#F4F4F4] pb-3 justify-between">
              <img src={IMAGES.InvoiceYellow} alt="invoice yellow" />
              <div>
                <p className="text-xs">Invoice No:</p>
                <p className="text-[#172B4C] text-xs mt-1">01234</p>
              </div>

              <div>
                <p className="text-xs">Company Name:</p>
                <p className="text-[#172B4C] text-xs mt-1">
                  Raunak Maximum City
                </p>
              </div>

              <div>
                <p className="text-xs">Invoice Value:</p>
                <p className="text-[#172B4C] text-xs mt-1">50 Thousands</p>
              </div>
            </div>

            <div className="flex justify-between mt-5 ml-2">
              <div className="relative flex flex-col justify-center  flex-1 ">
                <div className="z-10 bg-[#9A55FF] w-5 h-5 rounded-full flex justify-center items-center">
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>
                <div
                  className={`absolute top-[10px]  w-full  bg-[#9A55FF] h-[2px]`}
                ></div>
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 1
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}
                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Raised
                </p>
              </div>
              <div className=" relative flex flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF]  w-5 h-5 rounded-full flex justify-center items-center`}
                >
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>

                {/* <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 2
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 2 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div> */}
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 2
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}

                <div
                  className={`absolute top-[10px]  w-full 
                       bg-[#EFE9FF]
                   h-[2px]`}
                ></div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Submit
                </p>
              </div>

              <div className=" relative flex flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF]  w-5 h-5 rounded-full flex justify-center items-center`}
                >
                  <img src={IMAGES.TickWhite} alt="tick white " />
                </div>

                {/* <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 2
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 2 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div> */}
                {/* <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 2
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div> */}
                {/* 
                <div
                  className={`absolute top-[10px]  w-full 
                       bg-[#EFE9FF]
                   h-[2px]`}
                ></div> */}

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                  Expected Date
                </p>
              </div>

              {/* <div className=" relative flex  flex-1 flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 3
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 3 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div>
                <div
                  className={`absolute top-[10px]  w-full ${
                    detailsData?.ob_status_details?.status_id > 3
                      ? "bg-[#9A55FF]"
                      : "bg-[#EFE9FF]"
                  }  h-[2px]`}
                ></div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">SDR</p>
              </div> */}
              {/* <div className=" relative flex flex-col justify-center ">
                <div
                  className={`z-10 bg-[#9A55FF] ${
                    detailsData?.ob_status_details?.status_id >= 4
                      ? "w-5 h-5"
                      : "w-4 h-4"
                  } rounded-full flex justify-center items-center`}
                >
                  {detailsData?.ob_status_details?.status_id >= 4 && (
                    <img src={IMAGES.TickWhite} alt="tick white " />
                  )}
                </div>

                <p className="mt-2 text-[#9A55FF] text-xs font-medium">BA3</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
