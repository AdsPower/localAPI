const axios = require('axios');

const config = {
  method: 'get',
  url: 'http://local.adspower.net:50325/api/v1/group/list?page=1&page_size=15',
  headers: { }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
