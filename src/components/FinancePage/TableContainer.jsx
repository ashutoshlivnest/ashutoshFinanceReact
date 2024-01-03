import axios from "axios";
import React, { useEffect, useState , useContext} from "react";
import Loader from "../common/Loader";
import FollowUpModal from "./FollowUpModal";
import TableSeeMore from "./TableSeeMore";
import DetailsModal from "./DetailsModal";
import InvoiceModal from "./InvoiceModal";
import { useFilterContext } from '../../context/FilterContext';


const TableContainer = ({ isSidebarVisible, tableFilter }) => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isFollowUpModalVisible, setIsFollowUpModalVisible] = useState(false);

  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

  const [isInvoiceModalVisible, setIsInvoiceModalVisible] = useState(false);

  const [detailsData, setDetailsData] = useState({});

  const [selectedBookingID, setSelectedBookingID] = useState();

  const [selectedClientId, setSelectedClientID] = useState();

  const { filterData } = useFilterContext();


  useEffect(() => {
    if (filterData) {
      console.log(filterData);
      setTableData(filterData);
    }
  }, [filterData]);
  



  const fetchTableData = async () => {
    axios
      .get(` https://aarnainfra.com/ladder/client/fetch.php`)
      .then((res) => {
        setTableData(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(tableData);
  useEffect(() => {
    fetchTableData();
  }, []);

  const obStatusStyles = {
    sdr: "text-[#04B900] font-medium text-sm",
    ba_2: "text-[#F5BD1E] font-medium text-sm",
  };


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

  const obStatusMapping = {
    1: "BA1",
    2: "BA2",
    3: "SDR",
    4: "BA3",
  };

  const convertAmount = (number) => {
    if (isNaN(number)) {
      return;
    }

    if (number < 100000) {
      return number.toString();
    }

    if (number >= 100000 && number < 10000000) {
      const lakhs = Math.round(number / 100000);
      return `~ ${lakhs} Lacs`;
    }

    if (number >= 10000000) {
      const crores = Math.round(number / 10000000);
      return `~ ${crores} Crore`;
    }
  };

  if (loading) return <Loader />;
  console.log(tableData);
  return (
    <>
      <div
        id="table-container"
        className={`border-t border-t-[#F6F6F6] mx-1  ${
          isSidebarVisible ? " max-w-[78.7vw]" : "max-w-[91vw]"
        } max-h-[75vh] overflow-y-scroll overflow-x-scroll`}
      >
        <table className="w-full">
          <thead className="h-14 bg-[#F7F8FF] ">
            <tr>
              <th className="text-[#9A55FF] font-medium text-base text-start pl-3 min-w-[8vw] ">
                Name
              </th>
              <th className="text-[#9A55FF] font-medium text-base min-w-[13vw] ">
                Project
              </th>
              <th className="text-[#9A55FF] font-medium text-base min-w-[8vw] ">
                Unit <br /> Details
              </th>

              <th className="text-[#9A55FF] font-medium text-base  min-w-[8vw] ">
                Brokerage %
              </th>
              <th className="text-[#9A55FF] font-medium text-base  min-w-[7.8vw] ">
                Ladder %
              </th>
              <th className="text-[#9A55FF] font-medium text-base  min-w-[9vw] ">
                Agreement <br /> Value
              </th>
              <th className="text-[#9A55FF] font-medium text-base  min-w-[7vw] ">
                OB <br /> Status
              </th>
              <th className="text-[#9A55FF] font-medium text-base min-w-[9vw]  ">
                Closure <br /> Date
              </th>
              {tableFilter?.invoice_status && (
                <th className="text-[#9A55FF] font-medium text-base  min-w-[7vw] ">
                  Invoice <br /> Status
                </th>
              )}
              {tableFilter?.number && (
                <th className="text-[#9A55FF] font-medium text-base  min-w-[7vw] ">
                  Contact Number
                </th>
              )}
              {tableFilter?.company_name && (
                <th className="text-[#9A55FF] font-medium text-base  min-w-[7vw] ">
                  Company Name
                </th>
              )}
              <th className="text-[#9A55FF] font-bold text-left text-xl min-w-[2vw]  ">
                ⁝
              </th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((item) => (
              <tr
                className={`h-14 ${
                  item?.invoice_details?.post_raise_id == 4
                    ? "bg-[#ECECEC]"
                    : ""
                }`}
              >
                <td className="pl-3   font-medium text-base text-[#595959]">
                  {item?.generic_details?.name.slice(0, 8)}
                  {item?.generic_details?.name.length > 8 && "..."}
                </td>
                <td className="text-center   text-[#595959] text-sm font-medium">
                  {item?.generic_details?.project_name}
                </td>
                <td className="text-center   text-[#8C8989] text-sm ">
                  {
                    configurationIdMapping[
                      item?.generic_details?.configuration_id
                    ]
                  }
                </td>
                <td className="text-center text-[#8C8989] text-sm ">
                  {item?.fetched_brokerage_percent}
                </td>
                <td className="text-center text-[#8C8989] text-sm ">
                  {item?.fetched_brokerage_percent ===
                  item?.fetched_ladder_percent
                    ? 0
                    : item?.fetched_ladder_percent}
                </td>
                <td className="text-center text-[#8C8989] text-sm ">
                  {convertAmount(+item?.generic_details?.agreement_value)}
                </td>
                <td className={`  text-center text-sm `}>
                  {obStatusMapping[item?.ob_status_details?.status_id]}
                </td>
                <td className="text-center text-sm  text-[#8C8989]">
                  {new Date(
                    item?.generic_details?.closure_date
                  ).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                {tableFilter?.invoice_status && (
                  <td className="text-center text-[#8C8989] text-sm ">
                    Invoice Status
                  </td>
                )}
                {tableFilter?.number && (
                  <td className="text-center text-[#8C8989] text-sm ">
                    {item?.generic_details?.number}
                  </td>
                )}
                {tableFilter?.company_name && (
                  <td className="text-center text-[#8C8989] text-sm ">Dosti</td>
                )}
                <td>
                  <TableSeeMore
                    setSelectedBookingID={setSelectedBookingID}
                    setSelectedClientID = {setSelectedClientID}
                    data={item}
                    setDetailsData={setDetailsData}
                    followUp={setIsFollowUpModalVisible}
                    details={setIsDetailsModalVisible}
                    invoice={setIsInvoiceModalVisible}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      

      {isFollowUpModalVisible && (
        <FollowUpModal
          bookingID={selectedBookingID}
          onClose={setIsFollowUpModalVisible}
        />
      )}
      {isDetailsModalVisible && (
        <DetailsModal
          detailsData={detailsData}
          onClose={setIsDetailsModalVisible}
        />
      )}
      {isInvoiceModalVisible && (
        <InvoiceModal
        clientID={selectedClientId} 
        onClose={setIsInvoiceModalVisible} />
      )}
    </>
  );
};

export default TableContainer;
