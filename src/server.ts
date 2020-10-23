import fs from "fs";
import https from "https";
import app from "./App";
import { APP_PORT, APP_ZONE } from "./shared/configs/app";

if (APP_ZONE === "production") {
  const sslCertificates = {
    key: fs.readFileSync("/path/to/key"),
    cert: fs.readFileSync("/path/to/cert"),
    ca: fs.readFileSync("/path/to/ca"),
  };

  https
    .createServer(sslCertificates, app)
    .listen(APP_PORT, () => console.log("Listening on port: " + APP_PORT));
} else {
  app.listen(APP_PORT, () => console.log("Listening on port: " + APP_PORT));
}
