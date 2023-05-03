import Accordion from "react-bootstrap/Accordion";
import { BikeList } from "./BikeList";
import { BikeCardContainer } from "./BikeCardContainer";
import { useEffect, useState } from "react";
import stationService, { Data, Station } from "../services/station-service";
import { AxiosError, CanceledError } from "axios";
import { Alert } from "react-bootstrap";

export const StationList = () => {
  const [stationData, setStationData] = useState<Data[]>([]);
  const [stations, setStations] = useState<Station[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request } = stationService.getAllStations();
    request
      .then((res) => {
        setStationData(res.data);
        setStations([...res.data.data.stations]);
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
        <Accordion.Item eventKey="0">
          {stations.map((staiton) => (
            <Accordion.Header>{staiton.name}</Accordion.Header>
          ))}
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
