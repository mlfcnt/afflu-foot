import { Club, Journee } from "@/types";

export const clubWithHighestAverage = (clubs: Club[], journees: Journee[]) => {
  const averages = clubs.map((club) => {
    const values = journees
      .map((j) => j.affluences[club.name]?.number)
      .filter(Boolean);
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    return { club, average };
  });
  return averages.reduce((a, b) => (a.average > b.average ? a : b)).club;
};
export const clubWithLowestAverage = (clubs: Club[], journees: Journee[]) => {
  const averages = clubs.map((club) => {
    const values = journees
      .map((j) => j.affluences[club.name]?.number)
      .filter(Boolean);
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    return { club, average };
  });
  return averages.reduce((a, b) => (a.average < b.average ? a : b)).club;
};

export const clubWithHighestTotal = (clubs: Club[], journees: Journee[]) => {
  const totals = clubs.map((club) => {
    const total = journees
      .map((j) => j.affluences[club.name]?.number)
      .filter(Boolean)
      .reduce((a, b) => a + b, 0);
    return { club, total };
  });
  return totals.reduce((a, b) => (a.total > b.total ? a : b)).club;
};

export const clubWithLowestTotal = (clubs: Club[], journees: Journee[]) => {
  const totals = clubs.map((club) => {
    const total = journees
      .map((j) => j.affluences[club.name]?.number)
      .filter(Boolean)
      .reduce((a, b) => a + b, 0);
    return { club, total };
  });
  return totals.reduce((a, b) => (a.total < b.total ? a : b)).club;
};
