import React from "react";
import Header from "../components/common/Header";
import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import IMAGES from "../images";

const Collection1 = () => {
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
              <p className="text-[#5F6C72] text-sm">Active Filters:</p>
              <p className="text-[#191C1F] text-sm">Filter Name</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#FFA800] text-white rounded py-2 text-center">
                Sales
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +2Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#8950FC] text-white rounded py-2 text-center">
                Sales Unit
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                52
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#F64E60] text-white rounded py-2 text-center">
                Avg. Brokerage
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +1.52Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#FF94D5] text-white rounded py-2 text-center">
                Gross Revenue
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +2Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>
          </div>

          <div className="flex gap-5 my-5">
            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#9C72FD] text-white rounded py-2 text-center">
                Net Revenue
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +2Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#1BC5BD] text-white rounded py-2 text-center">
                Invoice Raised
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +52
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#FFA800] text-white rounded py-2 text-center">
                Invoice Not Raised
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +1.52Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#8950FC] text-white rounded py-2 text-center">
                Outstanding Invoice
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +2Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#F64E60] text-white rounded py-2 text-center">
                Invoice Raised
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +2Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#FF94D5] text-white rounded py-2 text-center">
                Cancellation
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                52
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#9C72FD] text-white rounded py-2 text-center">
                Cancellation Unit
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +1.52Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>

            <div className="rounded-[10px] bg-white py-3 px-[18px] text-center flex-1">
              <div className="bg-[#1BC5BD] text-white rounded py-2 text-center">
                Cancellation
              </div>
              <p className="text-[#172B4C] text-[28px] mt-5 border-b border-b-[#F4F4F4] pb-2">
                +2Cr
              </p>
              <p className="text-[#7E8299] text-sm mt-2">Line Here</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Collection1;
