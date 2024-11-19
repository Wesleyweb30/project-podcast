import {IncomingMessage, ServerResponse} from "http";
import { getAll, serviceFilterEpisode } from "../services/podcast-service"
import { PodcastDTO } from "../model/podcastDTO";

export const getAllPodcast = async (req: IncomingMessage, res: ServerResponse) => {
   
   const content: PodcastDTO = await getAll();

   res.writeHead(content.statusCode, { "content-type": "application/json" });
   res.write(JSON.stringify(content.body));
   res.end();

};


export const getFilterByEpisode = async (req: IncomingMessage, res: ServerResponse) => {

   const content: PodcastDTO = await serviceFilterEpisode(req.url);

   res.writeHead(content.statusCode, { "content-type": "application/json" });
   res.write(JSON.stringify(content.body));
   res.end();

};