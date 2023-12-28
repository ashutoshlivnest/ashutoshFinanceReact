import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AppProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FinanacePage from "./pages/FinancePage";
import RevenueReportPage from "./pages/RevenueReportPage";
import AgingReportPage from "./pages/AgingReportPage";
import Collection1 from "./pages/Collection1";
import ActualCashflowReportPage from "./pages/ActualCashflowReportPage";
import Collection2 from "./pages/Collection2";
import ProjectedCashflowReportPage from "./pages/ProjectedCashflowReportPage";
import DelayedCashflowReportPage from "./pages/DelayedCashflowReportPage";

const App = () => {
  return (
    <AppProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<FinanacePage />} />
          <Route path="/reports/revenue" element={<RevenueReportPage />} />
          <Route path="/reports/aging" element={<AgingReportPage />} />
          <Route path="/reports/collection1" element={<Collection1 />} />
          <Route path="/reports/collection2" element={<Collection2 />} />
          <Route
            path="/reports/actual_cashflow"
            element={<ActualCashflowReportPage />}
          />
          <Route
            path="/reports/projected_cashflow"
            element={<ProjectedCashflowReportPage />}
          />

          <Route
            path="/reports/delayed_cashflow"
            element={<DelayedCashflowReportPage />}
          />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};
export default App;
