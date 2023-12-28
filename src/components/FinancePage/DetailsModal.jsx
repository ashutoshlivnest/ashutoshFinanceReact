import { useState } from "react";
import IMAGES from "../../images";
import axios from "axios";

const DetailsModal = ({ detailsData, onClose }) => {
  console.log(detailsData);

  const configurationIdMapping = {
    1: "1 BHK",
    2: "1.5 BHK",
    3: "2 BHK",
    4: "2.5 BHK",
    5: "3 BHK",
    6: "3.5 BHK",
    7: "4 BHK",
    8: "4.5 BHK",
    9: "5 BHK",
    10: "5.5 BHK",
    11: "MORE THAN 6",
    12: "COMMERCIAL",
    13: "PLOT",
    14: "VILLA",
  };

  const sourceByAndCloseBy = {
    1: "Kapil",
    2: "Rishikesh",
    3: "Bablu",
    4: "Vishal",
    5: "Akshay",
    6: "Sanjay",
    7: "Bilal",
  };

  const [accordion, setAccordion] = useState({
    unitDetails: false,
    costDetails: false,
    stage: false,
    invoice: false,
  });

  const [wing, setWing] = useState(detailsData?.generic_details?.wing);
  const [flatNo, setFlatNo] = useState(detailsData?.generic_details?.flat_no);
  const [typology, setTypology] = useState(
    configurationIdMapping[detailsData?.generic_details?.configuration_id]
  );
  const [carpetArea, setCarpetArea] = useState(
    detailsData?.generic_details?.carpet_area
  );
  const [agreementValue, setAgreementValue] = useState(
    detailsData?.generic_details?.agreement_value
  );

  const [expectedDate, setExpectedDate] = useState(
    detailsData?.ob_status_details?.expected
  );

  const [completedDate, setCompletedDate] = useState(
    detailsData?.ob_status_details?.completed
  );

  const invoiceValue =
    agreementValue * (detailsData?.fetched_brokerage_percent / 100);
  const GSTAmount = invoiceValue * 0.18;
  const totalInvoiceValue = invoiceValue + GSTAmount;

  const TDSAmount = invoiceValue * 0.05;
  const realizeAmount =
    totalInvoiceValue -
    TDSAmount -
    (detailsData?.generic_details?.cashback_amount || 0);
  console.log(
    invoiceValue,
    agreementValue,
    GSTAmount,
    totalInvoiceValue,
    TDSAmount,
    realizeAmount
  );

  const handleUpdate = async () => {
    axios
      .patch(`https://aarnainfra.com/ladder/client/main.php`, {
        client_id: detailsData?.generic_details?.client_id,
        wing: wing,
        flat_no: flatNo,
        typology: 2,
        carpet_area: carpetArea,
        closed_by: detailsData?.generic_details?.closed_by,
        agreement_value: agreementValue,
      })
      .then((res) => console.log(res));
  };

  const updateOBStatus = async () => {
    axios
      .patch(`https://aarnainfra.com/ladder/client/ob.php`, {
        booking_id: detailsData?.generic_details?.booking_id,
        status_id: detailsData?.ob_status_details?.status_id,
        expected_date: expectedDate,
        completed_date: completedDate,
      })
      .then((res) => console.log(res));
  };

  const updateInvoiceStatus = async () => {
    axios
      .patch(`https://aarnainfra.com/ladder/client/invoice.php`, {
        submit_date: 2023 - 10 - 30,
        received_date: 2023 - 12 - 30,
        cancel_date: 2023 - 10 - 30,
        raise_status_id: detailsData?.invoice_details?.raise_status_id,
        post_status_id: detailsData?.invoice_details?.post_raise_id,
        client_id: detailsData?.generic_details?.client_id,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="fixed  inset-0 z-[100] flex items-start justify-center  overflow-x-hidden pt-20 font-ubuntu outline-none backdrop-brightness-50 focus:outline-none">
      <div className="modal mx-auto max-h-[80vh] w-[560px] overflow-y-scroll rounded-xl bg-white pb-4   pl-6 pr-6 outline-none">
        <div className="sticky top-0 z-50 flex items-center justify-between py-5 bg-white h-fit">
          <span className="text-lg font-semibold text-[#9A55FF] underline decoration-[#9A55FF] decoration-solid underline-offset-[12px]">
            Details
          </span>
          <img
            onClick={() => onClose((prev) => !prev)}
            className="cursor-pointer"
            src={IMAGES.CloseIcon}
            alt="close icon"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
            <input
              value={detailsData?.location_name}
              type="text"
              disabled
              className="rounded pt-1 outline-none text-sm text-[#838383] pl-3 h-full w-full"
            />
            <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
              Location
            </span>
          </div>
          <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
            <input
              value={detailsData?.location_name}
              type="text"
              disabled
              className="rounded pt-1 outline-none text-sm text-[#838383] pl-3 h-full w-full"
            />
            <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
              Locality
            </span>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
            <input
              value={detailsData?.generic_details?.project_name}
              type="text"
              disabled
              className="rounded pt-1 outline-none text-sm text-[#838383] pl-3 h-full w-full"
            />
            <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
              Project
            </span>
          </div>
          <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
            <input
              value={detailsData?.developer_name}
              type="text"
              disabled
              className="rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
            />
            <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
              Developer
            </span>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
            <input
              type="text"
              value={
                sourceByAndCloseBy[detailsData?.generic_details?.closed_by]
              }
              disabled
              className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
            />
            <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
              Source By
            </span>
          </div>
          <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
            <input
              type="text"
              disabled
              value={
                sourceByAndCloseBy[detailsData?.generic_details?.closed_by]
              }
              className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
            />
            <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
              Closed By
            </span>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
            <input
              type="text"
              disabled
              value={"Facebook"}
              className="rounded pt-1 outline-none text-sm text-[#838383] pl-3 h-full w-full"
            />
            <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
              Lead Source
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-6 relative border border-[#E0E0E0] rounded h-9 ">
            <label htmlFor="csop_retail" className="flex items-center gap-2">
              <span className="text-[#696969] text-sm">Retail</span>
              <input
                checked={detailsData?.generic_details?.csop === "retail"}
                type="radio"
                className="w-[14px] h-[14px]"
                name="csop"
                id="csop_retail"
              />
            </label>
            <label htmlFor="csop_mandate" className="flex items-center gap-2">
              <span className="text-[#696969] text-sm">Mandate</span>
              <input
                checked={detailsData?.generic_details?.csop === "mandate"}
                type="radio"
                className="w-[14px] h-[14px]"
                name="csop"
                id="csop_mandate"
              />
            </label>
            <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
              CSOP
            </span>
          </div>
        </div>

        {/* Unit Details */}
        <div>
          <div
            onClick={() =>
              setAccordion((prev) => ({
                ...prev,
                unitDetails: !prev.unitDetails,
              }))
            }
            className="cursor-pointer flex items-center mt-4"
          >
            <img src={IMAGES.InfoIcon} alt="info icon" />
            <p className="text-[#9A55FF] font-semibold ml-3 ">Unit Details</p>
            <img
              src={IMAGES.DownArrow}
              alt="down arrow"
              className={`ml-auto ${
                accordion?.unitDetails ? "rotate-180" : ""
              }`}
            />
          </div>

          {accordion?.unitDetails && (
            <>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    onChange={(e) => setWing(e.target.value)}
                    value={wing}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Wing
                  </span>
                </div>

                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    onChange={(e) => setFlatNo(e.target.value)}
                    value={flatNo}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Flat
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    onChange={(e) => setTypology(e.target.value)}
                    value={typology}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Typology
                  </span>
                </div>
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    onChange={(e) => setCarpetArea(e.target.value)}
                    value={carpetArea}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Carpet area
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Cost Details */}
        <div>
          <div
            onClick={() =>
              setAccordion((prev) => ({
                ...prev,
                costDetails: !prev.costDetails,
              }))
            }
            className="flex cursor-pointer items-center mt-4"
          >
            <img src={IMAGES.InfoIcon} alt="info icon" />
            <p className="text-[#9A55FF] font-semibold ml-3 ">Cost Details</p>
            <img
              src={IMAGES.DownArrow}
              alt="down arrow"
              className={`ml-auto ${
                accordion?.costDetails ? "rotate-180" : ""
              } `}
            />
          </div>
          {accordion?.costDetails && (
            <>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    onChange={(e) => setAgreementValue(e.target.value)}
                    value={agreementValue}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    AV
                  </span>
                </div>
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={detailsData?.fetched_brokerage_percent}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Brokerage
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={detailsData?.fetched_ladder_percent}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Ladder
                  </span>
                </div>
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={detailsData?.fetched_kicker_percent ?? 0}
                    placeholder="Enter Here.."
                    type="text"
                    className="rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Kicker
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={detailsData?.fetched_ei_percent ?? 0}
                    placeholder="Enter Here.."
                    type="text"
                    className="rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    EI
                  </span>
                </div>
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={"18%"}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    GST
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={"5%"}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    TDS
                  </span>
                </div>
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={GSTAmount}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    GST Amount
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={TDSAmount}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    TDS Amount
                  </span>
                </div>
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={detailsData?.generic_details?.cashback_amount}
                    placeholder="Enter Here.."
                    type="text"
                    className=" pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Cashback
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={invoiceValue}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Invoice Amount
                  </span>
                </div>
                <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                  <input
                    value={realizeAmount}
                    placeholder="Enter Here.."
                    type="text"
                    className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                  />
                  <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                    Realized Amount
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Stages */}
          <div>
            <div
              onClick={() =>
                setAccordion((prev) => ({
                  ...prev,
                  stage: !prev.stage,
                }))
              }
              className="flex cursor-pointer items-center mt-4"
            >
              <img src={IMAGES.InfoIcon} alt="info icon" />
              <p className="text-[#9A55FF] font-semibold ml-3 ">Stage</p>
              <img
                src={IMAGES.DownArrow}
                alt="down arrow"
                className={`ml-auto ${accordion?.stage ? "rotate-180" : ""} `}
              />
            </div>

            {accordion?.stage && (
              <>
                <div className="flex justify-between mt-5 ml-2">
                  <div className="relative flex flex-col justify-center  flex-1 ">
                    <div className="z-10 bg-[#9A55FF] w-5 h-5 rounded-full flex justify-center items-center">
                      <img src={IMAGES.TickWhite} alt="tick white " />
                    </div>
                    <div
                      className={`absolute top-[10px]  w-full ${
                        detailsData?.ob_status_details?.status_id > 1
                          ? "bg-[#9A55FF]"
                          : "bg-[#EFE9FF]"
                      }  h-[2px]`}
                    ></div>
                    <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                      BA1
                    </p>
                  </div>
                  <div className=" relative flex flex-1 flex-col justify-center ">
                    <div
                      className={`z-10 bg-[#9A55FF] ${
                        detailsData?.ob_status_details?.status_id >= 2
                          ? "w-5 h-5"
                          : "w-4 h-4"
                      } rounded-full flex justify-center items-center`}
                    >
                      {detailsData?.ob_status_details?.status_id >= 2 && (
                        <img src={IMAGES.TickWhite} alt="tick white " />
                      )}
                    </div>
                    <div
                      className={`absolute top-[10px]  w-full ${
                        detailsData?.ob_status_details?.status_id > 2
                          ? "bg-[#9A55FF]"
                          : "bg-[#EFE9FF]"
                      }  h-[2px]`}
                    ></div>

                    <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                      BA2
                    </p>
                  </div>
                  <div className=" relative flex  flex-1 flex-col justify-center ">
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

                    <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                      SDR
                    </p>
                  </div>
                  <div className=" relative flex flex-col justify-center ">
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

                    <p className="mt-2 text-[#9A55FF] text-xs font-medium">
                      BA3
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                    <input
                      value={totalInvoiceValue}
                      placeholder="Enter Here.."
                      type="text"
                      className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                    />
                    <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                      Amount Paid
                    </span>
                  </div>
                  <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                    <input
                      onChange={(e) => setExpectedDate(e.target.value)}
                      value={expectedDate}
                      type="date"
                      placeholder="Enter Here.."
                      className=" pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                    />
                    <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                      Expected Date
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <div className="w-[48.4%] relative border border-[#E0E0E0] rounded h-9 ">
                    <input
                      onChange={(e) => setCompletedDate(e.target.value)}
                      value={completedDate}
                      type="date"
                      placeholder="Enter Here.."
                      className=" pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                    />
                    <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                      Completed Date
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Invoice */}
          {detailsData?.ob_status_details?.status_id >= 2 && (
            <div>
              <div
                onClick={() =>
                  setAccordion((prev) => ({
                    ...prev,
                    invoice: !prev.invoice,
                  }))
                }
                className="flex cursor-pointer items-center mt-4"
              >
                <img src={IMAGES.InfoIcon} alt="info icon" />
                <p className="text-[#9A55FF] font-semibold ml-3 ">Invoice</p>
                <img
                  src={IMAGES.DownArrow}
                  alt="down arrow"
                  className={`ml-auto ${
                    accordion?.invoice ? "rotate-180" : ""
                  } `}
                />
              </div>

              {accordion?.invoice && (
                <>
                  <div className="flex gap-4 mt-6">
                    <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                      <input
                        // value={invoiceValue}
                        placeholder="Enter Here.."
                        type="text"
                        className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                      />
                      <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                        Invoice Raise Status
                      </span>
                    </div>
                    <div className="flex-1 relative border border-[#E0E0E0] rounded h-9 ">
                      <input
                        // value={realizeAmount}
                        placeholder="Enter Here.."
                        type="text"
                        className="pt-1 rounded outline-none text-sm text-[#838383] pl-3 h-full w-full"
                      />
                      <span className="absolute -top-3 z-10 left-4 bg-white px-3 text-[#696969] text-sm">
                        Raised Date
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          <button
            onClick={updateOBStatus}
            className="bg-[#9A55FF] text-white text-sm font-semibold h-[30px] rounded px-5 block mx-auto mt-3"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
