import apiClient from "./api-client";

export interface Bike {
  station_id: string;
  num_bikes_available: number;
  num_docks_available: number;
}

//Calls the endpoint for the list of available bikes and parking.

class BikeService {
  getAllStations() {
    const controller = new AbortController();
    const request = apiClient.get<Bike[]>("/station_status.json", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new BikeService();
