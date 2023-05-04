import Accordion from "react-bootstrap/Accordion";
import { Button, Col, Row } from "react-bootstrap";
import { BikeList } from "./BikeList";

interface Props {
  name: string;
  capacity: number;
  lat: number;
  lon: number;
  toggleButton: string;
  availableBikes?: number;
  availableParking?: number;
}

//Creating accordions for each station. Creates links for button to google maps.
//Called from StationContainer-component, sends to BikeList-component.

export const StationList = ({
  name,
  capacity,
  lat,
  lon,
  toggleButton,
  availableBikes,
  availableParking,
}: Props) => {
  const bikeMap =
    "https://www.google.com/maps/search/?api=1&query=" + lat + "%2C" + lon;

  return (
    <>
      <Accordion defaultActiveKey="1" className="mb-2">
        <Accordion.Item eventKey={toggleButton}>
          <Accordion.Header>{name}</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col>
                <BikeList
                  capacity={capacity}
                  availableBikes={availableBikes}
                  availableParking={availableParking}
                />
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="m-1"
                  href={bikeMap}
                >
                  Map
                </Button>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
