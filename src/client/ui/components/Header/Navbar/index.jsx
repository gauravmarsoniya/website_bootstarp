import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import cn from 'classnames';
import styles from './index.module.scss';
const TopNav = () => {
  return (
    <Navbar
      collapseOnSelect
      bg='white'
      variant='light'
      expand='lg'
      sticky='top'
      className={cn(styles.navbar, 'border-bottom')}
    >
      <Container className={'my-2'}>
        <Navbar.Brand>Website</Navbar.Brand>
        <Navbar.Toggle aria-controls='esponsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className={'me-auto'}></Nav>
          <Nav>
            <Nav.Item className={'mx-2'}>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>

            <NavDropdown className={'mx-2'} title='Services'>
              <NavDropdown.Item href='/solutions/ui-ux-services'>
                <NavDropdown className={'mx-2'} title='E-Commerce solutions'>
                  <NavDropdown.Item href='/solutions/development'>
                    Web development
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown.Item>
              <NavDropdown.Item href='/solutions/development'>
                Web development
              </NavDropdown.Item>
              <NavDropdown.Item href='/solutions/digital-marketing'>
                Mobile App Development
              </NavDropdown.Item>
              <NavDropdown.Item href='/solutions/qa'>QA</NavDropdown.Item>
              <NavDropdown.Item href='/solutions/rpo'>RPO</NavDropdown.Item>
              <NavDropdown.Item href='/solutions/consulting'>
                Consulting Service
              </NavDropdown.Item>
              <NavDropdown.Item href='/solutions/cloud'>
                Cloud solution
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item className={'mx-2'}>
              <Nav.Link href='/blog'>Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className={'mx-2'}>
              <Nav.Link href='/contactus'>About us</Nav.Link>
            </Nav.Item>
            <Nav.Item className={'mx-3'}>
              <Button variant='primary'>Get Started</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
