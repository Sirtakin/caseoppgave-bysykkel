import { useState } from "react";
import { StationList } from "./StationList";
import useStations from "../hooks/useStations";
import { Alert, Button, Container, Row, Stack } from "react-bootstrap";
import useBike from "../hooks/useBike";

export const StaionContainer = () => {
  const { stations, error } = useStations();
  const [toggle, setToggle] = useState(false);
  const { bikes } = useBike();

  const handleClick = () => {
    setToggle(!toggle);
  };

  const availability = stations.map((station) => ({
    ...station,
    ...bikes.find((bike) => bike.station_id === station.station_id),
  }));

  return (
    <Container fluid={true}>
      <Stack gap={4}>
        {error && <Alert>{error}</Alert>}
        <Row>
          <Button onClick={handleClick}>
            {toggle ? "Expand All" : "Collapse All"}
          </Button>
        </Row>
        <Row>
          {availability.map((station) => (
            <StationList
              key={station.station_id}
              id={parseInt(station.station_id)}
              name={station.name}
              capacity={station.capacity}
              availableBikes={station.num_bikes_available}
              availableParking={station.num_docks_available}
              toggleButton={toggle ? "0" : "1"}
            />
          ))}
        </Row>
      </Stack>
    </Container>
  );
};
