import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../../components/Card';

import styles from './index.module.scss';
import ecomDevImage from '../../../../assets/ecom-dev.png';
import webDevImage from '../../../../assets/web-dev.png';
import gameDevImage from '../../../../assets/game-dev.png';
import blockchainDevImage from '../../../../assets/blockchain-dev.png';
import digitalTransformationDevImage from '../../../../assets/digital-transformation.png';
import appDevImage from '../../../../assets/app-dev.png';
const OurServices = () => {
  const services = [
    {
      id: 'S1',
      variant: 'top',
      image: webDevImage,
      title: 'Web Development',
      text: 'Our certified web developers work across the latest technologies to develop scalable websites and web applications for your business growth.',
    },
    {
      id: 'S2',
      variant: 'top',
      image: ecomDevImage,
      title: 'E-Commerce Solutions',
      text: 'Our tailor-made enterprise e-commerce solutions comprise a range of products and IT services that gives a dynamic boost to your business.',
    },
    {
      id: 'S3',
      variant: 'top',
      image: digitalTransformationDevImage,
      title: 'Digital Transformation',
      text: 'Our design engineers have hands-on experience using immersive technologies such as IoT, Blockchain, AR, MR, and VR to enhance real-time experiences.',
    },
    {
      id: 'S4',
      variant: 'top',
      image: appDevImage,
      title: 'Mobile App Development',
      text: 'As the best mobile app development company, we are experts in developing native and cross-platform mobile apps suitable for all business verticals.',
    },
    {
      id: 'S5',
      variant: 'top',
      image: gameDevImage,
      title: 'Game Development',
      text: 'Turn your gaming visions into reality by creating stunning games that work flawlessly on Android, iOS and Console devices.',
    },
    {
      id: 'S6',
      variant: 'top',
      image: blockchainDevImage,
      title: 'Blockchain Development',
      text: 'Revolutionize your business with an experienced blockchain service provider to develop and manage decentralized solutions in the global financial sector.',
    },
  ];
  return (
    <div className={cn(styles.serviceArea, 'pt-5 pb-5 mb-5')}>
      <Container className={styles.ourServices}>
        <Row>
          <Col>
            <div className='title-area text-center mb-5'>
              <h6 className={'text-primary mb-3'}>Our Services</h6>
              <h1>Service We Provide</h1>
            </div>
          </Col>
        </Row>
        <Row className='g-4 mt--5'>
          {services.map((service) => (
            <Col key={service.id} xl={3} lg={4} md={4} sm={6}>
              <Card {...service} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
