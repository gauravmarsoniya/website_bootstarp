import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from '@client/ui/components/Section';
import Typography from '@client/ui/components/Typography';
const Faq = ({ title, description, faqs }) => {
  return (
    <>
      <Row className='justify-content-center'>
        <Col md={9} lg={8}>
          <div className='text-center'>
            <Typography.Title size={2}>{title}</Typography.Title>
            <Typography.Paragraph marginBottom={5}>
              {description}
            </Typography.Paragraph>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <Accordion defaultActiveKey='1' flush>
            {faqs.map((faq) => (
              <Accordion.Item key={faq.id} eventKey={faq.id}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default Faq;
