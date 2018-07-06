//funcao que encontra o valor max do codigo da parada
function maxCod(percurso, callbackFn) {
  return fetch(`/maxCod?p=${percurso}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao que adiciona uma parada
function addParada(percurso, cod, nome, desc, engm, resp, img, callbackFn) {
  return fetch(`/addParada?p=${percurso}&c=${cod}&n=${nome}&d=${desc}&e=${engm}&r=${resp}&i=${img}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao que seleciona informacoes de uma parada
function selectParada(percurso, id, callbackFn){
  return fetch(`/selectParada?p=${percurso}&i=${id}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao que seleciona informacoes das paradas de um percurso
function selectParadasPercurso(percurso, callbackFn){
  return fetch(`/selectParadas?p=${percurso}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao de remocao de parada
function removeParada(nome, callbackFn){
  return fetch(`/removeParada?n=${nome}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao que adiciona um percurso
function addPercurso(nome, desc, img, callbackFn) {
  return fetch(`/addPercurso?n=${nome}&d=${desc}&i=${img}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao que seleciona informacoes de um percurso
function selectPercurso(percurso, callbackFn){
  return fetch(`/selectPercurso?p=${percurso}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao que seleciona informacoes de um percurso
function selectPerc(nome, callbackFn){
  return fetch(`/selectPerc?n=${nome}`)
    .then(checkStatus)
    .then(parseJSON)
    .then(callbackFn)
}

//fuincao que identifica a ultima parada de um percurso
function lastParada(percurso, callbackFn){
  return fetch(`/lastParada?p=${percurso}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao de remocao de percursos
function removePercurso(nome, callbackFn){
  return fetch(`/removePercurso?n=${nome}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao de listagem de percursos
function listPercursos(callbackFn) {
  return fetch(`/listPercursos`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao de login de adiministrador
function admLogin(user, password, callbackFn) {
  return fetch(`/admLogin?u=${user}&p=${password}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//funcao de login de exploradores
function expLogin(email, name, callbackFn) {
  return fetch(`/expLogin?e=${email}&n=${name}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

//checagem de erros
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

//funcao que retorna o JSON de resposta do servidor
function parseJSON(response) {
  return response.json();
}

//lista de funcoes que executam requisicoes ao servidor
const Client = { admLogin, expLogin, maxCod, addParada, selectParada, selectParadasPercurso, removeParada, addPercurso, selectPerc, selectPercurso, removePercurso, listPercursos, lastParada };
export default Client;
