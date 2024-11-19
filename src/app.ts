import { getAllPodcast, getFilterByEpisode } from "./controllers/podcast-controller";
import { Routes } from "./router/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";

export const app = async (
   request: http.IncomingMessage, 
   response: http.ServerResponse
   ) => {
      
   const baseUrl = request.url?.split("?")[0];

   if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getAllPodcast(request, response);
   }

   if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterByEpisode(request, response);
   }

}