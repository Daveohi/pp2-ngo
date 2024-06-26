import LandingPage from "./Pages/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./Pages/GetStarted";
import SignUpNgoPage from "./Pages/SignUpNGO";
import SignUpNgo from "./Pages/SignUpNgo2";
import Dashboard from "./Pages/Dashboard";
import Portfolio from "./Pages/Portfolio";
import Donation from "./Pages/Donation";


function App() {
  
  return (
    // <LandingPage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/signupngo" element={<SignUpNgoPage />} />
        <Route path="/signupngo2" element={<SignUpNgo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;