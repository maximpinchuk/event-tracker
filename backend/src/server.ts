import path from "path";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { loggerMiddleware } from "./middlewares/logger";
import trackerRoutes from "./modules/tracker/tracker.routes";

const app = (): express.Application => {
  const app = express();

  // app.use(express.json());
  app.use(bodyParser.text());
  app.use(
    cors({
      origin: [
        new RegExp("http://localhost:50000*"),
        new RegExp("http://127.0.0.1:50000*"),
      ],
    })
  );

  app.use(loggerMiddleware);
  app.use(
    "/tracker",
    express.static(path.join(__dirname, "tracker-script/tracker.js"))
  );

  app.get("/health", async (_req, res) => {
    res.send("UP");
  });
  app.use(trackerRoutes);

  return app;
};

export { app };
