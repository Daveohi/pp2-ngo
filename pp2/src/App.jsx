import LandingPage from "./Pages/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./Pages/GetStarted";
import SignUpNgoPage from "./Pages/SignUpNGO";
import SignUpNgo from "./Pages/SignUpNgo2";


function App() {
  return (
    // <LandingPage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/signupngo" element={<SignUpNgoPage />} />
        <Route path="/signupngo2" element={<SignUpNgo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;