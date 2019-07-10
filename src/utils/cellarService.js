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

export default {
  cellarIndex
};