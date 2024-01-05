import React from "react";
import Header from "../components/common/Header";
import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import IMAGES from "../images";
import { Doughnut, Chart, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const ProjectChart = React.memo(() => {
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

const Collection2 = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

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
            <p className="text-[#5F6C72] text-sm font-bold">Collection 2 Report</p>
            </div>
          </div>

          <div className="bg-white">
            <table className="w-full">
              <thead>
                <tr className="text-sm">
                  <th className="text-[#212529] font-medium">Client Name</th>
                  <th className="text-[#212529] font-medium">Closure Date</th>
                  <th className="text-[#212529] font-medium">SDR Date</th>
                  <th className="text-[#212529] font-medium">Raised Date</th>
                  <th className="text-[#212529] font-medium">Raise Gap</th>
                  <th className="text-[#212529] font-medium">Submit Date</th>
                  <th className="text-[#212529] font-medium">Submit Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[#0222C9] text-sm font-medium text-center">
                    012345
                  </td>
                  <td className="text-[#595959] text-sm font-medium text-center">
                    30 Oct 23
                  </td>
                  <td className="text-[#595959] text-sm font-medium text-center">
                    30 Oct 23
                  </td>
                  <td className="text-[#595959] text-sm font-medium text-center">
                    30 Oct 23
                  </td>
                  <td className="text-[#595959] text-sm font-medium text-center">
                    10 Days
                  </td>
                  <td className="text-[#595959] text-sm font-medium text-center">
                    30 Oct 23
                  </td>
                  <td className="text-[#595959] text-sm font-medium text-center">
                    10 Days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="py-5 px-7 bg-white mt-4 " style={{ paddingLeft: '3.75rem', paddingRight: '36.75rem' }}>
            <p className="text-[#202020] text-lg font-medium mt-2">
              Collection 2 Overview
            </p>

            <div className="flex pl-[38px] pr-12  h-full justify-between mt-3">
                  <div className=" self-center w-[192px] h-[192px] ">
                    <ProjectChart />
                  </div>

                  <div className="mt-5">
                    <div className="flex  items-center">
                      <div className="h-[22px] w-[22px] bg-[#E94B3F] "></div>
                      <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                        Not Submitted Yet
                      </p>
                      <p className="bg-[#EEEEEE] text-[#38424B] text-[13px] font-medium px-1">
                        25
                      </p>
                    </div>

                    <div className="flex mt-2 items-center">
                      <div className="h-[22px] w-[22px] bg-[#01ABC2] "></div>
                      <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                        On-time
                        <span className="inline-block ml-5 mr-5">30</span>
                      </p>
                    </div>
                    <div className="flex mt-2 items-center">
                      <div className="h-[22px] w-[22px] bg-[#F99408] "></div>
                      <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                        Delayed
                        <span className="inline-block ml-5 mr-5">50</span>
                      </p>
                    </div>

                    <div className="flex mt-2 items-center">
                      <div className="h-[22px] w-[22px] bg-[#009788] "></div>
                      <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                        Delayed submitted 
                        <span className="inline-block ml-5 mr-5">25</span>
                      </p>
                    </div>
                    <div className="flex mt-2 items-center">
                      <div className="h-[22px] w-[22px] bg-[#7DB244] "></div>
                      <p className="text-[#606060] text-[13px] font-medium pl-3 pr-4">
                        Not Raised
                        <span className="inline-block ml-5 mr-5">30</span>
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

export default Collection2;
