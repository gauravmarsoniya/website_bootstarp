import cn from 'classnames';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Typography from '@client/ui/components/Typography';
import { FaArrowRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
const ContentBlock = ({
  title,
  titleSize,
  paragraphs,
  image,
  links,
  buttons,
  rowReverse,
}) => {
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
        {title && (
          <Typography.Title size={titleSize || 3}>{title}</Typography.Title>
        )}
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <Typography.Paragraph key={index}>{paragraph}</Typography.Paragraph>
          ))}
        {links && (
          <Row className={'gy-3'}>
            {links.map((link) => (
              <Col sm={6} key={link.key}>
                <Button
                  variant='link'
                  className='text-decoration-none p-0 border-0 text-muted'
                >
                  <FaArrowRight className={'me-2'} />
                  {link.key}
                </Button>
              </Col>
            ))}
          </Row>
        )}
        {buttons &&
          buttons.map((button) => (
            <Button variant={button.variant}>{button.text}</Button>
          ))}
      </Col>
    </Row>
  );
};

export default ContentBlock;
