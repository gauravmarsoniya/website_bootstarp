import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import cn from 'classnames';
import { TfiWorld } from 'react-icons/tfi';

import logoImg from '@client/assets/logo.png';

import styles from './Navbar.module.scss';
import { useRef } from 'react';

const HeaderNavbar = (props) => {
  const menus = props.menus || [];
  const [isSticky, setIsStickey] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 60;
      if (isSticky !== show) {
        setIsStickey(show);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <Navbar
      collapseOnSelect
      sticky='top'
      expand='lg'
      className={cn({
        'position-fixed top-0 w-100 shadow bg-white': isSticky,
      })}
    >
      <Container className={'my-2'}>
        <Navbar.Brand>
          <div className='display-6'>
            <TfiWorld className='text-primary ' />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Offcanvas id='responsive-navbar-nav' placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              <img
                src={logoImg}
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt='Comapny logo'
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='flex-row-reverse'>
            <Nav>
              <Nav.Item>
                <Nav.Link href='/'>{'Home'}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/'>{'Services'}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/'>{'Technologies'}</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href='/'>{'Blog'}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/'>{'About us'}</Nav.Link>
              </Nav.Item>

              <Nav.Item className='mx-2'>
                <Button variant='primary'>Get A Quote</Button>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
