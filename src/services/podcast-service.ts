import { PodcastDTO } from "../model/podcastDTO";
import { getAllEpisodes } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

// interface response
let podcastDTO: PodcastDTO = {
   statusCode: 0,
   body: [],
};

export const getAll = async (): Promise<PodcastDTO> => {

   const data =  await getAllEpisodes();

   // valid return null
   let podcastDTO : PodcastDTO = {
      statusCode : data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
      body : data
   }

   return podcastDTO;
};

export const serviceFilterEpisode = async (nameEpisode: string | undefined): Promise<PodcastDTO> => {

   // seach data
   const queryString = nameEpisode?.split("?p=")[1] || "";
   const data = await getAllEpisodes(queryString);
   
   // valid return null
   let podcastDTO : PodcastDTO = {
      statusCode : data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
      body : data
   }

   return podcastDTO;
}