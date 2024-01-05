import React from "react";
import Header from "../components/common/Header";
import { useState, useEffect } from "react";
import Sidebar from "../components/common/Sidebar";
import IMAGES from "../images";
import axios from "axios";
import { Doughnut, Chart, Bar } from "react-chartjs-2";

export const ProjectChart = React.memo((graphData) => {
  const data = {
    labels: [
      "Not Submitted Yet",
      "On-time",
      "Delayed",
      "Delayed submitted ",
      "Not Raised",
    ],

    datasets: [
      {
        data: [
          graphData &&
            graphData.graphData.length > 0 &&
            (graphData.graphData[0]?.not_submitted / 100) * 100,
          graphData &&
            graphData.graphData.length > 0 &&
            (graphData.graphData[0]?.on_time / 100) * 100,
          graphData &&
            graphData.graphData.length > 0 &&
            (graphData.graphData[0]?.delayed_raised / 100) * 100,
          graphData &&
            graphData.graphData.length > 0 &&
            (graphData.graphData[0]?.delayed_submitted / 100) * 100,
          graphData &&
            graphData.graphData.length > 0 &&
            (graphData.graphData[0]?.not_raised / 100) * 100,
        ],

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

const Collection2 = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [data, setData] = useState([]);
  const [graphData, setgraphData] = useState([]);

  const getGraphData = async () => {
    axios
      .get(
        "https://aarnainfra.com/ladder/client/collections/collectiongraph.php"
      )
      .then((res) => {
        setgraphData(res?.data);
        console.log(res?.data);
      });
  };

  const getData = async () => {
    axios
      .get("https://lnfinance.aarnainfra.com/report/collection2")
      .then((res) => {
        setData(res?.data);
        console.log(res?.data);
      });
  };

  useEffect(() => {
    getGraphData();
  }, []);

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
            />
            <div className="bg-white pl-6 py-2 flex-1 flex items-center gap-4">
              <p className="text-[#5F6C72] text-sm font-bold">
                Collection 2 Report
              </p>
            </div>
          </div>

          <div className="bg-white">
            <table className="w-full">
              <thead>
                <tr className="text-[#212529] text-sm border-b border-b-[#212529] h-16  ">
                  <th className="text-[#212529] font-medium">Invoice Number</th>
                  <th className="text-[#212529] font-medium">Closure Date</th>
                  <th className="text-[#212529] font-medium">SDR Date</th>
                  <th className="text-[#212529] font-medium">Raised Date</th>
                  <th className="text-[#212529] font-medium">Raise Gap</th>
                  <th className="text-[#212529] font-medium">Submit Date</th>
                  <th className="text-[#212529] font-medium">Submit Gap</th>
                </tr>
              </thead>
              <tbody>
          {data.data?.map((item, index) => {
          const raiseDate = new Date(item?.invoice_raise_date);
          const sdrDate = new Date(item?.sdr_date);
          const submitDate = new Date(item?.submit_date);
      
          const raiseSDRDiff = Math.ceil((raiseDate - sdrDate) / (1000 * 60 * 60 * 24));
          const raiseSubmitDiff = Math.ceil((raiseDate - submitDate) / (1000 * 60 * 60 * 24));
      
          return (
            <tr className="h-14 border-b border-b-[#DEE2E6]" key={index}>
              <td className="text-[#0222C9] text-sm font-medium text-center">
                {item?.invoice_number}
              </td>
              <td className="text-[#595959] text-sm font-medium text-center">
                {item?.closure_date}
              </td>
              <td className="text-[#595959] text-sm font-medium text-center">
                {item?.sdr_date}
              </td>
              <td className="text-[#595959] text-sm font-medium text-center">
                {item?.invoice_raise_date}
              </td>
              <td className="text-[#595959] text-sm font-medium text-center">
                {raiseSDRDiff} Days
              </td>
              <td className="text-[#595959] text-sm font-medium text-center">
                {item?.submit_date}
              </td>
              <td className="text-[#595959] text-sm font-medium text-center">
                {raiseSubmitDiff} Days
              </td>
            </tr>
          );
        })}
              </tbody>

            </table>
          </div>

          {/* PIE CHART START */}
          <div
            className="py-5 px-7 bg-white mt-4 "
            style={{ paddingLeft: "3.75rem", paddingRight: "36.75rem" }}
          >
            <p className="text-[#202020] text-lg font-medium mt-2">
              Collection 2 Overview
            </p>

            <div className="flex pl-[38px] pr-12  h-full justify-between mt-3">
              <div className=" self-center w-[192px] h-[192px] ">
                <ProjectChart graphData={graphData} />
              </div>

              <div className="mt-5">
                <div className="flex  items-center">
                  <div className="h-[22px] w-[22px] bg-[#E94B3F] "></div>
                  <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                    Not Submitted Yet
                  </p>
                  {graphData && graphData.length > 0 && (
                    <p className="bg-[#EEEEEE] text-[#38424B] text-[13px] font-medium px-1">
                      {graphData[0].not_submitted}
                    </p>
                  )}
                </div>

                <div className="flex mt-2 items-center">
                  <div className="h-[22px] w-[22px] bg-[#01ABC2] "></div>
                  <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                    On-time
                    {graphData && graphData.length > 0 && (
                      <span className="inline-block ml-5 mr-5">
                        {graphData[0].on_time}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex mt-2 items-center">
                  <div className="h-[22px] w-[22px] bg-[#F99408] "></div>
                  <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                    Delayed Raised
                    {graphData && graphData.length > 0 && (
                      <span className="inline-block ml-5 mr-5">
                        {graphData[0].delayed_raised}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex mt-2 items-center">
                  <div className="h-[22px] w-[22px] bg-[#009788] "></div>
                  <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                    Delayed submitted
                    {graphData && graphData.length > 0 && (
                      <span className="inline-block ml-5 mr-5">
                        {graphData[0].delayed_submitted}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex mt-2 items-center">
                  <div className="h-[22px] w-[22px] bg-[#7DB244] "></div>
                  <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                    Not Raised
                    {graphData && graphData.length > 0 && (
                      <span className="inline-block ml-5 mr-5">
                        {graphData[0].delayed_raised}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* PIE CHART END */}
        </section>
      </main>
    </>
  );
};

export default Collection2;
