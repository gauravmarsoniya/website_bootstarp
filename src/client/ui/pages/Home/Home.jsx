import cn from 'classnames';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { FaRegClock, FaRegHandshake, FaGlobe, FaRegUser } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import ContentBlock from '@client/ui/components/ContentBlock';
import CallToAction from '@client/ui/components/CallToAction';
import Card from '@client/ui/components/Card';

import TechSystem from '@client/ui/components/TechSystem';
import Typography from '@client/ui/components/Typography';
import Section from '@client/ui/components/Section';
import homeData from '@client/data/pages/home';

import tempImage from '@client/assets/ecom-dev.png';
import { ReactComponent as BaSVG } from '@client/assets/ba1.svg';

import Testimonial from './Testimonial';

import styles from './Home.module.scss';
const Home = () => {
  return (
    <div className={styles.home}>
      <Section marginBottom={5}>
        <Container>
          <Row className={'justify-content-between'}>
            <Col lg={5} className={'align-self-center'}>
              <Typography.Title size={5} standOut={true}>
                Ready to explore technologies universe with us ?
              </Typography.Title>
              <Typography.Paragraph>
                Engage [company technologies] to build a remote, Agile software
                development team to co-create or update your digital product
                with the latest web, mobile and cloud technologies.
              </Typography.Paragraph>
            </Col>
            <Col lg={7}>
              <TechSystem />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section marginBottom={5}>
        <Container className={cn(styles.ourServices, 'py-5')}>
          <Row className={'justify-content-center mb-5'}>
            <Col className={'text-center'}>
              <h1>{homeData.services.title}</h1>
              <p className={'lead'}>{homeData.services.description}</p>
            </Col>
          </Row>
          {homeData.services.items.map((item, index) => (
            <ContentBlock
              key={index}
              title={item.title}
              paragraph={item.description}
              image={item.image}
              links={item.links}
              rowReverse={index % 2 !== 0}
            />
          ))}
        </Container>
      </Section>
      <Section className={'py-5 bg-light'}>
        <Container>
          <Row>
            {homeData.features.items.map((item, index) => (
              <Col>
                <Card icon={item.icon} title={item.title} text={item.text} />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <div>
        <Container className='py-5'>
          <Row className='justify-content-between gap-5'>
            <Col sm={12} md={5} lg={5}>
              <div>
                <Image src={tempImage} fluid />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <h3>{'Who We Are'}</h3>
              <p>
                Being one of the best IT consulting companies in the US market,
                we have delivered IT solutions at a global level by leveraging
                the full potential of the latest disruptive technologies.
              </p>
              <p>
                We are purists in cognitive computing, hyper-automation, and
                analytics to help enterprises reimagine their businesses for the
                digital age. Our technical prowess accelerates your enterprise
                cloud journey and our AI-powered core makes us your change
                agent. We evolve with the power of our innovation ecosystem to
                deliver exceptional customer service.{' '}
              </p>
              <p>
                Our agile hiring models and relentless focus on customer delight
                have garnered the trust as the best software development company
                to outsource offshore IT Consulting services.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <CallToAction />
      <div>
        <Container className='py-5'>
          <Row className='justify-content-between gap-5'>
            <Col sm={12} md={6} lg={6}>
              <h2>
                Do you Want to Hire Dedicated Developers for Your Project?
              </h2>
              <p>
                Hiring dedicated resources which would help you to take business
                growth on higher levels along with reducing overhead costs such
                as, recruitment cost, promotion, training expenditure;
                infrastructure cost etc. is a tough and important task.
              </p>
              <Button variant='outline-secondary me-4'>Learn more</Button>
              <Button variant='primary'>Get A Quote</Button>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <div>
                <Image src={tempImage} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Testimonial />
      <main></main>
    </div>
  );
};

export default Home;
