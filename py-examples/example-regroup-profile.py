import requests

url = "http://local.adspower.net:50325/api/v1/user/regroup"

payload = {
  "user_ids": [
    "XX"
  ],
  "group_id": "0"
}
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
