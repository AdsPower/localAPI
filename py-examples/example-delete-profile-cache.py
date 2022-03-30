import requests

url = "http://localhost:50325/api/v1/user/delete-cache"

payload={}
headers = {}

response = requests.request("POST", url, headers=headers, json=payload)

print(response.text)
