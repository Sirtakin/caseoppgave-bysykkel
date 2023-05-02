import Accordion from "react-bootstrap/Accordion";
import { BikeList } from "./BikeList";

function StationList() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <BikeList />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <BikeList />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default StationList;
