import { useEffect, useState } from "react";
import bikeService, { Bike } from "../services/bike-service";
import { CanceledError } from "../services/api-client";

const useBike = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request } = bikeService.getAllStations();
    request
      .then((res) => {
        setBikes(res.data.data.stations);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);

  return { bikes, error };
};

export default useBike;
