import apiClient from "./api-client";

export interface Station {
  station_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  capacity: number;
}

class StationService {
  getAllStations() {
    const controller = new AbortController();
    const request = apiClient.get<Station[]>("/station_information.json", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new StationService();