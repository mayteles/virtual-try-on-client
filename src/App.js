import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Step1 from "./pages/Step1/Step1";
import UploadPhoto from "./pages/UploadPhoto/UploadPhoto";
import Step2 from "./pages/Step2/Step2";
import Step3 from "./pages/Step3/Step3";
// import Step4 from "./pages/Step4/Step4";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route for Home */}
          <Route path="/Home" element={<Home />} />
          {/* Route for Step1 */}
          <Route path="/step1" element={<Step1 />} />
          {/* Route for Upload Page */}
          <Route path="/upload" element={<UploadPhoto />} />
          {/* Route for Step2 */}
          <Route path="/step2" element={<Step2 />} />
          {/* Route for Step3 */}
          <Route path="/step3" element={<Step3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
