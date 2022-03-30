const axios = require('axios');

const profileId = 'XX';
const config = {
  method: 'get',
  url: `http://local.adspower.net:50325/api/v1/browser/stop?user_id=${profileId}`,
  headers: { }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
