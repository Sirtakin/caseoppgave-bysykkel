import React, { useState } from "react";
import { StationList } from "./StationList";
import useStations from "../hooks/useStations";
import { Alert, Button, Container, Row, Stack } from "react-bootstrap";

export const StaionContainer = () => {
  const { stations, error } = useStations();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Container fluid={true}>
      <Stack gap={4}>
        {error && <Alert>{error}</Alert>}
        <Row>
          <Button onClick={handleClick}>
            {toggle ? "Expand All" : "Collaps All"}
          </Button>
        </Row>
        <Row>
          {stations.map((station) => (
            <StationList
              id={parseInt(station.station_id)}
              name={station.name}
              toggleButton={toggle ? "0" : "1"}
            />
          ))}
        </Row>
      </Stack>
    </Container>
  );
};
