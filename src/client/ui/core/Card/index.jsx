import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import cn from 'classnames';
import styles from './index.module.scss';
const CardCustom = ({ id, image, icon, variant, title, text, listItems }) => {
  return (
    <Card className={cn(styles.card, 'shadow-sm', 'rounded', 'border-0')}>
      {image && <Card.Img variant={variant} src={image} />}

      <Card.Body>
        {icon && (
          <div
            className={cn(
              styles.iconWrapper,
              'bg-primary',
              'rounded',
              'text-white',
              'mb-4'
            )}
          >
            {icon}
          </div>
        )}
        <Card.Title>{title}</Card.Title>
        <Card.Text className='text-muted'>{text}</Card.Text>
      </Card.Body>
      {listItems && (
        <ListGroup className='list-group-flush'>
          {listItems.map((item) => (
            <>
              <ListGroup.Item>{item.label}</ListGroup.Item>
            </>
          ))}
        </ListGroup>
      )}
    </Card>
  );
};

export default CardCustom;
