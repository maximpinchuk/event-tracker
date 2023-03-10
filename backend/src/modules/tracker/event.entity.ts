import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Event {
  @ObjectIdColumn()
  id: string;

  @Column()
  event: string;

  @Column({
    type: "array",
  })
  tags: string[];

  @Column()
  url: string;

  @Column()
  title: string;

  @Column({
    type: "timestamp",
  })
  ts: number;

  constructor(
    event: string,
    tags: string[],
    url: string,
    title: string,
    ts: number
  ) {
    this.event = event;
    this.tags = tags;
    this.url = url;
    this.title = title;
    this.ts = ts;
  }
}
