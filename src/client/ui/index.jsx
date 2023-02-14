import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './core/Header';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Documents from './pages/Documents';
import Home from './pages/Home';
//import Services from './pages/Services';
//import Resources from './pages/Resources';
//import Technologies from './pages/Technologies';
import Footer from './core/Footer';

import headerData from '@client/data/header/index';
//import websiteData from '@client/data/pages/index';
/* Rename classname with company name once final */

const UI = () => {
  return (
    <>
      <Topbar />
      <Navbar />

      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route path='/documents' element={<Documents />} />
        </Routes>
      </Router>
    </>
  );
};

export default UI;
