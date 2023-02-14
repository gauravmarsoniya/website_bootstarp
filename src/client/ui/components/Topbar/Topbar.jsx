import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaSkype,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';
import styles from './Topbar.module.scss';
const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <Container className='py-3'>
        <Row className='align-items-center'>
          <Col>
            <Stack direction='horizontal' gap={3}>
              <a className='d-flex align-items-center mr-4'>
                <FaEnvelope />

                <span className='d-none d-md-inline-block ms-2'>
                  info@domain.com
                </span>
              </a>
              <a href='#' className='d-flex align-items-center mr-auto'>
                <FaPhoneAlt />
                <span class='d-none d-md-inline-block ms-2'>
                  +1 234 4567 8910
                </span>
              </a>
            </Stack>
          </Col>
          <Col className='text-end'>
            <div className='mr-auto'>
              <a className='p-2' href='skype:nalin.savaliya?chat'>
                <FaSkype />
              </a>
              <a className='p-2'>
                <FaLinkedinIn />
              </a>
              <a className='p-2'>
                <FaWhatsapp />
              </a>
              <a className='p-2'>
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
