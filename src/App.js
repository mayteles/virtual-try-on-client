import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "./pages/Step1/Step1";
import Step2 from "./pages/Step2/Step2";
import Step3 from "./pages/Step3/Step3";
// import "./styles/global.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route for Step1 */}
          <Route path="/" element={<Step1 />} />
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
