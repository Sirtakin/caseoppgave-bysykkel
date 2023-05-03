import Accordion from "react-bootstrap/Accordion";
import { BikeList } from "./BikeList";
import { useState } from "react";

interface Props {
  name: string;
  capacity: number;
  toggleButton: string;
  availableBikes?: number;
  availableParking?: number;
}

export const StationList = ({
  name,
  capacity,
  toggleButton,
  availableBikes,
  availableParking,
}: Props) => {
  return (
    <>
      <Accordion defaultActiveKey="1" className="mb-2">
        <Accordion.Item eventKey={toggleButton}>
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
