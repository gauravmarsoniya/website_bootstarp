import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './core/Header';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Documents from './pages/Documents';
import Home from './pages/Home';
//import Resources from './pages/Resources';
import Technologies from './pages/Technologies';
import Footer from './core/Footer';

import headerData from '@client/data/header/index';
//import websiteData from '@client/data/pages/index';
/* Rename classname with company name once final */

const UI = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className='mt-4'>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path='/technologies'
              element={
                <>
                  <Technologies />
                </>
              }
            />
            <Route path='/documents' element={<Documents />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
};

export default UI;
