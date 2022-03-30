import requests

profildId = 'XX'
url = "http://local.adspower.net:50325/api/v1/browser/stop?user_id=" + profildId

response = requests.request("GET", url, headers={}, data={})

print(response.text)
