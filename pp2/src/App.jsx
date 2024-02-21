import LandingPage from "./Pages/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./Pages/GetStarted";


function App() {
  return (
    // <LandingPage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;