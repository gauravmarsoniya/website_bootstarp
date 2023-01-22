import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <Col md={12} lg={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
