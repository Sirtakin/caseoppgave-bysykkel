import Accordion from "react-bootstrap/Accordion";
import { BikeList } from "./BikeList";
import { BikeCardContainer } from "./BikeCardContainer";
import { useEffect, useState } from "react";
import stationService, { Station } from "../services/station-service";
import { CanceledError } from "axios";
import { Alert } from "react-bootstrap";

export const StationList = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request } = stationService.getAllStations();
    request
      .then((res) => {
        setStations(res.data.data.stations);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);
  console.log(stations);
  return (
    <>
      {error && <Alert>{error}</Alert>}
      <Accordion defaultActiveKey="1">
        {stations.map((staiton) => (
          <Accordion.Item eventKey="0" key={staiton.station_id}>
            <Accordion.Header>{staiton.name}</Accordion.Header>
            <Accordion.Body>
              <BikeCardContainer>
                <BikeList />
              </BikeCardContainer>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};
