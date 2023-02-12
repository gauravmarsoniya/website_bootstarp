import cn from 'classnames';
import Card from 'react-bootstrap/Card';

import styles from './Card.module.scss';
const CardCustom = ({ title, text, icon, flat }) => {
  return (
    <div className={cn(styles.cardCustom)}>
      <Card className={cn(styles.card, styles.flat, styles.hover)}>
        <Card.Body>
          {icon && (
            <div className={cn(styles.icon, 'mb-4 rounded')}>{icon}</div>
          )}
          {title && <Card.Title className='fw-semibold'>{title}</Card.Title>}
          {text && <Card.Text className='fw-light'>{text}</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCustom;
