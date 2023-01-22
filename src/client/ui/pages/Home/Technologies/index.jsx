import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper';

import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaDrupal,
  FaReact,
  FaAngular,
  FaVuejs,
  FaHtml5,
  FaPhp,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiFlutter,
  SiIonic,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
} from 'react-icons/si';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './index.module.scss';
const Technologies = () => {
  return (
    <div className={cn(styles.technologies, 'text-bg-light py-5')}>
      <Container>
        <Row className={'justify-content-center'}>
          <Col md={9} lg={8}>
            <div className={'text-center mb-5'}>
              <h2>Technologies We Work</h2>
              <p className='lead'>
                Authoritatively reinvent client-centric e-markets via fully
                tested process improvements. Objectively restore strategic
                initiatives through fully researched.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  '@0.00': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  '@0.75': {
                    slidesPerView: 8,
                    spaceBetween: 10,
                  },
                  '@1.00': {
                    slidesPerView: 12,
                    spaceBetween: 10,
                  },
                  '@1.50': {
                    slidesPerView: 16,
                    spaceBetween: 10,
                  },
                }}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <FaMagento size={48} color={'#f46f25'} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaWordpress size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaShopify size={48} color={'#96bf48'} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaDrupal size={48} color={'#25AAE1'} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaReact size={48} />
                </SwiperSlide>

                <SwiperSlide>
                  <FaAngular size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaVuejs size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaHtml5 size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaPhp size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaPython size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <FaNodeJs size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <SiFlutter size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <SiIonic size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <SiMongodb size={48} />
                </SwiperSlide>

                <SwiperSlide>
                  <SiMysql size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <SiPostgresql size={48} />
                </SwiperSlide>
                <SwiperSlide>
                  <SiFirebase size={48} />
                </SwiperSlide>
              </Swiper>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;
