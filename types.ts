import { clubs } from "./constants/clubs";

export type Club = (typeof clubs)[number];

export type Journee = {
  number: number;
  affluences: {
    [club in Club["name"]]: {
      number: number;
      type: "home" | "away";
    };
  };
};
