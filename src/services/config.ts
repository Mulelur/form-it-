import axios from 'axios';

const Axios = () => {
  const apiHost =
    typeof process.env.REACT_APP_API_URL !== 'undefined'
      ? process.env.REACT_APP_API_URL
      : 'https://api/v1/formit.com';

  const axiosInstance = axios.create({
    baseURL: apiHost,
    validateStatus: (status: number) => {
      let correct = false;

      if (status >= 200 && status < 300) {
        correct = true;
      } else if (status >= 400 && status < 500) {
        correct = true;
      }

      return correct;
    },
    timeout: 180000
  });

  return axiosInstance;
};

export const axiosObject = axios;

export default Axios;
