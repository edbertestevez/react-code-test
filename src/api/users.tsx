import Axios from "axios";
import { USERS_BASE_URL } from "../config/api";
import { DEFAULT_PAGINATION } from "../config/defaults";

interface IPagination {
  page: number;
  per_page?: number;
}

//Should create
export const get_paginated_users = async ({ page, per_page = DEFAULT_PAGINATION }: IPagination) => {
  return Axios.get(`${USERS_BASE_URL}?page=${page}&per_page=${per_page}`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      alert("An error occurred. Please try again.");
    });
};
