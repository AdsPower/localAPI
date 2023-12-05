# localAPI
AdsPower supports Local API, which has functions like reading and writing account configuration information, opening and closing browsers, searching for accounts. Besides, it can cooperate with Selenium and Puppeteer to execute browser operations automatically.

<br />

> ## How to Use AdsPower Local API

 - Users of AdsPower team collaboration version have access to API
 - Start AdsPower, log in the account with API permission
 - Go to Account Management-> Setting-> Local API to check the following items
   - API status: Success
   - API address: http://local.adspower.net:50325/ or http://localhost:50325/ (port: 50325, which might change and subjects to the address in the setting).
   - Script can go to Profile Management-> click Settings-> click Cache folder-> local_api file to obtain API address
 - Use script or http request tool to invoke Local API, allow to configure account data, browser fingerprint, open or close browser and other operations
 - API parameter type: string, Post format: JSON, unnecessary parameters are optional and can not be passed
 - Access frequency control for all APIs, max. access frequency: 1 request/second
 - At the same time, it supports the mode of no-interface api-key to start the Local API service. For details, see: [Local Api Doc](https://localapi-doc-en.adspower.com/)

 <br />

> ## **What the Local API supports**

- [x] API Status
- [x] Browser Operation
  - [x] Open Browser
  - [x] Close Browser
  - [x] Check Open Status
- [x] Group Management
  - [x] Create Group
  - [ ] Update Group(coming soon)
  - [x] Query Group
- [x] Profile Management
  - [x] Create Profile
  - [x] Update Profile
  - [x] Query Profile
  - [x] Delete Profile
  - [x] Update Profile Group
  - [x] Delete Profile Cache

<br />

## More Details

👉[Local Api Doc](https://localapi-doc-en.adspower.com/)
