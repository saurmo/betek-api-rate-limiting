import axios from "axios";
import e from "express";

const url = "http://ec2-3-138-247-63.us-east-2.compute.amazonaws.com:3000/clean-code-resume";
// const url = "http://localhost:3000/clean-code-resume";

const masiveRequest = async () => {
  const requests = [];
  const nroRequests = 1000;
  for (let i = 0; i < nroRequests; i++) {
    requests.push(axios.get(url));
  }
  const result = await Promise.allSettled(requests);
  for (let index = 0; index < result.length; index++) {
    const response = result[index];
    if (response.status === "fulfilled") {
      console.log(index, response.value.data);
    } else {
      console.log(index, response.reason);
    }
  }
};
masiveRequest();
