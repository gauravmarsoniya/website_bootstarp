import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import Copyright from './Copyright';
const Footer = () => {
  return (
    <footer className={'text-light bg-dark'}>
      <Container className={'py-5'}>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <h6 className={'mb-3'}>Comapny</h6>
            <ListGroup>
              <ListGroup.Item className='bg-dark text-muted border-0'>
                About us
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-muted border-0'>
                Hire resources
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-muted border-0'>
                Service
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-muted border-0'>
                Career
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <h6 className={'mb-3'}>Location</h6>
            <address className={'text-muted'}>
              X Floor, X Company,
              <br />
              X Road,
              <br />
              Near X Business Center,
              <br />
              Ahmedabad - XXXXXX.
              <br />
              Gujarat, India
            </address>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <h6 className={'mb-3'}>Usefull links</h6>
            <ListGroup>
              <ListGroup.Item className='bg-dark text-muted border-0'>
                Sitemap
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-muted border-0'>
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-muted border-0'>
                Changelog
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <h6 className={'mb-3'}>Contact us</h6>
            <ul className={'text-muted'}>
              <li>support@support.com</li>
              <li>91-987654321</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Copyright />
    </footer>
  );
};

export default Footer;
