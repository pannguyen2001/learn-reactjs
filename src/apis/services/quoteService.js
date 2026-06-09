import { baseRequest } from "@/apis/BaseRequest";

export const quoteService = {
  getAll: (params) =>
    baseRequest({ url: '/quotes', params }),

  getById: (id) =>
    baseRequest({ url: `/quotes/${id}` }),

  create: (body) =>
    baseRequest({ url: "/quotes", method: "POST", data: body }),

  update: (id, body) =>
    baseRequest({ url: `/quotes/${id}`, method: "PUT", data: body }),

  delete: (id) =>
    baseRequest({ url: `/quotes/${id}`, method: "DELETE" }),
};