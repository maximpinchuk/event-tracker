export type Event = {
  event: string;
  tags: string[];
  url: string;
  title: string | null | undefined;
  ts: number;
};
