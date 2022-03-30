const axios = require('axios');

const profileId = 'XX';

const config = {
  method: 'get',
  url: `http://localhost:50325/api/v1/browser/active?user_id=${profileId}`,
  headers: { }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
