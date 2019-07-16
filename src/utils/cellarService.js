import tokenService from "./tokenService";

const BASE_URL = "/api/cellars/";

function cellarIndex() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    })
  }).then(res => res.json()).catch(err => console.log(err));
}

function cellarUpdate(cellar) {
  return fetch(BASE_URL + cellar.id, {
    method: 'PUT',
    headers: new Headers ({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    }),
    body: JSON.stringify(cellar)
  }).then(res => res.json()).catch(err => console.log(err));
}

function createCellar(cellar) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers ({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    }),
    body: JSON.stringify(cellar)
  }).then(res => res.json()).catch(err => console.log(err));
}

function deleteCellar(cellarId) {
  return fetch(BASE_URL + cellarId, {
    method: 'DELETE',
    headers: new Headers ({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    })
  }).then(res => res.json()).catch(err => console.log(err));
}

export default {
  cellarIndex,
  cellarUpdate,
  createCellar,
  deleteCellar
};