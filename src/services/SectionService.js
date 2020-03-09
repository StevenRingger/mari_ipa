import api from "../config/Api";

export const getSections = (setSections) => {
  let promise = api.get(`/sections`);

  promise.then(response => {
    // setSections(response.data);
  });

  promise.catch(error => {
    console.log(error);
    // setSections([]);
  });

  return promise;
};

export const getSectionsRecommendations = (id, setSections) => {
  let promise = api.get(`/sections/${id}/recommendations`);

  promise.then(response => {
    // setSections(response.data);
  });

  promise.catch(error => {
    console.log(error);
    // setSections([]);
  });

  return promise;
};