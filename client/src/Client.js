import axios from 'axios';

export function uploadSuccess({ data }) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}

function uploadImage(file, nome){
  let data = new FormData();
  data.append('file', document);
  data.append('name', nome);

  return dispatch => {
    axios.post('/uploadImage', data)
      .then(response => dispatch(uploadSuccess(response)))
      .catch(error => dispatch(uploadFail(error)))
  }
}

function addParada(percurso, nome, desc, engm, resp, img, callbackFn) {
  return fetch(`/addParada?p=${percurso}&n=${nome}&d=${desc}&e=${engm}&r=${resp}&i=${img}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

function addPercurso(nome_prev, nome_curr, desc, img, callbackFn) {
  return fetch(`/addPercurso?pn=${nome_prev}&cn=${nome_curr}&d=${desc}&i=${img}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

function removePercurso(nome, callbackFn){
  return fetch(`/removePercurso?n=${nome}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

function listPercursos(callbackFn) {
  return fetch(`/listPercursos`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

function admLogin(user, password, callbackFn) {
  return fetch(`/admLogin?u=${user}&p=${password}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

function expLogin(email, name, callbackFn) {
  return fetch(`/expLogin?e=${email}&n=${name}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { admLogin, expLogin, addParada, addPercurso, removePercurso, listPercursos };
export default Client;
