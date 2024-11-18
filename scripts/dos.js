import axios from "axios";

const host = "ec2-3-138-247-63.us-east-2.compute.amazonaws.com";
// const url = "localhost";
const url = `http://${host}:3000/books/03-nodejs`;

const masiveRequest = async () => {
  const requests = [];
  const nroRequests = 500;
  for (let i = 0; i < nroRequests; i++) {
    requests.push(axios.get(url));
  }
  console.log("Peticiones en curso...");
  const result = await Promise.allSettled(requests);
  console.log("Peticiones finalizadas...");

  for (let index = 0; index < result.length; index++) {
    const resultPromise = result[index];
    if (resultPromise.status === "fulfilled") {
      console.log(index, resultPromise.value.data);
    } else {
      const error = resultPromise.reason;
      const response = error?.response;
      console.log(response ? `Error ${response.status}: ${response.data}` : error.code);
    }
  }
};

masiveRequest();
