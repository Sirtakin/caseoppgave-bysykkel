import Accordion from "react-bootstrap/Accordion";
import { BikeList } from "./BikeList";

interface Props {
  id: number;
  name: string;
  capacity: number;
  availableBikes?: number;
  availableParking?: number;
  toggleButton: string;
}

export const StationList = ({
  id,
  name,
  capacity,
  availableBikes,
  availableParking,
  toggleButton,
}: Props) => {
  return (
    <>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey={toggleButton} key={id}>
          <Accordion.Header>{name}</Accordion.Header>
          <Accordion.Body>
            <BikeList
              capacity={capacity}
              availableBikes={availableBikes}
              availableParking={availableParking}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
