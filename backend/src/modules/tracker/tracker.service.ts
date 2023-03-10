import { database } from "../../providers/database";
import { Event } from "./event.entity";
import { EventEntity } from "./tracker.types";

export class TrackerService {
  createBulk(events: EventEntity[]) {
    const eventsToInsert = [];

    events.forEach((event: EventEntity) => {
      eventsToInsert.push(
        new Event(event.event, event.tags, event.url, event.title, event.ts)
      );
    });

    database.manager.save(eventsToInsert);
  }
}
