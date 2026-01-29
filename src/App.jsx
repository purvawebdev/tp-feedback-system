import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Landingpage";
import CollegeLogin from "./pages/CollegeLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Dynamic College Admin Login */}
        <Route path="/login/:collegeId" element={<CollegeLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
