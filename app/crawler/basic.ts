import rp from "request-promise";
import { load } from "cheerio";
import { Journee, Club } from "@/types";
import { clubs } from "@/constants/clubs";

export const crawl = async (): Promise<Journee[]> => {
  let journees: Journee[] = [];

  for (const club of clubs) {
    const options = {
      uri: `https://www.deux-zero.com/ligue-1/affluences-equipe/edition/2023-2024/equipe/${club.id}`,
      transform: function (body) {
        return load(body);
      },
    };

    try {
      const $ = await rp(options);

      $(".classement").each((i, classement) => {
        let journeeNumber = 0;
        $(classement)
          .find(".t-tour")
          .each((index, element) => {
            journeeNumber = parseInt($(element).text().trim().split(" ")[0]);
          });

        $(classement)
          .find(".t-affluence")
          .each((index, element) => {
            const affluence = parseInt(
              $(element).text().trim().replace(/\D/g, "")
            );
            let journee = journees.find((j) => j.number === journeeNumber);
            if (!journee) {
              journee = { number: journeeNumber, affluences: {} };
              journees.push(journee);
            }
            journee.affluences[club.name] = affluence;
          });
      });
    } catch (error) {
      console.error(`Error fetching data for club ${club.name}:`, error);
      // Handle the error as per your error handling policy
    }
  }

  // Sort journees by their number before returning
  journees.sort((a, b) => a.number - b.number);

  return journees;
};
