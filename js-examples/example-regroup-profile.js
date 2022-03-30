const axios = require('axios');
const data = {
  "user_ids": [
    "XX"
  ],
  "group_id": "0"
};

const config = {
  method: 'post',
  url: 'http://local.adspower.net:50325/api/v1/user/regroup',
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
