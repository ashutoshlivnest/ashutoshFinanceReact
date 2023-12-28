import IMAGES from "../../images";
import { useLocation, Link } from "react-router-dom";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <aside
      className={` ${
        isSidebarVisible ? "min-w-[16vw]" : "w-fit"
      }  bg-white max-h-[89vh] orveflow-scroll pt-4   sticky top-[74px]`}
    >
      <img
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        src={IMAGES.SidebarToggleIcon}
        alt=" sidebar toggle "
        className={`${
          isSidebarVisible ? "" : "rotate-180 "
        } absolute -right-3 top-6 cursor-pointer`}
      />

      {/* Home */}
      <Link to="/">
        <div
          className={` cursor-pointer flex group hover:bg-[#9A55FF] items-center gap-4 py-2  px-4 ${
            pathname === "/" ? "bg-[#9A55FF]" : ""
          } `}
        >
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${
                pathname === "/" ? "fill-white" : ""
              } group-hover:fill-white`}
              d="M6.65014 14.0994V9.59622H10.3458V14.0994C10.3458 14.5947 10.7615 15 11.2697 15H14.0414C14.5495 15 14.9653 14.5947 14.9653 14.0994V7.79496H16.5359C16.9609 7.79496 17.1642 7.2816 16.8408 7.01141L9.11696 0.229661C8.76588 -0.0765536 8.23001 -0.0765536 7.87893 0.229661L0.155079 7.01141C-0.159049 7.2816 0.0349716 7.79496 0.459968 7.79496H2.03061V14.0994C2.03061 14.5947 2.44637 15 2.95451 15H5.72623C6.23438 15 6.65014 14.5947 6.65014 14.0994Z"
              fill="#8A8A8A"
            />
          </svg>
          {isSidebarVisible && (
            <p
              className={`${
                pathname === "/" ? "text-white" : ""
              } text-[#6F6B6B] group-hover:text-white`}
            >
              Home
            </p>
          )}
        </div>
      </Link>

      {/* Cashflow */}
      <div className="mt-2">
        <hr className="border-b border-b-[#C1C1C170] mx-2" />

        <p className={`${isSidebarVisible ? "pl-2" : "px-4"} mt-2`}>
          {isSidebarVisible ? "Cashflow" : ""}
        </p>
        <div className="">
          <Link to="/reports/projected_cashflow">
            <div
              className={`flex pl-4 mt-1 items-center gap-4 py-2 group hover:bg-[#9A55FF] ${
                pathname === "/reports/projected_cashflow" ? "bg-[#9A55FF]" : ""
              }`}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`${
                    pathname === "reports/projected_cashflow"
                      ? "stroke-white"
                      : ""
                  } group-hover:stroke-white`}
                  d="M18.9833 10.5482C19.0945 8.72545 18.6486 6.91198 17.7049 5.34864C16.7611 3.78529 15.3641 2.54603 13.6993 1.79542C12.0346 1.04482 10.1809 0.81839 8.38439 1.1462C6.58792 1.47402 4.93367 2.34057 3.64132 3.63077C2.34898 4.92097 1.47969 6.57379 1.1489 8.36971C0.818103 10.1656 1.04146 12.0197 1.7893 13.6857C2.53714 15.3517 3.77409 16.7508 5.33587 17.6971C6.89765 18.6435 8.71037 19.0924 10.5333 18.9842M17.0003 20.0002V14.0002M17.0003 14.0002L20.0003 17.0002M17.0003 14.0002L14.0003 17.0002"
                  stroke="#8A8A8A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  className={`${
                    pathname === "reports/projected_cashflow"
                      ? "stroke-white"
                      : ""
                  } group-hover:stroke-white`}
                  d="M10.0002 5.00018V10.0002L12.5002 12.5002"
                  stroke="#8A8A8A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {isSidebarVisible && (
                <p
                  className={`${
                    pathname === "/reports/projected_cashflow"
                      ? "text-white"
                      : ""
                  } text-[#6F6B6B] group-hover:text-white `}
                >
                  Projected Cashflow
                </p>
              )}
            </div>
          </Link>

          <Link to="/reports/actual_cashflow">
            <div
              className={`flex pl-4 mt-1 items-center gap-4 py-2 group hover:bg-[#9A55FF] ${
                pathname === "/reports/actual_cashflow" ? "bg-[#9A55FF]" : ""
              }`}
            >
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`${
                    pathname === "/reports/actual_cashflow" ? "fill-white" : ""
                  } group-hover:fill-white`}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.074 16.324 14.59 14.558 16.395C13.6755 17.2869 12.7128 18.0956 11.682 18.811L11.256 19.101L11.056 19.234L10.679 19.474L10.343 19.679L9.927 19.921C9.64451 20.0818 9.32505 20.1663 9 20.1663C8.67495 20.1663 8.35549 20.0818 8.073 19.921L7.657 19.679L7.137 19.359L6.945 19.234L6.535 18.961C5.42298 18.2083 4.38707 17.3489 3.442 16.395C1.676 14.588 0 12.074 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM12.08 5.983L7.835 10.227L6.067 8.459C5.87936 8.27149 5.62492 8.1662 5.35965 8.1663C5.09438 8.16639 4.84001 8.27186 4.6525 8.4595C4.46499 8.64714 4.3597 8.90158 4.3598 9.16685C4.35989 9.43212 4.46536 9.68649 4.653 9.874L7.057 12.278C7.15915 12.3802 7.28044 12.4613 7.41393 12.5166C7.54742 12.5719 7.6905 12.6004 7.835 12.6004C7.9795 12.6004 8.12258 12.5719 8.25607 12.5166C8.38956 12.4613 8.51085 12.3802 8.613 12.278L13.493 7.397C13.6752 7.2084 13.776 6.9558 13.7737 6.6936C13.7714 6.4314 13.6662 6.18059 13.4808 5.99518C13.2954 5.80977 13.0446 5.7046 12.7824 5.70233C12.5202 5.70005 12.2686 5.80084 12.08 5.983Z"
                  fill="#8A8A8A"
                />
              </svg>

              {isSidebarVisible && (
                <p
                  className={`${
                    pathname === "/reports/actual_cashflow" ? "text-white" : ""
                  } text-[#6F6B6B] group-hover:text-white `}
                >
                  Actual Cashflow
                </p>
              )}
            </div>
          </Link>

          <Link to="/reports/delayed_cashflow">
            <div
              className={`flex pl-4 mt-1 items-center gap-4 py-2 group hover:bg-[#9A55FF] ${
                pathname === "/reports/delayed_cashflow" ? "bg-[#9A55FF]" : ""
              }`}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`${
                    pathname === "/reports/delayed_cashflow" && "fill-white"
                  } group-hover:fill-white`}
                  d="M15.3 8.5H17V13.6H15.3V8.5ZM15.3 15.3H17V17H15.3V15.3ZM8.5 0C3.825 0 0 3.825 0 8.5C0 13.175 3.825 17 8.5 17C10.455 17 12.155 16.32 13.6 15.3V6.8H16.83C16.065 2.89 12.58 0 8.5 0ZM12.07 12.07L7.65 9.35V4.25H8.925V8.67L12.75 10.965L12.07 12.07Z"
                  fill="#8A8A8A"
                />
              </svg>

              {isSidebarVisible && (
                <p
                  className={`${
                    pathname === "/reports/delayed_cashflow" ? "text-white" : ""
                  } text-[#6F6B6B] group-hover:text-white `}
                >
                  Delayed Cashflow
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Other Reports */}
      <div className="mt-2">
        <hr className="border-b border-b-[#C1C1C170] mx-2" />

        <p className={`${isSidebarVisible ? "pl-2" : "px-4"} mt-2`}>
          {isSidebarVisible ? "Other Reports" : ""}
        </p>
        <div className="">
          <Link to={"/reports/revenue"}>
            <div
              className={`flex pl-4 items-center gap-4 py-2 group hover:bg-[#9A55FF] ${
                pathname === "/reports/revenue" ? "bg-[#9A55FF]" : ""
              }`}
            >
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48 7.9C3.21 7.31 2.48 6.7 2.48 5.75C2.48 4.66 3.49 3.9 5.18 3.9C6.96 3.9 7.62 4.75 7.68 6H9.89C9.82 4.28 8.77 2.7 6.68 2.19V0H3.68V2.16C1.74 2.58 0.18 3.84 0.18 5.77C0.18 8.08 2.09 9.23 4.88 9.9C7.38 10.5 7.88 11.38 7.88 12.31C7.88 13 7.39 14.1 5.18 14.1C3.12 14.1 2.31 13.18 2.2 12H0C0.12 14.19 1.76 15.42 3.68 15.83V18H6.68V15.85C8.63 15.48 10.18 14.35 10.18 12.3C10.18 9.46 7.75 8.49 5.48 7.9Z"
                  fill="#8A8A8A"
                  className={`group-hover:fill-white ${
                    pathname === "/reports/revenue" && "fill-white"
                  }`}
                />
              </svg>

              {isSidebarVisible && (
                <p
                  className={`text-[#6F6B6B] group-hover:text-white ${
                    pathname === "/reports/revenue" && "text-white"
                  }`}
                >
                  Revenue Report
                </p>
              )}
            </div>
          </Link>

          <Link to="/reports/aop">
            <div
              className={`flex pl-4 items-center gap-4 py-2 group hover:bg-[#9A55FF] ${
                pathname === "/reports/aop" ? "bg-[#9A55FF]" : ""
              }`}
            >
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8006 5.04865L10.0278 0.2025C9.96447 0.13823 9.88926 0.0872668 9.80649 0.0525212C9.72372 0.0177756 9.63502 -7.12979e-05 9.54545 2.1406e-07H1.36364C1.00198 2.1406e-07 0.655131 0.145879 0.3994 0.405545C0.143668 0.66521 0 1.01739 0 1.38462V16.6154C0 16.9826 0.143668 17.3348 0.3994 17.5945C0.655131 17.8541 1.00198 18 1.36364 18H13.6364C13.998 18 14.3449 17.8541 14.6006 17.5945C14.8563 17.3348 15 16.9826 15 16.6154V5.53846C15.0001 5.44752 14.9825 5.35745 14.9483 5.27341C14.9141 5.18937 14.8639 5.113 14.8006 5.04865ZM9.54545 5.53846V1.73077L13.2955 5.53846H9.54545Z"
                  fill="#8A8A8A"
                  className={`group-hover:fill-white ${
                    pathname === "/reports/aop" && "fill-white"
                  }`}
                />
              </svg>

              {isSidebarVisible && (
                <p
                  className={`${
                    pathname === "/reports/aop" ? "text-white" : ""
                  } text-[#6F6B6B] group-hover:text-white `}
                >
                  AOP Report
                </p>
              )}
            </div>
          </Link>

          <Link to="/reports/aging">
            <div
              className={`flex pl-4 items-center gap-4 py-2 group hover:bg-[#9A55FF] ${
                pathname === "/reports/aging" ? "bg-[#9A55FF]" : ""
              }`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`${
                    pathname === "/reports/aging" && "fill-white"
                  } group-hover:fill-white`}
                  d="M3.66659 1.83334C2.64909 1.83334 1.83325 2.64918 1.83325 3.66668V18.3333C1.83325 18.8196 2.02641 19.2859 2.37022 19.6297C2.71404 19.9735 3.18036 20.1667 3.66659 20.1667H11.3758C12.3697 20.764 13.507 21.0808 14.6666 21.0833C16.3684 21.0833 18.0005 20.4073 19.2039 19.2039C20.4072 18.0006 21.0833 16.3685 21.0833 14.6667C21.0816 13.2861 20.6348 11.9429 19.8091 10.8365C18.9834 9.73007 17.8229 8.91945 16.4999 8.52501V7.33334L10.9999 1.83334H3.66659ZM10.0833 3.20834L15.1249 8.25001H10.0833V3.20834ZM14.6666 10.0833C15.8822 10.0833 17.0479 10.5662 17.9075 11.4258C18.767 12.2853 19.2499 13.4511 19.2499 14.6667C19.2499 15.8823 18.767 17.048 17.9075 17.9076C17.0479 18.7671 15.8822 19.25 14.6666 19.25C13.451 19.25 12.2852 18.7671 11.4257 17.9076C10.5661 17.048 10.0833 15.8823 10.0833 14.6667C10.0833 13.4511 10.5661 12.2853 11.4257 11.4258C12.2852 10.5662 13.451 10.0833 14.6666 10.0833ZM13.7499 11V15.5833L17.0591 17.5633L17.7466 16.445L15.1249 14.8958V11H13.7499Z"
                  fill="#8A8A8A"
                />
              </svg>
              {isSidebarVisible && (
                <p
                  className={`${
                    pathname === "/reports/aging" ? "text-white" : ""
                  } text-[#6F6B6B] group-hover:text-white `}
                >
                  Aging Report
                </p>
              )}
            </div>
          </Link>

          <Link to={"/reports/collection1"}>
            <div
              className={` ${
                pathname === "/reports/collection1" ? "bg-[#9A55FF]" : ""
              } flex pl-4 items-center gap-4 py-2 group hover:bg-[#9A55FF]`}
            >
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`group-hover:fill-white ${
                    pathname === "/reports/collection1" ? "fill-white" : ""
                  }`}
                  d="M0 0H9.3105L13.5 4.31645V7.72727H12V6.18182H7.5V1.54545H1.5V15.4545H13.5V17H0V0ZM9 1.86536V4.63636H11.6895L9 1.86536ZM3.75 8.5V14.6818H2.25V8.5H3.75ZM4.125 10.0455C4.125 9.63557 4.28304 9.24248 4.56434 8.95265C4.84564 8.66282 5.22718 8.5 5.625 8.5H6.75V10.0455H5.625V13.1364H6.75V14.6818H5.625C5.22718 14.6818 4.84564 14.519 4.56434 14.2292C4.28304 13.9393 4.125 13.5462 4.125 13.1364V10.0455ZM7.125 10.0455C7.125 9.63557 7.28304 9.24248 7.56434 8.95265C7.84564 8.66282 8.22718 8.5 8.625 8.5H9.375C9.77282 8.5 10.1544 8.66282 10.4357 8.95265C10.717 9.24248 10.875 9.63557 10.875 10.0455V13.1364C10.875 13.5462 10.717 13.9393 10.4357 14.2292C10.1544 14.519 9.77282 14.6818 9.375 14.6818H8.625C8.22718 14.6818 7.84564 14.519 7.56434 14.2292C7.28304 13.9393 7.125 13.5462 7.125 13.1364V10.0455ZM11.25 8.5H13.5C13.8978 8.5 14.2794 8.66282 14.5607 8.95265C14.842 9.24248 15 9.63557 15 10.0455V14.6818H13.5V10.0455H12.75V14.6818H11.25V8.5ZM8.625 10.0455V13.1364H9.375V10.0455H8.625Z"
                  fill="#8A8A8A"
                />
              </svg>

              {isSidebarVisible && (
                <p
                  className={`text-[#6F6B6B] group-hover:text-white ${
                    pathname === "/reports/collection1" ? "text-white" : ""
                  }`}
                >
                  Collection 1
                </p>
              )}
            </div>
          </Link>

          <Link to={"/reports/collection2"}>
            <div
              className={`flex pl-4 items-center gap-4 py-2 group hover:bg-[#9A55FF]  ${
                pathname === "reports/collection2" ? "bg-[#9A55FF]" : ""
              }`}
            >
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`group-hover:fill-white ${
                    pathname === "reports/collection2" ? "fill-white" : ""
                  }`}
                  d="M0 0H9.3105L13.5 4.31645V7.72727H12V6.18182H7.5V1.54545H1.5V15.4545H13.5V17H0V0ZM9 1.86536V4.63636H11.6895L9 1.86536ZM3.75 8.5V14.6818H2.25V8.5H3.75ZM4.125 10.0455C4.125 9.63557 4.28304 9.24248 4.56434 8.95265C4.84564 8.66282 5.22718 8.5 5.625 8.5H6.75V10.0455H5.625V13.1364H6.75V14.6818H5.625C5.22718 14.6818 4.84564 14.519 4.56434 14.2292C4.28304 13.9393 4.125 13.5462 4.125 13.1364V10.0455ZM7.125 10.0455C7.125 9.63557 7.28304 9.24248 7.56434 8.95265C7.84564 8.66282 8.22718 8.5 8.625 8.5H9.375C9.77282 8.5 10.1544 8.66282 10.4357 8.95265C10.717 9.24248 10.875 9.63557 10.875 10.0455V13.1364C10.875 13.5462 10.717 13.9393 10.4357 14.2292C10.1544 14.519 9.77282 14.6818 9.375 14.6818H8.625C8.22718 14.6818 7.84564 14.519 7.56434 14.2292C7.28304 13.9393 7.125 13.5462 7.125 13.1364V10.0455ZM11.25 8.5H13.5C13.8978 8.5 14.2794 8.66282 14.5607 8.95265C14.842 9.24248 15 9.63557 15 10.0455V14.6818H13.5V10.0455H12.75V14.6818H11.25V8.5ZM8.625 10.0455V13.1364H9.375V10.0455H8.625Z"
                  fill="#8A8A8A"
                />
              </svg>
              {isSidebarVisible && (
                <p
                  className={`text-[#6F6B6B] group-hover:text-white ${
                    pathname === "reports/collection2" ? "text-white" : ""
                  } `}
                >
                  Collection 2
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Finance Master */}
      <div className="mt-2">
        <hr className="border-b border-b-[#C1C1C170] mx-2" />

        <p className={`${isSidebarVisible ? "pl-2" : "px-4"} mt-2`}>
          {isSidebarVisible ? "Finance Master" : ""}
        </p>
        <div className="">
          <div className="flex pl-4 items-center gap-4 py-2 group hover:bg-[#9A55FF] ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.385 16.615H8.385V4H7.385V16.615ZM6.23 21C5.61 21 5.08333 20.7833 4.65 20.35C4.21667 19.9153 4 19.3887 4 18.77V5.23C4 4.61067 4.21667 4.084 4.65 3.65C5.08467 3.21667 5.61133 3 6.23 3H16.615V17.615H6.231C5.89633 17.615 5.60733 17.729 5.364 17.957C5.12133 18.1857 5 18.468 5 18.804C5 19.1413 5.12133 19.4247 5.364 19.654C5.60733 19.8847 5.89633 20 6.231 20H19V5H20V21H6.23Z"
                fill="#8A8A8A"
                className="group-hover:fill-white"
              />
            </svg>

            {isSidebarVisible && (
              <p className="text-[#6F6B6B] group-hover:text-white ">
                Ladder Master
              </p>
            )}
          </div>
          <Link to="/extras/master">
            <div
              className={`flex pl-4 items-center gap-4 py-2 group hover:bg-[#9A55FF] ${
                pathname === "/extras/master" ? "bg-[#9A55FF]" : ""
              }`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.0624 2.29167C13.0624 2.23089 13.0383 2.1726 12.9953 2.12962C12.9523 2.08664 12.894 2.0625 12.8333 2.0625H6.41659C5.74802 2.0625 5.10683 2.32809 4.63409 2.80084C4.16134 3.27358 3.89575 3.91477 3.89575 4.58333V17.4167C3.89575 18.0852 4.16134 18.7264 4.63409 19.1992C5.10683 19.6719 5.74802 19.9375 6.41659 19.9375H15.5833C16.2518 19.9375 16.893 19.6719 17.3658 19.1992C17.8385 18.7264 18.1041 18.0852 18.1041 17.4167V8.38475C18.1041 8.32397 18.0799 8.26568 18.037 8.2227C17.994 8.17973 17.9357 8.15558 17.8749 8.15558H13.7499C13.5676 8.15558 13.3927 8.08315 13.2638 7.95422C13.1349 7.82529 13.0624 7.65042 13.0624 7.46808V2.29167ZM13.7499 11.2292C13.9323 11.2292 14.1071 11.3016 14.2361 11.4305C14.365 11.5595 14.4374 11.7343 14.4374 11.9167C14.4374 12.099 14.365 12.2739 14.2361 12.4028C14.1071 12.5317 13.9323 12.6042 13.7499 12.6042H8.24992C8.06758 12.6042 7.89271 12.5317 7.76378 12.4028C7.63485 12.2739 7.56242 12.099 7.56242 11.9167C7.56242 11.7343 7.63485 11.5595 7.76378 11.4305C7.89271 11.3016 8.06758 11.2292 8.24992 11.2292H13.7499ZM13.7499 14.8958C13.9323 14.8958 14.1071 14.9683 14.2361 15.0972C14.365 15.2261 14.4374 15.401 14.4374 15.5833C14.4374 15.7657 14.365 15.9405 14.2361 16.0695C14.1071 16.1984 13.9323 16.2708 13.7499 16.2708H8.24992C8.06758 16.2708 7.89271 16.1984 7.76378 16.0695C7.63485 15.9405 7.56242 15.7657 7.56242 15.5833C7.56242 15.401 7.63485 15.2261 7.76378 15.0972C7.89271 14.9683 8.06758 14.8958 8.24992 14.8958H13.7499Z"
                  fill="#8A8A8A"
                  className="group-hover:fill-white"
                />
                <path
                  d="M14.4375 2.58866C14.4375 2.42 14.6144 2.31275 14.7455 2.41816C14.8564 2.508 14.9563 2.6125 15.0416 2.73166L17.8035 6.57891C17.8658 6.66691 17.798 6.78058 17.6898 6.78058H14.6667C14.6059 6.78058 14.5476 6.75643 14.5046 6.71346C14.4616 6.67048 14.4375 6.61219 14.4375 6.55141V2.58866Z"
                  fill="#8A8A8A"
                  className="group-hover:fill-white"
                />
              </svg>

              {isSidebarVisible && (
                <p
                  className={`${
                    pathname === "/extras/master" ? "text-white" : ""
                  } text-[#6F6B6B] group-hover:text-white `}
                >
                  AOP Master
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
