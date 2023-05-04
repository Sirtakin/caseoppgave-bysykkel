import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import stationService, { Station } from "../services/station-service";

//Gets and return the data for stations from the API

const useStations = () => {
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

  return { stations, error };
};

export default useStations;
