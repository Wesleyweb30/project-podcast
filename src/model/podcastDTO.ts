import { PodcastModel } from "./podcast-model";

export interface PodcastDTO {
   statusCode: number,
   body: PodcastModel[],
}