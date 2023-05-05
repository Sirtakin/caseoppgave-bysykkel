import apiClient from "./api-client";

export interface Station {
  station_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  capacity: number;
}

//Calls the endpoint for the list of stations.

class StationService {
  getAllStations() {
    const controller = new AbortController();
    const request = apiClient.get<Station[]>("/station_information.vjson", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new StationService();
