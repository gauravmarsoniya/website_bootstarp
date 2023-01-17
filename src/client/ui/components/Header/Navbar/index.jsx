import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNav = () => {
  return (
    <Navbar
      collapseOnSelect
      bg='white'
      variant='light'
      expand='lg'
      sticky='top'
      className={'border-bottom'}
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

            <NavDropdown className={'mx-2'} title='Solutions'>
              <NavDropdown.Item href='/solutions/ui-ux-services'>
                UI/UX Services
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
            <NavDropdown className={'mx-2'} title='Resources'>
              <NavDropdown.Item href='#action/3.1'>
                Partnerships
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Protfolio</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Our team</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>FAQ</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Careers</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item className={'mx-2'}>
              <Nav.Link href='/technologies'>Technologies</Nav.Link>
            </Nav.Item>
            <Nav.Item className={'mx-2'}>
              <Nav.Link href='/blog'>Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className={'mx-2'}>
              <Nav.Link href='/contactus'>Contact Us</Nav.Link>
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
