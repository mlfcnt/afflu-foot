import { useQuery } from "@tanstack/react-query";
import { crawl } from "./app/crawler/basic";

export const useJournees = () =>
  useQuery({ queryKey: ["journees"], queryFn: crawl });
