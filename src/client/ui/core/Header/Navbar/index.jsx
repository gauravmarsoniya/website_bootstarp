import { Row, Col, NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './index.scss';

const TopNav = (props) => {
  const menus = props.menus || [];
  return (
    <Navbar
      collapseOnSelect
      bg='white'
      variant='light'
      expand='lg'
      sticky='top'
      className={cn('navbar', 'border-bottom')}
    >
      <Container className={'my-2'}>
        <Navbar.Brand>Website</Navbar.Brand>
        <Navbar.Toggle aria-controls='esponsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className={'me-auto'}></Nav>
          <Nav>
            {menus.map((menu) => {
              if (menu.submenus) {
                return (
                  <NavDropdown
                    key={menu.key}
                    className={cn('hasMegaMenu', 'mx-2')}
                    title={menu.key}
                  >
                    <Container className='p-4'>
                      <Row className='g-3'>
                        {menu.submenus.map((submenu) => (
                          <Col sm={6} md={4} lg={3}>
                            <h6>{submenu.key}</h6>
                            {submenu.submenus.map((subsubmenu) => (
                              <div>
                                <Link
                                  className={'px-0'}
                                  to={`/solutions/${subsubmenu.key}`}
                                >
                                  {subsubmenu.key}
                                </Link>
                              </div>
                            ))}
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </NavDropdown>
                );
              } else {
                return (
                  <Nav.Item key={menu.key} className={'mx-2'}>
                    {menu.type === 'button' ? (
                      <Button variant='primary'>Get Started</Button>
                    ) : (
                      <Nav.Link href='/'>{menu.key}</Nav.Link>
                    )}
                  </Nav.Item>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
