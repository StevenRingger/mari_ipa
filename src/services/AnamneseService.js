import api from '../config/Api';

export const setAnamneseData = (data) => {
  return new Promise((resolve, reject) => {
    let promise;
    if(typeof data.id === 'undefined'){
      promise = api.post(`/anamnese/`, data);
    }else{
      promise = api.post(`/anamnese/${data.id}`, data);
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error);
    });
  })
};

export const getAnamneseData = (id) => {
  return new Promise((resolve, reject) => {
    api.get(`/anamnese/${id}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error);
    });
  })
};

export const getAllAnamneseData = () => {
  return new Promise((resolve, reject) => {
    api.get(`/anamnese`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error);
    });
  })
}