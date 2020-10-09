import fs from "fs";
import https from "https";
import app from "./App";
import { useConfig } from "./configs/app";

const { ZONE, PORT } = useConfig;

if (ZONE === "production") {
  const sslCertificates = {
    key: fs.readFileSync("/path/to/key"),
    cert: fs.readFileSync("/path/to/cert"),
    ca: fs.readFileSync("/path/to/ca"),
  };

  https
    .createServer(sslCertificates, app)
    .listen(PORT, () => console.log("Listening on port: " + PORT));
} else {
  app.listen(PORT, () => console.log("Listening on port: " + PORT));
}
