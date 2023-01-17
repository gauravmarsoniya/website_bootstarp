import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Technologies from './pages/Technologies';
/* Rename classname with company name once final */
const UI = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solutions/:id' element={<Solutions />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/technologies' element={<Technologies />} />
      </Routes>
    </Router>
  );
};

export default UI;
