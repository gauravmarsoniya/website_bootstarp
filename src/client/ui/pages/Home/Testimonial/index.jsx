import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const Testimonial = () => {
  return (
    <div className={'text-bg-light py-5'}>
      <Container>
        <Row className={'justify-content-center'}>
          <Col md={9} lg={8}>
            <div className={'text-center mb-5'}>
              <h2>What Our Customers Say About Us?</h2>
              <p className='lead'>
                Authoritatively reinvent client-centric e-markets via fully
                tested process improvements. Objectively restore strategic
                initiatives through fully researched.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            <Container>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 2,
                  },
                  '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 2,
                  },
                  '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 2,
                  },
                  '@1.50': {
                    slidesPerView: 3,
                    spaceBetween: 2,
                  },
                }}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
                }}
              >
                {[1, 2, 3].map((item) => (
                  <SwiperSlide>
                    <Card className={'w-75 align-items-center p-4'}>
                      <Card.Img
                        className={'w-25 mb-3'}
                        variant='top'
                        src='https://shreethemes.in/starty/images/client/01.jpg'
                      />
                      <Card.Body className={'text-center'}>
                        <Card.Text>
                          <p className={'text-muted fst-italic'}>
                            " One disadvantage of Lorum Ipsum is which creates a
                            distinct visual impression. "
                          </p>
                          <div>
                            <small class='text-uppercase fw-semibold d-block'>
                              Shelly Goodman
                            </small>
                            <small className='text-muted'>Manager</small>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
