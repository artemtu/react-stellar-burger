import { GET_FEED } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { IgetIngredients } from "../types";
import { IData } from "../types";

export interface IFeedData {
  success: boolean;
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}

export const getFeed = (data: IFeedData) => {
  return {
    type: GET_FEED,
    payload: data,
  };
};
