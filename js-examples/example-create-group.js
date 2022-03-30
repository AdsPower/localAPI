const axios = require('axios');
const data = {
  group_name: "your_group_name"
};

const config = {
  method: 'post',
  url: 'http://local.adspower.net:50325/api/v1/group/create',
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
