import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@client/ui/core/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { FaArrowRight } from 'react-icons/fa';

import { ReactComponent as BaSVG } from '@client/assets/ba1.svg';

import homeData from '@client/data/pages/home/index';

import styles from './index.module.scss';

const OurServices = () => {
  return (
    <div className={cn(styles.ourServices, 'py-5')}>
      <Container>
        <Row className={'justify-content-center mb-5'}>
          <Col className={'text-center'}>
            <h1>{homeData.services.title}</h1>
            <p className={'lead'}>{homeData.services.description}</p>
          </Col>
        </Row>
        {homeData.services.items.map((item, index) => (
          <Row
            key={item.key}
            className={cn(styles.service, 'justify-content-between gap-5')}
          >
            <Col
              md={12}
              lg={5}
              className={index % 2 === 0 ? 'order-lg-0' : 'order-lg-1'}
            >
              <div className={styles.imageBox}>
                <BaSVG className={'position-absolute'} />
                <Image src={item.image} fluid />
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} className={'my-auto'}>
              <h3>{item.title}</h3>
              <p className={'text-muted'}>{item.description}</p>
              {item.links && (
                <Row className={'gy-3'}>
                  {item.links.map((link) => (
                    <Col sm={6} key={link.key}>
                      <Button
                        variant='link'
                        className='text-decoration-none p-0 border-0'
                      >
                        <FaArrowRight className={styles.linkIcon} />
                        {link.key}
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
