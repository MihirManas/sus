// unused
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Mentors from './pages/Mentors';
import Enroll from './pages/Enroll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="enroll" element={<Enroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
