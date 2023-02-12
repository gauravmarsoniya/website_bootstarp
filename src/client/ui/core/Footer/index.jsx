import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaTwitter,
  FaSkype,
  FaWhatsapp,
  FaLinkedinIn,
  FaLocationArrow,
} from 'react-icons/fa';

import logoImg from '@client/assets/logo.png';

import Copyright from './Copyright';
const Footer = () => {
  return (
    <footer>
      <Container className={'py-5'}>
        <Row className='gap-4'>
          <Col lg={12} md={12} sm={12}>
            <a>
              <img
                src={logoImg}
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt='Comapny logo'
              />
            </a>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Stack gap={1}>
              <p>
                Nullam erat ametam arcu lorme pharetra id risus act sectetur
                ipsum luctus est ullam erat ametam arcu lorme pharetra id us act
                sectetur ipsum luctus est. Vestibulum in accumsa maga eds
                maurise elit tincidunt turpis id semper.
              </p>
              <ListGroup horizontal>
                <ListGroup.Item className='border-0 ps-0'>
                  <FaSkype />
                </ListGroup.Item>
                <ListGroup.Item className='border-0'>
                  <FaLinkedinIn />
                </ListGroup.Item>
                <ListGroup.Item className='border-0'>
                  <FaWhatsapp />
                </ListGroup.Item>
                <ListGroup.Item className='border-0'>
                  <FaTwitter />
                </ListGroup.Item>
              </ListGroup>
            </Stack>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <ListGroup>
              <ListGroup.Item className='d-flex border-0 pt-0 gap-2'>
                <div className='fs-6'>
                  <FaLocationArrow />
                </div>
                <address className='mb-0'>
                  134, XXXXX Building, Some Near by area, Ahmedabad, INDIA -
                  380001
                </address>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex border-0 gap-2'>
                <div className='fs-6'>
                  <FaClock />
                </div>
                <div>8.00 AM - 6:00PM</div>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex  border-0 gap-2'>
                <div className='fs-6'>
                  <FaPhoneAlt />
                </div>

                <div>+1 234 4567 8910</div>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex border-0 gap-2'>
                <div className='fs-6'>
                  <FaEnvelope />
                </div>
                <div>info@domain.com</div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2} md={2} sm={12}>
            <ListGroup>
              <ListGroup.Item className='border-0 pt-0'>
                About us
              </ListGroup.Item>
              <ListGroup.Item className='border-0'>
                Hire resources
              </ListGroup.Item>
              <ListGroup.Item className='border-0'>Service</ListGroup.Item>
              <ListGroup.Item className='border-0'>Career</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Copyright />
    </footer>
  );
};

export default Footer;
