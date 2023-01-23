import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Copyright = () => {
  return (
    <div className={'bg-dark border-top py-3'}>
      <Container>
        <Row className={'align-items-center justify-content-between'}>
          <Col sm={4}>
            <div className={'text-sm-start text-center'}>
              <p className={'mb-0 text-muted'}>Website</p>
            </div>
          </Col>
          <Col sm={8}>
            <div className={'text-sm-end text-center'}>
              <p className={'mb-0 text-muted'}>
                Copyrights © 2021. All rights reserved by Website
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Copyright;
