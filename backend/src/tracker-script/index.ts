import { EventsBuffer } from "./events-buffer";
import { Itracker } from "./interfaces/tracker.interface";
import { Event } from "./types/event.type";

class Tracker implements Itracker {
  private eventsBuffer;

  constructor() {
    this.eventsBuffer = new EventsBuffer();

    /**
     * Можно предусмотреть такое, чтобы интервал не работал постоянно, а очищался как только
     * в нем не осталось событий и запускался снова после появления в буффере хотя бы одного нового события
     */
    setInterval(() => {
      const currentEventsInStore = this.eventsBuffer.getAll();
      if (currentEventsInStore.length > 0) {
        this.eventsBuffer.sendEvents();
      }
    }, 1000);

    window.addEventListener("beforeunload", () => {
      this.eventsBuffer.sendEvents();
    });
  }

  track(event: string, ...tags: string[]): void {
    const fullEvent: Event = {
      event,
      tags,
      url: window.location.href,
      title:
        document.title ||
        document.querySelector("[name=title]")?.textContent ||
        "",
      ts: Date.now(),
    };

    this.eventsBuffer.add(fullEvent);
  }
}

(function () {
  // @ts-ignore
  window.tracker = new Tracker();
})();
