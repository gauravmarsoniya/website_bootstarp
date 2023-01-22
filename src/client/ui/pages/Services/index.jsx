import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import cn from 'classnames';
import styles from './index.module.scss';
const Solutions = (props) => {
  console.log('XXXX', props);
  return (
    <div className={cn(styles.services)}>
      <section className={cn(styles.header, 'py-5')}>
        <Container className=''>
          <Row>
            <Col>
              <div className='text-white'>
                <h1 className='mb-2'>Magento Development</h1>
                <p className='lead'>
                  Augment your business by offering an omnichannel experience to
                  customers using our Magento Development Services
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className='mb-5'>
        <Row className={'pt-5 justify-content-between'}>
          <Col lg={6} className={'center-block'}>
            <div className={'mt-lg-5 mt-md-5'}>
              <h1>Hire Magento Developers India</h1>

              <p className={'text-muted'}>
                Magento is one of the most demanded and user-friendly open
                source eCommerce platforms for developing highly-scalable and
                appealing eCommerce stores. eTatvaSoft’s ability as the best
                Magento development company in India offers you to leverage
                diversified libraries of the open-source platform to build
                unique and trailblazing eCommerce Solutions. Our clear vision
                and proficiency in Magento store development services will
                facilitate even your smallest requirements with a responsive and
                intuitive eCommerce solution.
              </p>
            </div>
          </Col>
          <Col lg={5}>
            <div className={''}>
              <img
                className='w-50'
                src={
                  'https://www.etatvasoft.com/public/images/services/magento/magento-main.svg'
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='py-5'>
        <Row className='justify-content-center'>
          <Col mg={9} lg={8}>
            <div className='text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3'>
              <h2>Magento Development Services</h2>
              <p className='lead'>
                Customized, effective and quality-driven custom Magento
                eCommerce Development Services that fit all your unique online
                retail business needs
              </p>
            </div>
          </Col>
        </Row>
        <Row className='g-5'>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col sm={12} md={6} lg={3}>
              <Card className={'p-4'}>
                <Card.Body>
                  <Card.Title>Magento Extensions Development</Card.Title>
                  <Card.Text>
                    <p className={'text-muted fst-italic'}>
                      We build innovative pixel-perfect Magento themes that are
                      responsive, intuitive, mobile friendly and customized for
                      the eCommerce industry to offer exemplary customer
                      experience adhering to Magento standards.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className='mb-5'>
        <Row className='justify-content-center'>
          <Col md={9} lg={8}>
            <div className='mb-4 text-center'>
              <h2>Frequently Asked Queries</h2>
              <p>
                Efficiently productivate reliable paradigms before ubiquitous
                models. Continually utilize frictionless expertise whereas
                tactical relationships. Still have questions?
                <a href='#contact' class='page-scroll'>
                  Contact us
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            <Accordion defaultActiveKey='1' flush>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Accordion.Item eventKey={item}>
                  <Accordion.Header>Accordion Item #{item}</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Solutions;
