const axios = require('axios');
const data = {
  "user_ids": [
    "XX"
  ]
};

const config = {
  method: 'post',
  url: 'http://localhost:50325/api/v1/user/delete',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
