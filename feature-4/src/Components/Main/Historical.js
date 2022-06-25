// users service with a single method
// requests array of users from a third-party api via axios
export function getUsers() {
    const axios = window.axios;
    return axios.get("../../figure.json").then((response) => {
      return response.data.data;
    });
  }
  
  // select service with a single method
  // requests array of users from a third-party api via axios
  export function getSelect() {
    const axios = window.axios;
    return axios.get("../../select.json").then((response) => {
      return response.data.data;
    });
  }