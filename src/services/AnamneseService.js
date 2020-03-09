import api from '../config/Api';

export const setAnamneseData = (id,data) => {
  const promise = api.post(`/anamnese/`, data);
  promise.then(res => {
    console.log('setAnamneseData response',res.data)
  })

  return promise;
};

export const getAnamneseData = (id, ) => {
  return new Promise((resolve, reject) => {
    let promise = api.get(`/anamnese/${id}`);

    promise.then(response => {
      resolve(response.data)
    });

    promise.catch(error => {
      reject(error.response.status);
    });
  })
};