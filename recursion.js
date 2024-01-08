import axios from 'axios';

const callApi = async (url, calls = 0) => {
  try {
    const { data } = await axios.get(url);

    console.log(data);
    return data;
  } catch (e) {
    if (calls > 5) {
      return '';
    }

    console.log(e);
    return callApi(url, calls + 1);
  }
};

callApi('https://jsonplaceholder.typicode.com/users');

// const countdown = (a) => {
//   if (a < 0) return;
//   console.log(a);
//   return countdown(a - 1);
// };

// countdown(10);
