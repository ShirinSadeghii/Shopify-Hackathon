import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MentorPage1 from './pages/MentorPage1/Mentor1';
import MentorPage2 from './pages/MentorPage2/Mentor2';
import MentorPage3 from './pages/MentorPage3/Mentor3';
import MentorPage4 from './pages/MentorPage4/Mentor4';
import MentorPage5 from './pages/MentorPage5/Mentor5';
import MentorPage6 from './pages/MentorPage6/Mentor6';
import MentorPage7 from './pages/MentorPage7/Mentor7';
import MentorPage8 from './pages/MentorPage8/Mentor8';
import MentorPage9 from './pages/MentorPage9/Mentor9';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MentorPage1 />} />
          <Route path="/match2" element={<MentorPage2 />} />
          <Route path="/match3" element={<MentorPage3 />} />
          <Route path="/matches" element={<MentorPage4 />} />
          <Route path="/chat" element={<MentorPage5 />} />
          <Route path="" element={<MentorPage6 />} />
          <Route path="" element={<MentorPage7 />} />
          <Route path="" element={<MentorPage8 />} />
          <Route path="" element={<MentorPage9 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
