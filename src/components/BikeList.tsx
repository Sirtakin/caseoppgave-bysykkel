import { Card, Col, Container, Row } from "react-bootstrap";

interface Props {
  capacity: number;
  availableBikes?: number;
  availableParking?: number;
}

export const BikeList = ({
  capacity,
  availableBikes,
  availableParking,
}: Props) => {
  return (
    <>
      <Container fluid="md">
        <Row className="col-7 mx-left ">
          <Col className="mb-2">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="text-center">
                <Card.Title>Available Bikes</Card.Title>
                <Card.Text>
                  {availableBikes} of {capacity}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="text-center">
              <Card.Body>
                <Card.Title>Available Parking</Card.Title>
                <Card.Text>
                  {availableParking} of {capacity}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
