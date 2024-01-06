import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import IMAGES from "../images";
import Loader from "../components/common/Loader";
import FilterContainer from "../components/AgingReportPage/FilterContainer";

export const TopAccountReached = (graphData) => {
  console.log();
  const data = {
    labels: [graphData?.graphData?.descending?.[0]?.company_name, 
             graphData?.graphData?.descending?.[1]?.company_name, 
             graphData?.graphData?.descending?.[2]?.company_name, 
             graphData?.graphData?.descending?.[3]?.company_name, 
             graphData?.graphData?.descending?.[4]?.company_name],

    datasets: [
      {
        data: [graphData?.graphData?.descending?.[0]?.avg_receive_days, 
               graphData?.graphData?.descending?.[1]?.avg_receive_days, 
               graphData?.graphData?.descending?.[2]?.avg_receive_days, 
               graphData?.graphData?.descending?.[3]?.avg_receive_days, 
               graphData?.graphData?.descending?.[4]?.avg_receive_days],
        backgroundColor: [
          "#AAB2F8",
          "#AAB2F8",
          "#AAB2F8",
          "#AAB2F8",
          "#AAB2F8",
        ],
        barThickness: 25,
        borderRadius: 2,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        reverse: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export const TopAccountDelayed = (graphData) => {
  const data = {
    labels: [
        graphData?.graphData?.ascending?.[0]?.company_name, 
        graphData?.graphData?.ascending?.[1]?.company_name, 
        graphData?.graphData?.ascending?.[2]?.company_name, 
        graphData?.graphData?.ascending?.[3]?.company_name, 
        graphData?.graphData?.ascending?.[4]?.company_name
    ],
    datasets: [
      {
        data: [graphData?.graphData?.ascending?.[0]?.avg_receive_days, 
        graphData?.graphData?.ascending?.[1]?.avg_receive_days, 
        graphData?.graphData?.ascending?.[2]?.avg_receive_days, 
        graphData?.graphData?.ascending?.[3]?.avg_receive_days, 
        graphData?.graphData?.ascending?.[4]?.avg_receive_days],
        backgroundColor: [
          "#F8AAAA",
          "#F8AAAA",
          "#F8AAAA",
          "#F8AAAA",
          "#F8AAAA",
        ],
        barThickness: 25,
        borderRadius: 2,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const AgingReportPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [IsActionBarVisible, setIsActionBarVisible] = useState(true);
  const [data, setData] = useState(null);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [dataGraph, setGraphData] = useState([]);
  // const [data, setData] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (dataGraph.length > 0) {
    console.log(dataGraph);
  }
  const getGraphData = async () => {
    try {
      const res = await axios.get(
        "https://aarnainfra.com/ladder/client/expense/agingGraphApi.php"
      );
      setGraphData(res?.data || []);
      console.log(res?.data);
    } catch (error) {
      console.error("Error fetching graph data:", error);
    }
  };

  useEffect(() => {
    getGraphData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      axios
        .get(
          `https://aarnainfra.com/ladder/client/expense/aging.php?page=${currentPage}`
        )
        .then((res) => {
          if (currentPage === 1) {
            setTotalCount(res?.data[0]?.count);
          }
          setData(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    };

    fetchData();
  }, [currentPage]);

  // console.log(data);

  return (
    <>
      <Header />
      <main className="flex gap-5">
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
        <section className="flex-1 mr-6 relative mt-4">
          <img
            onClick={() => setIsActionBarVisible(!IsActionBarVisible)}
            src={IMAGES.YellowToggleIcon}
            alt="toggle icon"
            className={`${
              IsActionBarVisible ? "rotate-180" : ""
            } absolute -right-6 top-10 cursor-pointer`}
          />
          {IsActionBarVisible && (
            <div className="bg-white py-3 pl-4 border-b border-b-black relative">
              <img
                className="cursor-pointer"
                onClick={(e) => {
                  console.log(1);
                  e.stopPropagation();
                  setIsFiltersVisible(!isFiltersVisible);
                }}
                src={IMAGES.FilterIcon}
                alt="filter icon"
              />
              {isFiltersVisible && (
                <FilterContainer
                  isFiltersVisible={isFiltersVisible}
                  setIsFiltersVisible={setIsFiltersVisible}
                />
              )}
            </div>
          )}
          <div className="bg-white">
            {loading ? (
              <Loader />
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="text-[#212529] text-sm border-b border-b-[#212529] h-16  ">
                    <th className=" font-medium">Invoice No.</th>
                    <th className=" font-medium">Company</th>
                    <th className="font-medium">Project</th>
                    <th className="font-medium">
                      Invoice <br /> Raise Date
                    </th>
                    <th className="font-medium">
                      Expected
                      <br /> Received Date
                    </th>
                    <th className="font-medium">
                      Invoice
                      <br /> Aging days
                    </th>
                    <th className="font-medium">Received Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => {
                    if (currentPage === 1 && index === 0) {
                      console.log("1");
                    } else {
                      return (
                        <tr className="h-14 border-b border-b-[#DEE2E6]">
                          <td className="text-[#2F579A] font-medium text-sm text-center">
                            {item?.invoice_number}
                          </td>
                          <td className="text-[#595959] text-sm font-medium text-center">
                            {item?.company_name}
                          </td>
                          <td className="text-[#595959] text-sm font-medium text-center">
                            {item?.project_name}
                          </td>
                          <td className="text-[#595959] text-sm font-medium text-center">
                            {new Date(item?.submit_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "2-digit",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </td>
                          <td className="text-[#595959] text-sm font-medium text-center">
                            {new Date(item?.expected_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "2-digit",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                            <br />
                            <span
                              className={`${
                                item?.days_interval > item?.commited_days
                                  ? "text-[#E60000]"
                                  : "text-[#38B000]"
                              }  text-xs font-medium`}
                            >
                              {item?.days_interval > item?.commited_days
                                ? `Delayed by ` +
                                  `${item?.days_interval}` +
                                  ` days`
                                : item?.days_interval < item?.commited_days
                                ? `Received early by ` +
                                  `${item?.days_interval}` +
                                  ` days`
                                : "Ontime"}
                            </span>
                          </td>
                          <td className="text-[#595959] text-sm font-medium text-center">
                            {item?.days_interval} Days
                          </td>
                          <td className="text-[#595959] text-sm font-medium text-center">
                            {item?.invoice_receive_date
                              ? item?.invoice_receive_date
                              : "-"}
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            )}

            <ul className="flex gap-1 py-4 justify-end mr-4">
              <li
                onClick={() => paginate(currentPage - 1)}
                className={`border border-[#E0E0E0] w-9 h-9 text-center pt-1 ${
                  currentPage === 1
                    ? "bg-white text-[#686868] cursor-not-allowed"
                    : "bg-white text-[#686868] cursor-pointer"
                }`}
              >
                <a href="#" className="pt-1">
                  &lt;
                </a>
              </li>

              {pageNumbers.map((number) => {
                if (
                  number === 1 ||
                  number === currentPage - 1 ||
                  number === currentPage ||
                  number === currentPage + 1 ||
                  number === Math.ceil(totalCount / itemsPerPage)
                ) {
                  return (
                    <li
                      key={number}
                      onClick={() => paginate(number)}
                      className={`border border-[#E0E0E0] w-9 h-9 text-center pt-1 ${
                        currentPage === number
                          ? "bg-[#9A55FF] text-white cursor-not-allowed"
                          : "bg-white text-[#686868] cursor-pointer"
                      }`}
                    >
                      <a href="#" className="">
                        {number}
                      </a>
                    </li>
                  );
                } else if (
                  number === 2 ||
                  number === Math.ceil(totalCount / itemsPerPage) - 1
                ) {
                  // Display ellipsis for second and second-to-last pages
                  return (
                    <li
                      key={number}
                      className="border border-[#E0E0E0] w-9 h-9 text-center pt-1 cursor-not-allowed"
                    >
                      <span className="page-link">...</span>
                    </li>
                  );
                }
                return null;
              })}

              <li
                onClick={() => paginate(currentPage + 1)}
                className={`border border-[#E0E0E0] w-9 h-9 text-center pt-1 ${
                  currentPage === Math.ceil(totalCount / itemsPerPage)
                    ? "bg-white text-[#686868] cursor-not-allowed"
                    : "bg-white text-[#686868] cursor-pointer"
                }`}
              >
                <a href="#" className="pt-1">
                  &gt;
                </a>
              </li>
            </ul>
          </div>

          <div className="flex bg-white gap-8 px-4 mt-8 py-7">
            <div>
              <p className="font-medium mb-5">Top Account Received</p>
              <div className="bg-[#FFFFF1] border border-[#9B9B9B] rounded pb-8 px-4 w-[17.5vw]">
                <div className="flex items-center gap-3 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.descending?.[0]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.descending?.[0]?.avg_receive_days}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.descending?.[1]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.descending?.[1]?.avg_receive_days}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.descending?.[2]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.descending?.[2]?.avg_receive_days}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.descending?.[3]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.descending?.[3]?.avg_receive_days}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.descending?.[4]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.descending?.[4]?.avg_receive_days}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[250px] h-[360px] flex-1">
              <TopAccountReached graphData={dataGraph} />
            </div>

            <div className="w-[250px] h-[360px] flex-1">
              <TopAccountDelayed graphData={dataGraph} />
            </div>
            <div>
              <p className="font-medium mb-5">Top Account Delayed</p>

              <div className="bg-[#FFFFF1] border border-[#9B9B9B] rounded pb-8 px-4 w-[17.5vw]">
                <div className="flex items-center gap-2 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.ascending?.[0]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.ascending?.[0]?.avg_receive_days}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.ascending?.[1]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.ascending?.[1]?.avg_receive_days}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.ascending?.[2]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.ascending?.[2]?.avg_receive_days}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.ascending?.[3]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.ascending?.[3]?.avg_receive_days}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <p className="text-[#606060] text-[15px] font-medium ">
                    {dataGraph?.ascending?.[4]?.company_name}
                  </p>
                  <p className="text-[#38424B] text-[13px] font-medium">
                    {dataGraph?.ascending?.[4]?.avg_receive_days}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AgingReportPage;
