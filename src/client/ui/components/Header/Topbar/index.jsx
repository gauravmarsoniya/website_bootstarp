import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import ListGroup from 'react-bootstrap/ListGroup';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import styles from './index.module.scss';
const Topbar = () => {
  return (
    <div className={cn(styles.topbar, 'text-bg-light')}>
      <Container>
        <Stack direction='horizontal' gap={3}>
          <ListGroup horizontal>
            <ListGroup.Item className='border-0 ps-0 text-bg-light'>
              <a className='text-muted'>
                <FaEnvelope className={'text-primary'} />
                <small className='d-inline-block ms-1'>
                  support@support.com
                </small>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className='border-0 ps-0 text-bg-light'>
              <a className='text-muted'>
                <FaPhoneAlt className={'text-primary'} />
                <span className={'d-inline-block ms-1'}>91-987654321</span>
              </a>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal className='ms-auto d-none d-md-flex d-lg-flex'>
            <ListGroup.Item className='border-0 px-2 text-bg-light'>
              <a className='text-muted'>
                <FaFacebookF />
              </a>
            </ListGroup.Item>
            <ListGroup.Item className='border-0 px-2 text-bg-light'>
              <a className='text-muted'>
                <FaInstagram />
              </a>
            </ListGroup.Item>
            <ListGroup.Item className='border-0 px-2 text-bg-light'>
              <a className='text-muted'>
                <FaTwitter />
              </a>
            </ListGroup.Item>
            <ListGroup.Item className='border-0 px-2 text-bg-light'>
              <a className='text-muted'>
                <FaLinkedin />
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Stack>
      </Container>
    </div>
  );
};

export default Topbar;
