import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const MyNavbar = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand>Website</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Item>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>

            <NavDropdown title='Solutions' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/solutions/ui-ux-services'>
                UI/UX Services
                <Container style={{ width: '400px' }}>Hello</Container>
              </NavDropdown.Item>
              <NavDropdown.Item href='/solutions/development'>
                Development
              </NavDropdown.Item>
              <NavDropdown.Item href='/solutions/digital-marketing'>
                Digital marketing
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
            <NavDropdown title='Resources' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Partnerships
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Protfolio</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Our team</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>FAQ</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Careers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href='/technologies'>Technologies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/blog'>Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contactus'>Contact us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
