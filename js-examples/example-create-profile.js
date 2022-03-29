var axios = require('axios');
var data = {
  "name": "test",
  "group_id": "0",
  "domain_name": "facebook.com",
  "repeat_config": [
    "0"
  ],
  "country": "us",
  "fingerprint_config": {
    "language": [
      "en-US"
    ],
    "ua": "Mozilla/5.0 (Linux; Android 8.0.0; BND-AL10 Build/HONORBND-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/11.5 baiduboxapp/11.5.0.10 (Baidu; P1 8.0.0)",
    "flash": "block",
    "scan_port_type": "1",
    "screen_resolution": "1024_600",
    "fonts": [
      "all"
    ],
    "longitude": "180",
    "latitude": "90",
    "webrtc": "proxy",
    "do_not_track": "true",
    "hardware_concurrency": "default",
    "device_memory": "default"
  },
  "user_proxy_config": {
    "proxy_soft": "no_proxy"
  }
};

var config = {
  method: 'post',
  url: 'http://local.adspower.net:50325/api/v1/user/create',
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
