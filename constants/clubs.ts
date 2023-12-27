export const clubs: Club[] = [
  { id: 76, name: "Stade Brestois 29", alias: "Brest" },
  { id: 113, name: "Clermont Foot 63", alias: "Clermont" },
  { id: 224, name: "Havre AC", alias: "Havre" },
  { id: 231, name: "RC Lens", alias: "RC Lens" },
  { id: 242, name: "Lille OSC", alias: "LOSC" },
  { id: 251, name: "FC Lorient", alias: "Lorient" },
  { id: 258, name: "Olympique Lyonnais", alias: "OL" },
  { id: 275, name: "Olympique de Marseille", alias: "OM" },
  { id: 285, name: "FC Metz", alias: "Metz" },
  { id: 290, name: "AS Monaco FC", alias: "Monaco" },
  { id: 299, name: "Montpellier Hérault SC", alias: "Montpellier" },
  { id: 310, name: "FC Nantes", alias: "Nantes" },
  { id: 314, name: "OGC Nice", alias: "Nice" },
  { id: 339, name: "Paris Saint-Germain FC", alias: "PSG" },
  { id: 373, name: "Stade de Reims", alias: "Reims" },
  { id: 375, name: "Stade Rennais FC", alias: "Rennes" },
  { id: 442, name: "RC Strasbourg Alsace", alias: "Strasbourg" },
  { id: 455, name: "Toulouse FC", alias: "Toulouse" },
] as const;

type Club = {
  id: number;
  name: string;
  alias: string;
};
