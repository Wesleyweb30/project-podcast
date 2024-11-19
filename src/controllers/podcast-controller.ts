import {IncomingMessage, ServerResponse} from "http";
import { getAll, serviceFilterEpisode } from "../services/podcast-service"
import { StatusCode } from "../utils/status-code";

export const getAllPodcast = async (req: IncomingMessage, res: ServerResponse) => {
   
   const content = await getAll();

   res.writeHead(StatusCode.OK, { "content-type": "application/json" });
   res.end(JSON.stringify(content));

};


export const getFilterByEpisode = async (req: IncomingMessage, res: ServerResponse) => {

   const content = await serviceFilterEpisode(req.url);

   res.writeHead(StatusCode.OK, { "content-type": "application/json" });
   res.end(JSON.stringify(content));

};