import requests

url = "http://local.adspower.net:50325/api/v1/group/list?page=1&page_size=15"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
