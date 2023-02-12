import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@client/ui/core/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { FaArrowRight } from 'react-icons/fa';

import tempImage from '@client/assets/ecom-dev.png';
const Who = () => {
  return (
    <div>
      <Container className='py-5'>
        <Row className='justify-content-between gap-5'>
          <Col sm={12} md={5} lg={5}>
            <div>
              <Image src={tempImage} fluid />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <h3>{'Who We Are'}</h3>
            <p>
              Being one of the best IT consulting companies in the US market, we
              have delivered IT solutions at a global level by leveraging the
              full potential of the latest disruptive technologies.
            </p>
            <p>
              We are purists in cognitive computing, hyper-automation, and
              analytics to help enterprises reimagine their businesses for the
              digital age. Our technical prowess accelerates your enterprise
              cloud journey and our AI-powered core makes us your change agent.
              We evolve with the power of our innovation ecosystem to deliver
              exceptional customer service.{' '}
            </p>
            <p>
              Our agile hiring models and relentless focus on customer delight
              have garnered the trust as the best software development company
              to outsource offshore IT Consulting services.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Who;
