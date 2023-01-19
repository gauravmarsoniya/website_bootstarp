import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../../components/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import styles from './index.module.scss';
import ecomDevImage from '../../../../assets/ecom-dev.png';
import webDevImage from '../../../../assets/web-dev.png';
import blockchainDevImage from '../../../../assets/blockchain-dev.png';
import appDevImage from '../../../../assets/app-dev.png';

import { FaArrowRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
const OurServices = () => {
  const services = [
    {
      id: 'S1',
      image: ecomDevImage,
      title: 'E-Commerce Solutions',
      text: 'Our tailor-made enterprise e-commerce solutions comprise a range of products and IT services that gives a dynamic boost to your business.',
      links: [
        { label: 'Magento' },
        { label: 'WooCommerce' },
        { label: 'shopify' },
        { label: 'OXID' },
      ],
    },
    {
      id: 'S2',
      image: webDevImage,
      title: 'Frontend Development',
      text: 'Our certified web developers work across the latest technologies to develop scalable websites and web applications for your business growth.',
      links: [
        { label: 'React' },
        { label: 'Angular' },
        { label: 'Veu.js' },
        { label: 'NodeJs' },
      ],
    },
    {
      id: 'S3',
      image: blockchainDevImage,
      title: 'CMS Solutions',
      text: 'Our tailor-made enterprise e-commerce solutions comprise a range of products and IT services that gives a dynamic boost to your business.',
      links: [{ label: 'Wordpress' }, { label: 'Drupla' }],
    },
    {
      id: 'S4',
      image: appDevImage,
      image: appDevImage,
      title: 'Mobile App Development',
      text: 'As the best mobile app development company, we are experts in developing native and cross-platform mobile apps suitable for all business verticals.',
      links: [
        { label: 'ios' },
        { label: 'Andriod' },
        { label: 'React native' },
        { label: 'PWA' },
      ],
    },
  ];
  return (
    <div className={cn(styles.ourServices, 'py-5')}>
      <Container>
        <Row className={'justify-content-center mb-5'}>
          <Col className={'text-center'}>
            <h1>Our Expertise In</h1>
            <p className={'lead text-muted'}>
              We provide full-tech solutions to retain the attention of the
              target audience and leave a long-term impression on the business.
            </p>
          </Col>
        </Row>
        {services.map((service, index) => (
          <Row className={cn(styles.service, 'justify-content-between')}>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className={index % 2 === 0 ? 'order-lg-0' : 'order-lg-1'}
            >
              <Image src={service.image} fluid />
            </Col>
            <Col sm={12} md={12} lg={6} className={'my-auto'}>
              <h3>{service.title}</h3>
              <p className={'text-muted'}>{service.text}</p>
              {service.links && (
                <Row className={'gy-3'}>
                  {service.links.map((link) => (
                    <Col sm={6}>
                      <Button
                        variant='link'
                        className='text-muted text-decoration-none p-0 border-0'
                      >
                        <FaArrowRight className={styles.linkIcon} />
                        {link.label}
                      </Button>
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default OurServices;
