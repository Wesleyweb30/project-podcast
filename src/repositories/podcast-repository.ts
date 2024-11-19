import fs from "fs"
import path from "path";
import { Podcast } from "../model/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const getAllEpisodes = async (podcastName?: string): Promise<Podcast[]> => {
   const data = fs.readFileSync(pathData, "utf-8")
   let jsonFile = JSON.parse(data)

   if(podcastName) {
      jsonFile = jsonFile.filter(
         (podcast: Podcast) => podcast.podcastName === podcastName
      );
   }

   return jsonFile;

}
