import { getAllEpisodes } from "../repositories/podcast-repository";

export const getAll = async () => {
   const data =  await getAllEpisodes();
   return data;
};

export const serviceFilterEpisode = async (nameEpisode: string | undefined) => {

   const queryString = nameEpisode?.split("?p=")[1] || "";

   const data = await getAllEpisodes(queryString);
   return data;
}