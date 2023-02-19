import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Typography from '@client/ui/components/Typography';
import Section from '@client/ui/components/Section';
import styles from './CallToAction.module.scss';
const CallToAction = ({ title, description }) => {
  return (
    <Section className={cn('bg-primary')} marginBottom={5}>
      <Container className='py-5'>
        <Row className='justify-content-between align-items-center'>
          <Col md={8}>
            <Typography.Title size={2} className='text-white'>
              {title}
            </Typography.Title>
            <Typography.Paragraph standOut={true} className='text-white'>
              {description}
            </Typography.Paragraph>
          </Col>
          <Col md={4} className='text-end'>
            <Button variant='outline-light'>Chat with us</Button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default CallToAction;
