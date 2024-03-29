import axios, { CanceledError } from "axios";

//Set base URL and headers for the API

export default axios.create({
  baseURL: "https://gbfs.urbansharing.com/oslobysykkel.no",
  headers: {
    "Client-Identifier": "kristian-caseoppgave",
  },
});

export { CanceledError };
