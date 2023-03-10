import { IsString, IsNotEmpty, IsArray } from "class-validator";

export class TrackEventDto {
  @IsNotEmpty()
  @IsString()
  event: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({
    each: true,
  })
  tags: string[];

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  ts: number;
}
