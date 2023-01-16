import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './index.module.scss';
const Banner = () => {
  return (
    <section className={cn(styles.banner)}>
      <Container>
        <Row className={'align-items-center'}>
          <Col lg={6} className={'center-block'}>
            <div className={styles.content}>
              <h1 className={'display-5'}>Build Your Business Easy Solution</h1>
              <p className={'lead'}>
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img src='https://www.betasofttechnology.com/wp-content/uploads/2022/03/react-banner1.png' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
