import Accordion from "react-bootstrap/Accordion";
import { BikeList } from "./BikeList";
import { BikeCardContainer } from "./BikeCardContainer";
import { Button } from "react-bootstrap";

interface Props {
  id: number;
  name: string;
  toggleButton: string;
}

export const StationList = ({ id, name, toggleButton }: Props) => {
  console.log(toggleButton);
  return (
    <>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey={toggleButton} key={id}>
          <Accordion.Header>{name}</Accordion.Header>
          <Accordion.Body>
            <BikeCardContainer>
              <BikeList />
            </BikeCardContainer>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
