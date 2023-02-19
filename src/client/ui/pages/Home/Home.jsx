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
              <Typography.Paragraph standOut={true}>
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
      <Section id='services' marginBottom={5}>
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
              paragraphs={item.paragraphs}
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
                <Card
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                  transparent={true}
                  flat={true}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section marginBottom={5}>
        <Container>
          <ContentBlock
            image={tempImage}
            title={'Who We Are'}
            paragraphs={[
              'Being one of the best IT consulting companies in the US market,we have delivered IT solutions at a global level by leveraging the full potential of the latest disruptive technologies.',
              'We are purists in cognitive computing, hyper-automation, and analytics to help enterprises reimagine their businesses for the digital age. Our technical prowess accelerates your enterprise cloud journey and our AI-powered core makes us your change agent. We evolve with the power of our innovation ecosystem to deliver exceptional customer service.',
              'Our agile hiring models and relentless focus on customer delight have garnered the trust as the best software development company to outsource offshore IT Consulting services.',
            ]}
          />
        </Container>
      </Section>

      <CallToAction />
      <Section marginBottom={5}>
        <Container>
          <ContentBlock
            rowReverse={true}
            image={tempImage}
            title={'Do you Want to Hire Dedicated Developers for Your Project?'}
            paragraphs={[
              'Hiring dedicated resources which would help you to take business growth on higher levels along with reducing overhead costs such as, recruitment cost, promotion, training expenditure;infrastructure cost etc. is a tough and important task.',
            ]}
            buttons={[
              { variant: 'outline-secondary', text: 'Learn more' },
              { variant: 'primary', text: 'Get A Quote' },
            ]}
          />
        </Container>
      </Section>
      <Testimonial />
    </div>
  );
};

export default Home;
