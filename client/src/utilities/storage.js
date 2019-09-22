export default {
  checkIfExists: (key) => {
    return !!sessionStorage.getItem(key);
  },
  getItem: (key) => {
    return sessionStorage.getItem(key);
  },
  setItem: (key, value) => {
    sessionStorage.setItem(key, value);
  }
};