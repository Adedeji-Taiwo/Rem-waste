import { DetailsType } from "./data";


export default interface FetchState {
  data: DetailsType[] | null;
  loading: boolean;
  error: string | null;
}