import { Request, Response } from "express";
import { logger } from "../../providers/logger";
import { TrackerService } from "./tracker.service";
import { TrackEventDto } from "./track-event.dto";

const trackerService = new TrackerService();

export function trackEvents(req: Request, res: Response) {
  const events: TrackEventDto[] = req.body;

  try {
    trackerService.createBulk(events);
    res.sendStatus(200);
  } catch (error) {
    logger.error(error);
    res.sendStatus(400);
  }
}
