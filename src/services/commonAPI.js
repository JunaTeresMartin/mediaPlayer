import axios from "axios";
//api call
const commonAPI = async (httpMethod, url, requestBody) => {
  const reqConfig = {
    url,
    method: httpMethod,
    data: requestBody,
  };
  //axios is an asynchronous fn, so we use await
  return await axios(reqConfig)  //await - wait till axios get the values
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export default commonAPI;
