import React, { useEffect, useState, useRef } from "react";
import IMAGES from "../images";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import ProgressBar from "@ramonak/react-progress-bar";
import { Doughnut, Chart, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import FilterContainer from "../components/RevenueReportPage/FilterContainer";

export const ProjectChart = React.memo(() => {
  const data = {
    labels: [
      "1 BHK",
      "2 BHK",
      "3 BHK",
      "4 BHK",
      "5 BHK",
      "6 BHK",
      "JODI",
      "OTHERS",
    ],
    datasets: [
      {
        data: [25, 50, 10, 30, 15],
        backgroundColor: [
          "#E94B3F",
          "#01ABC2",
          "#F99408",
          "#009788",
          "#7DB244",
        ],
        hoverOffset: 10,
        hoverBorderWidth: 5,
        innerRadius: 0.1,
        cutout: 55,
      },
    ],
  };

  const options = {
    cutoutPercentage: 100,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const plugins = [
    {
      id: "doughnut-center-text",
      _afterDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();

        try {
          var lowerText = chart.tooltip.title[0];
          var upperText = chart.tooltip.dataPoints[0].raw;
        } catch (error) {}

        if (upperText && lowerText) {
          ctx.font = "bold 20px sans-serif";

          ctx.textBaseline = "center";

          var textX = Math.round(
              (width - ctx.measureText(upperText).width) / 2
            ),
            // textY = height / 2 - 30;
            textY = height / 2 - 25;
          ctx.fillText(upperText, textX, textY);

          ctx.font = "bold 10px sans-serif";

          (textX = Math.round((width - ctx.measureText(lowerText).width) / 2)),
            (textY += 30);

          ctx.fillText(lowerText, textX, textY);
          ctx.save();
        } else {
          ctx.font = "bold 20px sans-serif";

          ctx.textBaseline = "top";

          let lowerText = data.labels[0];
          let upperText = data.datasets[0].data[0];
          var textX = Math.round(
              (width - ctx.measureText(upperText).width) / 2
            ),
            textY = height / 2 - 20;
          ctx.fillText(upperText, textX, textY);

          ctx.font = "bold 10px sans-serif";

          textX = Math.round((width - ctx.measureText(lowerText).width) / 2);

          textY += 40;
          ctx.fillText(lowerText, textX, textY);
          ctx.save();
        }
      },
      get afterDraw() {
        return this._afterDraw;
      },
      set afterDraw(value) {
        this._afterDraw = value;
      },
    },
  ];
  return <Doughnut data={data} options={options} plugins={plugins} />;
});
export const BranchChart = React.memo(() => {
  const data = {
    labels: ["Thane", "Mumbai", "Pune"],
    datasets: [
      {
        data: [15000, 15000, 1500],
        backgroundColor: ["#9A55FF", "#C49BFF", "#F2E9FF"],
        hoverOffset: 10,
        hoverBorderWidth: 5,
        innerRadius: 0.1,
        cutout: 55,
      },
    ],
  };

  const options = {
    cutoutPercentage: 100,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const plugins = [
    {
      id: "doughnut-center-text",
      _afterDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();

        try {
          var lowerText = chart.tooltip.title[0];
          var upperText = chart.tooltip.dataPoints[0].raw;
        } catch (error) {}

        if (upperText && lowerText) {
          ctx.font = "bold 20px sans-serif";

          ctx.textBaseline = "center";

          var textX = Math.round(
              (width - ctx.measureText(upperText).width) / 2
            ),
            // textY = height / 2 - 30;
            textY = height / 2 - 25;
          ctx.fillText(upperText, textX, textY);

          ctx.font = "bold 10px sans-serif";

          (textX = Math.round((width - ctx.measureText(lowerText).width) / 2)),
            (textY += 30);

          ctx.fillText(lowerText, textX, textY);
          ctx.save();
        } else {
          ctx.font = "bold 20px sans-serif";

          ctx.textBaseline = "top";

          let lowerText = data.labels[0];
          let upperText = data.datasets[0].data[0];
          var textX = Math.round(
              (width - ctx.measureText(upperText).width) / 2
            ),
            textY = height / 2 - 20;
          ctx.fillText(upperText, textX, textY);

          ctx.font = "bold 10px sans-serif";

          textX = Math.round((width - ctx.measureText(lowerText).width) / 2);

          textY += 40;
          ctx.fillText(lowerText, textX, textY);
          ctx.save();
        }
      },
      get afterDraw() {
        return this._afterDraw;
      },
      set afterDraw(value) {
        this._afterDraw = value;
      },
    },
  ];
  return <Doughnut data={data} options={options} plugins={plugins} />;
});
const NetRevenueChart = () => {
  const data = {
    labels: ["Dosti", "Puraniks", "Godrej Partner ", "Lodha", "Name-5"],
    datasets: [
      {
        data: [15, 10, 30, 40, 50],
        backgroundColor: [
          "#E94B3F",
          "#01ABC2",
          "#F99408",
          "#009788",
          "#7DB244",
        ],
        barThickness: 30,
        borderRadius: 5,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    indexAxis: "x",
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
        grace: "1",
        grid: {
          display: false,
        },
      },
      x: {
        grace: "1",

        ticks: {
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar options={options} data={data} />;
};

const RevenueReportPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [IsActionBarVisible, setIsActionBarVisible] = useState(true);
  const [data, setData] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [dataToShow, setDataToShow] = useState({
    sales: 0,
    avg_brokerage: 0,
    gross_revenue: 0,
    cashback: 0,
    net_revenue: 0,
    total_project: 0,
  });

  const [branchData, setBranchData] = useState([]);

  const [projectData, setProjectData] = useState([]);

  const [companyData, setCompanyData] = useState([]);

  const [developerData, setDeveloperData] = useState([]);

  const [isActiveFiltersVisible, setIsActiveFiltersVisible] = useState(true);

  useEffect(() => {
    calculateDataToShow();
  }, [data]);

  const formatNumber = (number) => {
    if (number >= 10000000) {
      return (number / 10000000).toFixed(1) + "Cr";
    } else if (number >= 100000) {
      return (number / 100000).toFixed(1) + "L";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number?.toString();
    }
  };

  const getData = async () => {
    axios
      .post("https://aarnainfra.com/ladder/client/expense/data.php")
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const calculateDataToShow = () => {
    setProjectData([]);
    setDataToShow({
      sales: 0,
      avg_brokerage: 0,
      gross_revenue: 0,
      cashback: 0,
      net_revenue: 0,
      total_project: 0,
    });

    setBranchData([]);

    setCompanyData([]);

    setDeveloperData([]);

    data?.forEach((branch) => {
      let branchObj = {
        name: branch?.branch,
        net_revenue: 0,
      };
      branch?.developers?.forEach((developer) => {
        let developerObj = {
          name: developer?.name,
          net_revenue: 0,
        };
        developer?.companies?.forEach((company) => {
          let companyObj = {
            name: company?.name,
            net_revenue: 0,
          };
          company?.projects?.forEach((project) => {
            setDataToShow((prev) => ({
              ...prev,
              sales: prev?.sales + +project?.total_sale,
              avg_brokerage: prev?.avg_brokerage + +project?.borkerage_percent,
              gross_revenue: prev?.gross_revenue + +project?.Realized_Amount,
              cashback: prev?.cashback + +project?.cashback,
              net_revenue: prev?.net_revenue + +project?.Net_Revenue,
              total_project: prev?.total_project + 1,
            }));

            const obj = {
              name: project?.name,
              net_revenue: project?.Net_Revenue,
            };

            developerObj.net_revenue += +project?.Net_Revenue;

            branchObj.net_revenue += +project?.Net_Revenue;

            companyObj.net_revenue += +project?.Net_Revenue;

            setProjectData((prev) => [...prev, obj]);
          });

          setCompanyData((prev) => [...prev, companyObj]);
        });

        setDeveloperData((prev) => [...prev, developerObj]);
      });

      setBranchData((prev) => [...prev, branchObj]);
    });

    setDeveloperData((prev) => {
      // sort based on the netrevenue
      return prev.sort((a, b) => b?.net_revenue - a?.net_revenue);
    });

    setBranchData((prev) => {
      // sort based on the netrevenue
      return prev.sort((a, b) => b?.net_revenue - a?.net_revenue);
    });

    setCompanyData((prev) => {
      // sort based on the netrevenue
      return prev.sort((a, b) => b?.net_revenue - a?.net_revenue);
    });
  };

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
            <div className="bg-white rounded-md py-3 pl-3 relative flex">
              <img
                onClick={() => setIsFilterVisible(!isFilterVisible)}
                src={IMAGES.FilterIcon}
                alt="filter icon"
              />
              {isFilterVisible && (
                <FilterContainer
                  isFilterVisible={isFilterVisible}
                  setIsFilterVisible={setIsFilterVisible}
                />
              )}

              {isActiveFiltersVisible && (
                <div className="h-11 flex items-center gap-4 pl-6">
                  <p className="text-[#5F6C72] text-sm ">Active Filters:</p>
                  <div>
                    <p className="text-[#191C1F] font-sm">Filter Name</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="p-7 bg-white">
            <div className="bg-white flex gap-5 text-[#2b2582]">
              <div className="shadow relative bg-blue-gradient card rounded-xl px-4 flex-1 h-[104px] flex flex-col justify-center text-center">
                <img
                  src={IMAGES.Background1}
                  alt="backgroud"
                  className="absolute right-0 top-0"
                />
                <p className="text-white  font-semibold border-b border-b-white pb-2">
                  Sales
                </p>
                <p className="text-[30px] text-white font-bold leading-none mt-3">
                  {formatNumber(dataToShow?.sales)}
                </p>
              </div>

              <div className="shadow relative bg-red-gradient card rounded-xl px-4 flex-1 h-[104px] flex flex-col justify-center text-center">
                <img
                  src={IMAGES.Background1}
                  alt="backgroud"
                  className="absolute right-0 top-0"
                />
                <p className="text-white  font-semibold border-b border-b-white pb-2">
                  Avg. Brokerage
                </p>
                <p className="text-[30px] text-white font-bold leading-none mt-3">
                  {(
                    dataToShow?.avg_brokerage / dataToShow?.total_project
                  ).toFixed(2)}
                </p>
              </div>

              <div className="shadow relative bg-blue-2-gradient card rounded-xl px-4 flex-1 h-[104px] flex flex-col justify-center text-center">
                <img
                  src={IMAGES.Background1}
                  alt="backgroud"
                  className="absolute right-0 top-0"
                />
                <p className="text-white  font-semibold border-b border-b-white pb-2">
                  Gross Revenue
                </p>
                <p className="text-[30px] text-white font-bold leading-none mt-3">
                  {formatNumber(dataToShow?.gross_revenue)}
                </p>
              </div>

              <div className="shadow relative bg-black-gradient card rounded-xl px-4 flex-1 h-[104px] flex flex-col justify-center text-center">
                <img
                  src={IMAGES.Background1}
                  alt="backgroud"
                  className="absolute right-0 top-0"
                />
                <p className="text-[#EAD7B9]  font-semibold border-b border-b-[#EAD7B9] pb-2">
                  Cashback
                </p>
                <p className="text-[30px] text-[#EAD7B9] font-bold leading-none mt-3">
                  {formatNumber(dataToShow?.cashback)}
                </p>
              </div>

              <div className="shadow relative border-[3px] border-[#F66C1F] bg-gold-gradient card rounded-xl px-4 flex-1 h-[104px] flex flex-col justify-center text-center">
                <img
                  src={IMAGES.Background2}
                  alt="backgroud"
                  className="absolute right-0 bottom-0"
                />
                <p className="text-[#151515] font-semibold border-b border-b-black pb-2">
                  Net Revenue
                </p>
                <p className="text-[30px]  font-bold leading-none mt-3">
                  {formatNumber(dataToShow?.net_revenue)}
                </p>
              </div>
            </div>
            <div className="flex gap-5 my-7">
              <div className="flex-1  shadow border border-[#D9D9D9] bg-white rounded-lg pt-3 pb-4 px-5">
                <p className="text-[#202020] font-medium ">Developer</p>
                <div className="pl-3 pr-4">
                  {developerData.map((developer) => (
                    <>
                      <p className="text-[#606060] font-medium text-[13px] mb-1 mt-2">
                        {developer?.name}
                      </p>

                      <ProgressBar
                        completed={developer?.net_revenue / 100}
                        height="6px"
                        isLabelVisible={false}
                        bgColor="#FDCA40"
                        labelColor="#e80909"
                      />
                    </>
                  ))}
                </div>
              </div>

              <div className="flex-1 shadow border border-[#D9D9D9] bg-white rounded-lg py-6 px-5">
                <p className="text-[#202020] font-medium ">Branch</p>
                <div className="flex justify-center gap-14 mt-5 items-center">
                  <div className=" self-center w-[172px] h-[172px] ">
                    <BranchChart />
                  </div>
                  <div>
                    {branchData.map((branch, i) => {
                      if (i < 3) {
                        return (
                          <div className="flex items-center bg-[#EEEEEE] h-[26px] mt-4 ">
                            <div className="bg-[#9A55FF] h-6 w-6 "></div>
                            <p className="ml-[6px] text-[#606060] text-[13px] mr-10  font-medium">
                              {branch?.name}
                            </p>
                            <p className="ml-auto mr-4 text-[#38424B] font-medium text-[13px]">
                              {branch?.net_revenue}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-1 shadow border border-[#D9D9D9] bg-white rounded-lg py-4 px-4">
                <p className="text-[#38424B] font-medium text-[18px]">
                  Net Revenue
                </p>
                <div className="h-[202px] mx-3 w-[90%] mt-4">
                  <NetRevenueChart />
                </div>
              </div>
              <div className="flex-1 shadow border py-[18px] px-6 border-[#D9D9D9] bg-white rounded-lg">
                <p className="text-[18px] font-medium">Project</p>

                <div className="flex pl-[38px] pr-12  h-full justify-between">
                  <div className=" self-center w-[172px] h-[172px] ">
                    <ProjectChart />
                  </div>

                  <div className="mt-2 ">
                    <div className="flex  items-center">
                      <div className="h-[22px] w-[22px] bg-[#E94B3F] "></div>
                      <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                        Project Name
                      </p>
                      <p className="bg-[#EEEEEE] text-[#38424B] text-[13px] font-medium px-1">
                        25L
                      </p>
                    </div>

                    <div className="flex mt-2 items-center">
                      <div className="h-[22px] w-[22px] bg-[#01ABC2] "></div>
                      <p className="text-[#444444] h-5 pl-1 flex items-center font-medium  text-[10px] bg-[#EEEEEE]">
                        2 BHK
                        <span className="inline-block ml-5 mr-5">300</span>
                      </p>
                    </div>
                    <div className="flex mt-2 items-center">
                      <div className="h-[22px] w-[22px] bg-[#F99408] "></div>
                      <p className="text-[#444444] h-5 pl-1 flex items-center font-medium  text-[10px] bg-[#EEEEEE]">
                        3 BHK
                        <span className="inline-block ml-5 mr-5">300</span>
                      </p>
                    </div>

                    <div className="flex mt-2 items-center">
                      <div className="h-[22px] w-[22px] bg-[#009788] "></div>
                      <p className="text-[#444444] h-5 pl-1 flex items-center font-medium  text-[10px] bg-[#EEEEEE]">
                        4 BHK
                        <span className="inline-block ml-5 mr-5">300</span>
                      </p>
                    </div>
                    <div className="flex mt-2 items-center">
                      <div className="h-[22px] w-[22px] bg-[#7DB244] "></div>
                      <p className="text-[#444444] h-5 pl-1 flex items-center font-medium  text-[10px] bg-[#EEEEEE]">
                        5 BHK
                        <span className="inline-block ml-5 mr-5">300</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RevenueReportPage;
