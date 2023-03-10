import { Router } from "express";
import { makeValidateBody } from "express-class-validator";
import { validatorMiddleware } from "../../middlewares/validator";
import { TrackEventDto } from "./track-event.dto";
import { trackEvents } from "./tracker.controller";

const trackerRoutes = Router();

trackerRoutes.post(
  "/track",
  makeValidateBody(TrackEventDto, true, validatorMiddleware),
  trackEvents
);

export default trackerRoutes;
