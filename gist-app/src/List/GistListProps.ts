import { Gist } from "../models/gist";

export interface GistListProps {
  elems: Gist[];
  types: { [key: string]: string };
}