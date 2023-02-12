import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaRegClock, FaRegHandshake, FaGlobe, FaRegUser } from 'react-icons/fa';

import Card from '@client/ui/components/Card';
const Features = () => {
  return (
    <div className={'py-5 bg-light'}>
      <Container>
        <Row>
          <Col>
            <Card
              icon={<FaRegClock className={'text-primary'} />}
              title={'On-Time Delivery'}
              text={
                'We take pride in our 100% record of delivering all projects on time and we are motivated to keep that record.'
              }
            />
          </Col>
          <Col>
            <Card
              icon={<FaRegUser className={'text-primary'} />}
              title={'Strong Technical Expertise'}
              text={
                'Our versatility is the key as we hold teams in all major technologies & business verticals.'
              }
            />
          </Col>

          <Col>
            <Card
              icon={<FaRegHandshake className={'text-primary'} />}
              title={'Seamless Collaboration'}
              text={
                'Our flexible nature helps us integrate and use the tools and methodologies our clients are comfortable with.'
              }
            />
          </Col>
          <Col>
            <Card
              icon={<FaGlobe className={'text-primary'} />}
              title={'Available in All Time Zones'}
              text={
                'We Support all major time zones such as PST, CST, MST, BST, EST among others.'
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
