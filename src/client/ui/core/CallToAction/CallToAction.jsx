import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './CallToAction.module.scss';
const CallToAction = () => {
  return (
    <section className={cn(styles.CallToAction, 'bg-primary')}>
      <Container className='py-5'>
        <Row className='justify-content-between align-items-center'>
          <Col md={8}>
            <h2 className='text-white'>Need Some Help?</h2>
            <p className='lead text-white'>
              Whether you’re stuck or just want some tips on where to start, hit
              up our experts anytime.
            </p>
          </Col>
          <Col md={4}>
            <Button variant='outline-light'>Chat with us</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
