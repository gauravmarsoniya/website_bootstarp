import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import styles from './index.module.scss';
const Solutions = (props) => {
  const { id } = useParams();
  const service = props[id] || {};
  return (
    <div className={cn(styles.services)}>
      <section className={cn(styles.header, 'py-5')}>
        <Container className=''>
          <Row>
            <Col>
              <div className='text-white'>
                <h1 className='mb-2'>{service.hero.title}</h1>
                <p className='lead'>{service.hero.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className='mb-5'>
        <Row className={'pt-5 justify-content-between'}>
          <Col lg={6} className={'center-block'}>
            <div className={'mt-lg-5 mt-md-5'}>
              <h1>{service.title}</h1>

              <p className={'text-muted'}>{service.description}</p>
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
              <h2>{service.services.title}</h2>
              <p className='lead'>{service.services.description}</p>
            </div>
          </Col>
        </Row>
        <Row className='g-5'>
          {service.services.items.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={3}>
              <Card className={'p-4'}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <p className={'text-muted fst-italic'}>
                      {item.description}
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
              <h2>{service.faq.title}</h2>
              <p>
                {service.faq.description}
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
              {service.faq.items.map((item) => (
                <Accordion.Item key={item.id} eventKey={1}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
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
