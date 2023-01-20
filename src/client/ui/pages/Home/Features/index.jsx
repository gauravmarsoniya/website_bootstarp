import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineFieldTime, AiOutlineTeam } from 'react-icons/ai';
import { ImEarth } from 'react-icons/im';
const Features = () => {
  return (
    <div className={'text-bg-light py-5'}>
      <Container>
        <Row>
          <Col>
            <AiOutlineFieldTime size={48} className={'mb-3'} />
            <h5>On-Time Delivery</h5>
            <p className='text-muted'>
              We take pride in our 100% record of delivering all projects on
              time and we are motivated to keep that record.
            </p>
          </Col>
          <Col>
            <AiOutlineTeam size={48} className={'mb-3'} />
            <h5>Strong Technical Expertise</h5>
            <p className='text-muted'>
              Our versatility is the key as we hold teams in all major
              technologies & business verticals.
            </p>
          </Col>
          <Col>
            <AiOutlineFieldTime size={48} className={'mb-3'} />
            <h5>Seamless Collaboration</h5>
            <p className='text-muted'>
              Our flexible nature helps us integrate and use the tools and
              methodologies our clients are comfortable with.
            </p>
          </Col>
          <Col>
            <ImEarth size={48} className={'mb-3'} />
            <h5>Available in All Time Zones</h5>
            <p className='text-muted'>
              We Support all major time zones such as PST, CST, MST, BST, EST
              among others.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
