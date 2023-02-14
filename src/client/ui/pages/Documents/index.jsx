import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import Typography from '@client/ui/components/Typography';

const Documents = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xl={2} md={3} className='bg-light'>
          <Nav
            defaultActiveKey='#typography'
            className='flex-column pt-5'
            variant='pills'
          >
            <Nav.Link href='#typography'>Typography</Nav.Link>
            <Nav.Link eventKey='link-1'>Link</Nav.Link>
            <Nav.Link eventKey='link-2'>Link</Nav.Link>
            <Nav.Link eventKey='disabled' disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Col>

        <Col>
          <main className='pt-5 ps-5'>
            <section>
              <Typography.Title size={1} marginBottom={5}>
                Typography.Title 1
              </Typography.Title>
              <Typography.Title size={2} marginBottom={4}>
                Typography.Title 2
              </Typography.Title>
              <Typography.Title size={3} marginBottom={3}>
                Typography.Title 3
              </Typography.Title>
              <Typography.Title size={4} marginBottom={2}>
                Typography.Title 4
              </Typography.Title>
              <Typography.Title size={5} marginBottom={1}>
                Typography.Title 5
              </Typography.Title>
              <Typography.Title size={6}>Typography.Title 6</Typography.Title>
              <hr />
              <Typography.Title size={1} standOut={true}>
                Typography.Title Display 1
              </Typography.Title>
              <Typography.Title size={2} standOut={true}>
                Typography.Title Display 2
              </Typography.Title>
              <Typography.Title size={3} standOut={true}>
                Typography.Title Display 3
              </Typography.Title>
              <Typography.Title size={4} standOut={true}>
                Typography.Title Display 4
              </Typography.Title>
              <Typography.Title size={5} standOut={true}>
                Typography.Title Display 5
              </Typography.Title>
              <Typography.Title size={6} standOut={true}>
                Typography.Title Display 6
              </Typography.Title>
              <hr />
              <Typography.Paragraph>
                Typography.Paragraph asdas sdsdas as dasda dsd sd sdasd sad
                asdasd ad asdasdasd sad asdsa dasd dasdasdsa das das sadsa dasd
                asd sadas ddsa dasda asdasdad.
              </Typography.Paragraph>
              <Typography.Paragraph standOut={true}>
                Typography.Paragraph asdas sdsdas as dasda dsd sd sdasd sad
                asdasd ad asdasdasd sad asdsa dasd dasdasdsa das das sadsa dasd
                asd sadas ddsa dasda asdasdad.
              </Typography.Paragraph>
            </section>
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default Documents;
