import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://gbfs.urbansharing.com/oslobysykkel.no",
  headers: {
    "Client-Identifier": "kristian-caseoppgave",
  },
});

export { CanceledError };
