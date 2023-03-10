import { Event } from "./types/event.type";

export class EventsBuffer {
  private readonly storageKey: string;

  constructor() {
    this.storageKey = "events";
  }

  add(event: Event) {
    const currentEventsInStore = JSON.parse(
      window.localStorage.getItem(this.storageKey) || "[]"
    );

    currentEventsInStore.push(event);
    window.localStorage.setItem(
      this.storageKey,
      JSON.stringify(currentEventsInStore)
    );

    if (currentEventsInStore >= 3) {
      this.sendEvents();
    }
  }

  addBatch(events: Event[]) {
    window.localStorage.setItem(this.storageKey, JSON.stringify(events));
  }

  getAll(): Event[] | [] {
    return JSON.parse(window.localStorage.getItem(this.storageKey) || "[]");
  }

  removeAll() {
    window.localStorage.setItem(this.storageKey, JSON.stringify([]));
  }

  sendEvents() {
    const currentEventsInStore = JSON.parse(
      window.localStorage.getItem(this.storageKey) || "[]"
    );
    this.removeAll();

    fetch("http://localhost:8888/track", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain", // Для предотвращения preflight запроса
      },
      body: JSON.stringify(currentEventsInStore),
    }).catch((error: Error) => {
      console.log(error);

      if (error.message === "Network request failed") {
        setTimeout(() => {
          this.addBatch(currentEventsInStore);
        }, 1000);
      }
    });
  }
}
