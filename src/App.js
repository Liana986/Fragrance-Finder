import { Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/q1" element={<Question1 />} />
      <Route path="/q2" element={<Question2 />} />
      <Route path="/q3" element={<Question3 />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
