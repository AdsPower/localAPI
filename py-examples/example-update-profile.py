import requests

url = "http://local.adspower.net:50325/api/v1/user/update"

payload = {
  "user_id": "XX",
  "name": "test",
  "domain_name": "facebook.com",
  "repeat_config": [
    "0"
  ],
  "open_urls": [
    "http://www.baidu.com",
    "https://www.google.com"
  ],
  "country": "us",
  "remark": "remark",
  "fingerprint_config": {
    "webrtc": "proxy",
    "do_not_track": "true",
    "hardware_concurrency": "default",
    "device_memory": "default"
  },
  "user_proxy_config": {
    "proxy_soft": "no_proxy"
  }
}
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, json=payload)

print(response.text)
