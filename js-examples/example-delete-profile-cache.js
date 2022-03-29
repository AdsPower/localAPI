const axios = require('axios');

const config = {
  method: 'post',
  url: 'http://localhost:50325/api/v1/user/delete-cache',
  headers: { }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
