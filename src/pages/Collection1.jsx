import React from "react";
import Header from "../components/common/Header";
import { useState , useEffect} from "react";
import Sidebar from "../components/common/Sidebar";
import IMAGES from "../images";
import axios from "axios";
import FilterContainer from "../components/AgingReportPage/FilterContainer";




const Collection1 = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [data, setData] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);



  const getData = async () => {
    axios
      .get("https://lnfinance.aarnainfra.com/report/collection1")
      .then((res) => {
        setData(res?.data);
        console.log(res?.data);
      });
  };

  /* if(data !== null){
    console.log(data.total_booking);
  } */

  function formatAmountInCrore(amount) {
    if (amount === undefined || isNaN(amount)) {
      return "N/A"; 
    }
  
    const croreValue = amount / 10000000; 
    const formattedValue = croreValue.toFixed(2); 
    return `${formattedValue}Cr`;
  }

  const totalAgreementValue = data?.data?.[0]?.total_agreement_value; 

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <main className="flex gap-5">
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
        <section className="flex-1 mr-6 relative mt-4">
          <div className="mb-5 flex gap-3">
            <img
              src={IMAGES.FilterIcon}
              alt="filter icon"
              className="cursor-pointer"
              onClick={(e) => {
                console.log(1);
                e.stopPropagation();
                setIsFiltersVisible(!isFiltersVisible);
              }}
            />
            {isFiltersVisible && (
                <FilterContainer
                  isFiltersVisible={isFiltersVisible}
                  setIsFiltersVisible={setIsFiltersVisible}
                />
              )}
            <div className="bg-white pl-6 py-2 flex-1 flex items-center gap-4">
              <p className="text-[#5F6C72] text-sm font-bold">Collection 1 Report</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#FFA800] text-white rounded py-2 text-center">
                Sales
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
             {formatAmountInCrore(parseFloat(totalAgreementValue))}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Total Sales</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#8950FC] text-white rounded py-2 text-center">
                Sales Unit
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                {data?.data?.[0]?.total_booking} Units
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Total Sold Units</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#F64E60] text-white rounded py-2 text-center">
                Avg. Brokerage
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
              {Math.round(data?.data?.[0]?.average_brokerage)} %
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Calculated Average Brokerage</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#FF94D5] text-white rounded py-2 text-center">
                Gross Revenue
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
              {formatAmountInCrore(parseFloat(data?.data?.[0]?.total_gross_amount))}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Overall Gross Amount</p>
            </div>
          </div>

          <div className="flex gap-5 my-5">
            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#9C72FD] text-white rounded py-2 text-center">
                Net Revenue
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
              {formatAmountInCrore(parseFloat(data?.data?.[0]?.net_revenue))}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Total Net Revenue</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#1BC5BD] text-white rounded py-2 text-center">
                Invoice Raised
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
              {data?.data?.[0]?.total_invoice_raised}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Total Invoices Raised</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#FFA800] text-white rounded py-2 text-center">
                Invoice Not Raised
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
              {data?.data?.[0]?.total_invoice_pending}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Pending Invoices</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#8950FC] text-white rounded py-2 text-center">
                Outstanding Invoice
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
              {data?.data?.[0]?.total_outstanding}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Total Outstanding Invoices</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#F64E60] text-white rounded py-2 text-center">
                Invoice Received
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                 {data?.data?.[0]?.total_invoice_received}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Received Invoices</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#FF94D5] text-white rounded py-2 text-center">
                Cancellation
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
              {data?.data?.[0]?.total_can}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Total Cancelled</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#9C72FD] text-white rounded py-2 text-center">
                Cancellation Unit
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
               NA
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Total Units Cancelled</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#1BC5BD] text-white rounded py-2 text-center">
                Total Cashback
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                {data?.data?.[0]?.total_cashback_amount}
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Total Cashback</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Collection1;
