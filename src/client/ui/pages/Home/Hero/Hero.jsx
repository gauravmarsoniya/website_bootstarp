import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactComponent as WaveSVG } from '@client/assets/w1.svg';
import TechSystem from './TechSystem';
import styles from './Hero.module.scss';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <WaveSVG className={cn(styles.wave)} />
      <Container classname={styles.carouselContainer}>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <Row className={'justify-content-between'}>
              <Col lg={5} className={'align-self-center'}>
                <div className={styles.info}>
                  <h1>
                    We design, develop and modernize software and web
                    applications.
                  </h1>
                  <p className={'lead text-muted'}>
                    Engage [company technologies] to build a remote, Agile
                    software development team to co-create or update your
                    digital product with the latest web, mobile and cloud
                    technologies.
                  </p>
                </div>
              </Col>
              <Col lg={7}>
                <TechSystem />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Hero;
