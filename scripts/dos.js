import axios from "axios";

// const url = "http://ec2-3-138-247-63.us-east-2.compute.amazonaws.com:3000/clean-code-resume";
const url = "http://localhost:3000/clean-code-resume";

const masiveRequest = async () => {
  const requests = [];
  const nroRequests = 10;
  for (let i = 0; i < nroRequests; i++) {
    console.log(`Petición ${i} de ${nroRequests}`);
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
