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
    fetch('https://api.jsonbin.io/b/5d878249c8c3810499cc2e5b').then(resp => resp.json())
    .then((data) => {
      // TODO: return relevant data
      console.log(data);
    });
  }
};