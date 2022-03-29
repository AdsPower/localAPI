import profile
import requests

profileId = 'XX'
url = "http://localhost:50325/api/v1/browser/active?user_id=" + profileId

response = requests.request("GET", url, headers={}, data={})

print(response.text)
