import axios from "axios";

const url = "http://ec2-3-138-247-63.us-east-2.compute.amazonaws.com:3000/heavy-operation";

const requests = [];
for (let i = 0; i < 10000; i++) {
  requests.push(axios.get(url));
}

Promise.allSettled(requests).then((values) => {
  values.forEach((value) => {
    if (value.status === "rejected") {
      console.log("Request ha fallado", value.reason);
    }
  });
  console.log("Todos los requests han sido realizados");
});
