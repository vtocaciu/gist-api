import { Gist } from "../models/gist";

export interface GistCardProps {
  gist: Gist;
  types: { [key: string]: string };
}