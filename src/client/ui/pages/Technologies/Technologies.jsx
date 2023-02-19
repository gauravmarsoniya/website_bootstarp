import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import styles from './Technologies.module.scss';
import services from '../../../data/pages/services';
import Section from '@client/ui/components/Section';
import Typography from '@client/ui/components/Typography';
import ContentBlock from '@client/ui/components/ContentBlock';
import Card from '@client/ui/components/Card';
import CallToAction from '@client/ui/components/CallToAction';
import Faq from '../../components/Faq';

import tempImg from '@client/assets/temp1.jpeg';
const Technologies = (props) => {
  const { id } = useParams();
  //const service = props[id] || {};
  const service = services.magento;
  return (
    <div className={cn(styles.services)}>
      <Section className={styles.header} marginBottom={5}>
        <Container className='py-5'>
          <Row>
            <Col>
              <Typography.Title size={5}>{service.hero.title}</Typography.Title>
              <Typography.Paragraph>
                {service.hero.description}
              </Typography.Paragraph>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section marginBottom={5}>
        <Container>
          <ContentBlock
            title={service.title}
            titleSize={1}
            paragraphs={[service.description]}
            rowReverse={false}
          />
        </Container>
      </Section>
      <Section marginBottom={5}>
        <Container className='text-center'>
          <Row className='justify-content-center'>
            <Col mg={9} lg={8}>
              <div className='text-center'>
                <Typography.Title size={2}>
                  {service.services.title}
                </Typography.Title>
                <Typography.Paragraph marginBottom={5}>
                  {service.services.description}
                </Typography.Paragraph>
              </div>
            </Col>
          </Row>
          <Row className='g-3'>
            {service.services.items.map((item) => (
              <Col key={item.id} sm={6} md={6} lg={4} xl={3}>
                <Card
                  title={item.title}
                  text={item.description}
                  hover={true}
                  padding={4}
                ></Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      <CallToAction
        title={'Need Some Help?'}
        description={
          'Whether you’re stuck or just want some tips on where to start, hit up our experts anytime.'
        }
      />
      <Section marginBottom={5}>
        <Container>
          <ContentBlock
            image={tempImg}
            title={'Why Hire from [our company]'}
            titleSize={2}
            paragraphs={[
              'adsadsa asd sdsad asd dsa dasd asd sad sadads dsad rwer erwer  ewrwe rewr wer wer dfsd f grgdfd dsd ad sdas d ad  weweqwe qwe  sad asd ad ad f dfggdfgf sas da dasd  qweqweqw e ads ad ad  fwere dsf sdf  dad a d wqeqwe qwe  dasd sa dasd fgsd ad a dsdad sad sda d sdasdwqewqeqwe e dasd as dasdad dasda  d sad sd asdsa dasdasd  weqwe weqw eq  a d sa d adasdasdasd dasd qw e wq eewwfds fdsf  ad asd a dd ad',
            ]}
            rowReverse={true}
          />
        </Container>
      </Section>
      <Section marginBottom={5}>
        <Container>
          <Faq
            title={service.faq.title}
            description={service.faq.description}
            faqs={service.faq.items}
          />
        </Container>
      </Section>
    </div>
  );
};

export default Technologies;
