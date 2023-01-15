import Card from 'react-bootstrap/Card';
const CardCustom = ({ id, image, variant, title, text }) => {
  return (
    <Card className='shadow h-100'>
      <Card.Body>
        {image && <Card.Img variant={variant} src={image} />}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Link href='#'>Card Link</Card.Link>
        <Card.Link href='#'>Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;
