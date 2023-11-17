import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MentorPage1 from "./pages/MentorPage1/Mentor1";
import MentorPage2 from "./pages/MentorPage2/Mentor2";
import MentorPage3 from "./pages/MentorPage3/Mentor3";
import MentorPage4 from "./pages/MentorPage4/Mentor4";
import MentorPage5 from "./pages/MentorPage5/Mentor5";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MentorPage1 />} />
          <Route path="/match2" element={<MentorPage2 />} />
          <Route path="/match3" element={<MentorPage3 />} />
          <Route path="/matches" element={<MentorPage4 />} />
          <Route path="/mentorchat" element={<MentorPage5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
