import axios from 'axios';
export default {
  checkIfExists: (key) => {
    return !!sessionStorage.getItem(key);
  },
  getItem: (key) => {
    return sessionStorage.getItem(key);
  },
  setItem: (key, value) => {
    sessionStorage.setItem(key, value);
  },
  getDb: () => {
    return fetch('https://api.jsonbin.io/b/5d878249c8c3810499cc2e5b', {
      "headers": {
        "secret-key": "$2b$10$LUoK.P43viDkzlSHGO9rlufkyp483ZkumE57B1GioYzPve1Nml3lS"
      }
    }).then(resp => resp.json())
    .then((data) => {
      return data;
    });
  },
  updateDb: (newData) => {
    return axios.put('https://api.jsonbin.io/b/5d878249c8c3810499cc2e5b', newData, {
      "headers": {
        "Content-type": "application/json",
        "secret-key": "$2b$10$LUoK.P43viDkzlSHGO9rlufkyp483ZkumE57B1GioYzPve1Nml3lS",
        "versioning": false
      }
    }).then((resp) => {
      console.log(resp);
    });
  }
};