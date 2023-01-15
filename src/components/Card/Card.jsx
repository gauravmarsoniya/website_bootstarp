import Card from "react-bootstrap/Card";
const MyCard = () => {
  return (
    <Card className="test">
      <Card.Img src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body>
        <Card.Title>Business Solution</Card.Title>
        <Card.Text>
          Nisul cong rhon risus dapibus habitant mauris eget ante er pharetra
          hire to Give.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
