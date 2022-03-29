import requests

url = "http://localhost:50325/api/v1/user/delete"

payload = {
  "user_ids": [
    "XX"
  ]
}
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
