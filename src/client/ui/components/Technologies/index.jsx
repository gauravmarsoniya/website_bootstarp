import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import homeData from '@client/data/pages/home/index';

const Technologies = () => {
  return (
    <div className={'text-bg-light py-5'}>
      <Container>
        <Row className={'justify-content-center'}>
          <Col md={9} lg={8}>
            <div className={'text-center mb-5'}>
              <h2>{homeData.technologies.title}</h2>
              <p className='lead'>{homeData.technologies.description}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <Swiper
                modules={[Autoplay]}
                {...homeData.technologies.pluginProps}
              >
                {homeData.technologies.items.map((item, index) => (
                  <SwiperSlide key={index}>{item}</SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;
