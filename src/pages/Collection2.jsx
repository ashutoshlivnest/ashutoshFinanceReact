import React from "react";
import Header from "../components/common/Header";
import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import IMAGES from "../images";

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
              <p className="text-[#5F6C72] text-sm">Active Filters:</p>
              <p className="text-[#191C1F] text-sm">Filter Name</p>
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

          <div className="py-5 px-7 bg-white mt-4">
            <p className="text-[#202020] text-lg font-medium">
              Collection 2 Overview
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Collection2;
