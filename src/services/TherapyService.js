import api from "../config/Api";

export const setTherapies = (data) => {
  return new Promise((resolve, reject) => {
    api.post(`/therapies/`, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    });
  });
};