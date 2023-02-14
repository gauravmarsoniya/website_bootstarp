import cn from 'classnames';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Typography from '@client/ui/components/Typography';
import { FaArrowRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
const ContentBlock = ({ title, paragraph, image, links, rowReverse }) => {
  console.log('XXXXXXX', rowReverse);
  return (
    <Row
      className={cn('justify-content-between', {
        'flex-row-reverse': rowReverse,
      })}
    >
      {image && (
        <Col md={12} lg={5}>
          <Image src={image} fluid />
        </Col>
      )}
      <Col md={12} lg={6} className={cn('my-auto')}>
        {title && <Typography.Title size={3}>{title}</Typography.Title>}
        {paragraph && <Typography.Paragraph>{paragraph}</Typography.Paragraph>}
        {links && (
          <Row className={'gy-3'}>
            {links.map((link) => (
              <Col sm={6} key={link.key}>
                <Button
                  variant='link'
                  className='text-decoration-none p-0 border-0'
                >
                  <FaArrowRight className={'me-2'} />
                  {link.key}
                </Button>
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default ContentBlock;
