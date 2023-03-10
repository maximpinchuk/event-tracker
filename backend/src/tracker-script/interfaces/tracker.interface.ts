export interface Itracker {
  track(event: string, ...tags: string[]): void;
}
