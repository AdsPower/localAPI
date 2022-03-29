import requests

url = "http://local.adspower.net:50325/api/v1/group/create"

payload = {
  "group_name": "your_group_name"
}
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
