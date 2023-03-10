import { DataSource } from "typeorm";
import { config } from "../config";
import { Event } from "../modules/tracker/event.entity";

export const database = new DataSource({
  type: "mongodb",
  url: `mongodb+srv://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.database}?retryWrites=true&w=majority`,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: [Event],
  subscribers: [],
});
