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
        <Carousel fade variant='dark' controls={false} indicators={false}>
          <Carousel.Item>
            <Row className={'justify-content-between'}>
              <Col lg={6} className={'center-block'}>
                <div className={'mt-lg-5 mt-md-5'}>
                  <h1>For Unique Domain Search!</h1>
                  <p className={'lead text-muted'}>
                    Quickly design and customize responsive mobile-first sites
                    with Bootstrap, the world’s most popular front-end open
                    source toolkit, featuring Sass variables and mixins,
                    responsive grid system, extensive prebuilt components, and
                    powerful JavaScript plugins
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
                  <h1>For Unique Domain Search!</h1>
                  <p className={'lead text-muted'}>
                    Quickly design and customize responsive mobile-first sites
                    with Bootstrap, the world’s most popular front-end open
                    source toolkit, featuring Sass variables and mixins,
                    responsive grid system, extensive prebuilt components, and
                    powerful JavaScript plugins
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
