import api from "../config/Api";

export const getSections = () => {
  return new Promise((resolve, reject) => {
    api.get(`/sections`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    });
  });
};

export const getSectionsRecommendations = (id) => {
  return new Promise((resolve, reject) => {
    api.get(`/sections/${id}/recommendations`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    });
  });
};