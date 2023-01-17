import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import styles from './index.module.scss';
import magantoDev from '../../../../assets/magento-developer.png';
import reactjs from '../../../../assets/reactjs.png';
const Banner = () => {
  return (
    <section className={cn(styles.banner)}>
      <Container>
        <Carousel variant='dark' controls={false} indicators={false}>
          <Carousel.Item>
            <Row className={'justify-content-between'}>
              <Col lg={6} className={'center-block'}>
                <div className={'mt-lg-5 mt-md-5'}>
                  <h1>Magento Development</h1>
                  <p className={'lead text-muted'}>
                    Magento is an ecommerce website platform owned by Adobe that
                    specializes in ecommerce websites. Magento users have access
                    to hundreds of unique features that help them connect with
                    their customers and sell their products.
                  </p>
                </div>
              </Col>
              <Col lg={5}>
                <div className={styles.image}>
                  <img src={magantoDev} />
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className={'justify-content-between'}>
              <Col lg={6} className={'center-block'}>
                <div className={'mt-lg-5 mt-md-5'}>
                  <h1>React js Web & Mobile App Development</h1>
                  <p className={'lead text-muted'}>
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on UI components.React
                    can be used as a base in the development of single-page,
                    mobile, or server-rendered applications with frameworks like
                    Next.js
                  </p>
                </div>
              </Col>
              <Col lg={5}>
                <div className={styles.image}>
                  <img src={reactjs} />
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Banner;
