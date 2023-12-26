const clubs = [
  "Stade Brestois 29",
  "Clermont Foot 63",
  "Havre AC",
  "RC Lens",
  "Lille OSC",
  "FC Lorient",
  "Olympique Lyonnais",
  "Olympique de Marseille",
  "FC Metz",
  "AS Monaco FC",
  "Montpellier Hérault SC",
  "FC Nantes",
  "OGC Nice",
  "Paris Saint-Germain FC",
  "Stade de Reims",
  "Stade Rennais FC",
  "RC Strasbourg Alsace",
  "Toulouse FC",
];

export type Club = (typeof clubs)[number];

type Journee = {
  number: number;
  affluences: {
    [club in Club]: number;
  };
};
export const fakeJournees: Journee[] = [
  {
    number: 1,
    affluences: {
      "Stade Brestois 29": 1 + Math.floor(Math.random() * 10000),
      "Clermont Foot 63": 1 + Math.floor(Math.random() * 10000),
      "Havre AC": 1 + Math.floor(Math.random() * 10000),
      "RC Lens": 1 + Math.floor(Math.random() * 10000),
      "Lille OSC": 1 + Math.floor(Math.random() * 10000),
      "FC Lorient": 1 + Math.floor(Math.random() * 10000),
      "Olympique Lyonnais": 1 + Math.floor(Math.random() * 10000),
      "Olympique de Marseille": 1 + Math.floor(Math.random() * 10000),
      "FC Metz": 1 + Math.floor(Math.random() * 10000),
      "AS Monaco FC": 1 + Math.floor(Math.random() * 10000),
      "Montpellier Hérault SC": 1 + Math.floor(Math.random() * 10000),
      "FC Nantes": 1 + Math.floor(Math.random() * 10000),
      "OGC Nice": 1 + Math.floor(Math.random() * 10000),
      "Paris Saint-Germain FC": 1 + Math.floor(Math.random() * 10000),
      "Stade de Reims": 1 + Math.floor(Math.random() * 10000),
      "Stade Rennais FC": 1 + Math.floor(Math.random() * 10000),
      "RC Strasbourg Alsace": 1 + Math.floor(Math.random() * 10000),
      "Toulouse FC": 1 + Math.floor(Math.random() * 10000),
    },
  },
  {
    number: 2,
    affluences: {
      "Stade Brestois 29": 1 + Math.floor(Math.random() * 10000),
      "Clermont Foot 63": 1 + Math.floor(Math.random() * 10000),
      "Havre AC": 1 + Math.floor(Math.random() * 10000),
      "RC Lens": 1 + Math.floor(Math.random() * 10000),
      "Lille OSC": 1 + Math.floor(Math.random() * 10000),
      "FC Lorient": 1 + Math.floor(Math.random() * 10000),
      "Olympique Lyonnais": 1 + Math.floor(Math.random() * 10000),
      "Olympique de Marseille": 1 + Math.floor(Math.random() * 10000),
      "FC Metz": 1 + Math.floor(Math.random() * 10000),
      "AS Monaco FC": 1 + Math.floor(Math.random() * 10000),
      "Montpellier Hérault SC": 1 + Math.floor(Math.random() * 10000),
      "FC Nantes": 1 + Math.floor(Math.random() * 10000),
      "OGC Nice": 1 + Math.floor(Math.random() * 10000),
      "Paris Saint-Germain FC": 1 + Math.floor(Math.random() * 10000),
      "Stade de Reims": 1 + Math.floor(Math.random() * 10000),
      "Stade Rennais FC": 1 + Math.floor(Math.random() * 10000),
      "RC Strasbourg Alsace": 1 + Math.floor(Math.random() * 10000),
      "Toulouse FC": 1 + Math.floor(Math.random() * 10000),
    },
  },
  {
    number: 3,
    affluences: {
      "Stade Brestois 29": 1 + Math.floor(Math.random() * 10000),
      "Clermont Foot 63": 1 + Math.floor(Math.random() * 10000),
      "Havre AC": 1 + Math.floor(Math.random() * 10000),
      "RC Lens": 1 + Math.floor(Math.random() * 10000),
      "Lille OSC": 1 + Math.floor(Math.random() * 10000),
      "FC Lorient": 1 + Math.floor(Math.random() * 10000),
      "Olympique Lyonnais": 1 + Math.floor(Math.random() * 10000),
      "Olympique de Marseille": 1 + Math.floor(Math.random() * 10000),
      "FC Metz": 1 + Math.floor(Math.random() * 10000),
      "AS Monaco FC": 1 + Math.floor(Math.random() * 10000),
      "Montpellier Hérault SC": 1 + Math.floor(Math.random() * 10000),
      "FC Nantes": 1 + Math.floor(Math.random() * 10000),
      "OGC Nice": 1 + Math.floor(Math.random() * 10000),
      "Paris Saint-Germain FC": 1 + Math.floor(Math.random() * 10000),
      "Stade de Reims": 1 + Math.floor(Math.random() * 10000),
      "Stade Rennais FC": 1 + Math.floor(Math.random() * 10000),
      "RC Strasbourg Alsace": 1 + Math.floor(Math.random() * 10000),
      "Toulouse FC": 1 + Math.floor(Math.random() * 10000),
    },
  },
  {
    number: 4,
    affluences: {
      "Stade Brestois 29": 1 + Math.floor(Math.random() * 10000),
      "Clermont Foot 63": 1 + Math.floor(Math.random() * 10000),
      "Havre AC": 1 + Math.floor(Math.random() * 10000),
      "RC Lens": 1 + Math.floor(Math.random() * 10000),
      "Lille OSC": 1 + Math.floor(Math.random() * 10000),
      "FC Lorient": 1 + Math.floor(Math.random() * 10000),
      "Olympique Lyonnais": 1 + Math.floor(Math.random() * 10000),
      "Olympique de Marseille": 1 + Math.floor(Math.random() * 10000),
      "FC Metz": 1 + Math.floor(Math.random() * 10000),
      "AS Monaco FC": 1 + Math.floor(Math.random() * 10000),
      "Montpellier Hérault SC": 1 + Math.floor(Math.random() * 10000),
      "FC Nantes": 1 + Math.floor(Math.random() * 10000),
      "OGC Nice": 1 + Math.floor(Math.random() * 10000),
      "Paris Saint-Germain FC": 1 + Math.floor(Math.random() * 10000),
      "Stade de Reims": 1 + Math.floor(Math.random() * 10000),
      "Stade Rennais FC": 1 + Math.floor(Math.random() * 10000),
      "RC Strasbourg Alsace": 1 + Math.floor(Math.random() * 10000),
      "Toulouse FC": 1 + Math.floor(Math.random() * 10000),
    },
  },
];
