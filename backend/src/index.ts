import "reflect-metadata";
import { AddressInfo } from "net";
import { TypeORMError } from "typeorm";
import { app } from "./server";
import { logger } from "./providers/logger";
import { database } from "./providers/database";
import { config } from "./config";

const host = config.app.host || "127.0.0.1";
const port = config.app.port || "8888";

async function startServer() {
  await database
    .initialize()
    .then(() => {
      logger.info("Connection to database successfully established");
    })
    .catch((error: TypeORMError) => {
      logger.error(error.message, ["DATABASE"]);
    });

  const server = app().listen({ host, port }, () => {
    const addressInfo = server.address() as AddressInfo;
    logger.info(
      `Server ready at http://${addressInfo.address}:${addressInfo.port}`
    );
  });

  const signalTraps: NodeJS.Signals[] = ["SIGTERM", "SIGINT", "SIGUSR2"];
  signalTraps.forEach((type) => {
    process.once(type, async () => {
      logger.info(`process.once ${type}`);

      server.close(() => {
        logger.debug("HTTP server closed");
      });
    });
  });
}

startServer();
