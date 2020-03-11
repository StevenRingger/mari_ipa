import api from "../config/Api";

export const setTherapies = (data) => {
  const promise = api.post(`/therapies/`, data);

  return promise;
};