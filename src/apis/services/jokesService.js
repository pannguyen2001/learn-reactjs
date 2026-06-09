import { baseRequest } from "@/apis/BaseRequest";

// randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1
export const jokesService = {
  getAll: (params) =>
    baseRequest({ url: '/randomjokes', params }),

  getById: (id) =>
    baseRequest({ url: `/randomjokes/${id}` }),

  create: (body) =>
    baseRequest({ url: "/randomjokes", method: "POST", data: body }),

  update: (id, body) =>
    baseRequest({ url: `/randomjokes/${id}`, method: "PUT", data: body }),

  delete: (id) =>
    baseRequest({ url: `/randomjokes/${id}`, method: "DELETE" }),
};