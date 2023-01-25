import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './core/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Technologies from './pages/Technologies';
import Footer from './core/Footer';

import headerData from '@client/data/header/index';
import websiteData from '@client/data/pages/index';
/* Rename classname with company name once final */

const UI = () => {
  return (
    <Router>
      <Header {...headerData} />
      <Routes>
        <Route path='/' element={<Home {...websiteData.home} />} />
        <Route
          path='/solutions/:id'
          element={<Services {...websiteData.services} />}
        />
        <Route path='/resources' element={<Resources />} />
        <Route path='/technologies' element={<Technologies />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default UI;
