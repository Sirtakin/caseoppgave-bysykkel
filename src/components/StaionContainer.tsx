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
        <Row className="d-grid gap-2 m-2">
          <Button
            onClick={handleClick}
            className="btn-color-info d-grid gap-2 col-7 mx-auto"
          >
            {toggle ? "Expand All" : "Collapse All"}
          </Button>
        </Row>
        <Row className="d-grid gap-2 col-7 mx-auto">
          {availability.map((station) => (
            <StationList
              key={station.station_id}
              name={station.name}
              capacity={station.capacity}
              lat={station.lat}
              lon={station.lon}
              toggleButton={toggle ? "0" : "1"}
              availableBikes={station.num_bikes_available}
              availableParking={station.num_docks_available}
            />
          ))}
        </Row>
      </Stack>
    </Container>
  );
};
