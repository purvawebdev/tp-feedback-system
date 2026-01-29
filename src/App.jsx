import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CollegeLogin from "./pages/CollegeLogin";
import CollegeAdminLayout from "./layouts/CollegeAdminLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/:collegeId" element={<CollegeLogin />} />
        <Route path="/college-admin/dashboard" element={<CollegeAdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
