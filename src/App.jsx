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
          <Route path='/' element={<MentorPage1 />}></Route>
          <Route path='' element={<MentorPage2 />}></Route>
          <Route path='' element={<MentorPage3 />}></Route>
          <Route path='' element={<MentorPage4 />}></Route>
          <Route path='/mentorchat' element={<MentorPage5 />}></Route>
          <Route path='' element={<MentorPage6 />}></Route>
          <Route path='' element={<MentorPage7 />}></Route>
          <Route path='' element={<MentorPage8 />}></Route>
          <Route path='' element={<MentorPage9 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
