import useData from "./useData";

export interface Bike {
  station_id: string;
  num_bikes_available: number;
  num_docks_available: number;
}

const useBike = () => {
  useData<Bike>("/station_status.json");
};

export default useBike;
