# localAPI
AdsPower supports Local API, which has functions like reading and writing account configuration information, opening and closing browsers, searching for accounts. Besides, it can cooperate with Selenium and Puppeteer to execute browser operations automatically.

<br />
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
 - Max. times to import account one day: browser environments quantity of your package * 10
 - Max. times to open browser one day: browser environments quantity of your package * 10
 - At the same time, it supports the mode of no-interface api-key to start the Local API service. For details, see: [Help center](https://help.adspower.net/?page_id=1968&lang=en)

 <br />
 <br />

> ## **What the Local API supports**

- [x] <a href="#api_status">API Status</a>
- [x] Browser Operation
  - [x] Open Browser
  - [x] Close Browser
  - [x] Check Open Status
- [x] Group Management
  - [x] Create Group
  - [ ] Update Group(coming soon)
  - [x] Query Group
- [x] <a href="#profile_management">Profile Management</a>
  - [x] Create Profile
  - [x] Update Profile
  - [x] Query Profile
  - [x] Delete Profile
  - [x] Update Profile Group
  - [x] Delete Profile Cache

<br />

> ### <a name="api_status">API Status</a>
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /status

&ensp; &ensp; **Method:** GET

&ensp; &ensp; **Description:** Used to check the usability of the API 
<br/>

### &ensp; **Returning Data**
```
{
  "code":0,
  "msg":"success"
}

```
<br />

> ### Browser Operation

<br/>

> #### Open Browser

<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/browser/start

&ensp; &ensp; **Method:** GET

&ensp; &ensp; **Description:** Used to open browsers and account ID designation is required. After opening users can execute selenium and puppeteer automation operations, using browser debug API. Currently AdsPower is based on Chromium 88. Users should update AdsPower version to v 3.4.1 or above. Besides, selenium should cooperate with specific Webdriver, after starting AdsPower users will receive a return value and then get access to Webdriver using the value. 
<br/>

### &ensp; **Request Parameters**
&ensp; **Query: Nonessential parameter and you may pass it or not**


| Name              |Necessary              |Default              |Example              |Description              |Remarks |     
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
|user_id              |YES              |-              |h1yynkm              |Unique ID, generated after importing account |     
|serial_number   |NO              |-              |123              |Priority will be given to user id when user id is passed.|            
|open_tabs   |NO  |0   |1  |Open a platform or historical page. 0: Open (Default setting);  1: Close |should update to V2.4.2.9 or above            
|launch_args   |NO  |-  |["--window-position=400,0","--blink-settings=imagesEnabled=false", "--disable-notifications"]  |Browser startup parameters. eg: --blink-settings=imagesEnabled=false: Prohibit image loading.  --disable-notifications: Disable notifications   |should update to V2.4.6.7 or above            
|headless    |NO  |0  |1   |Whether to start the headless browser 0:NO (Default) 1:YES  |should update to V2.4.6.7 or above            
|disable_password_filling   |NO   |0    |1    |Whether to disable the function of filling password 0:NO (Default) 1:YES  |should update to V2.4.6.7 or above            
|clear_cache_after_closing  |NO    |0   |1   |Whether to delete the cache after closing the browser 0:NO (Default) 1:YES   |should update to V2.4.7.6 or above            
|enable_password_saving              |NO              |0              |1              |Whether to allow password saving 0:NO (Default) 1:YES              |should update to V2.4.8.7 or above            

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code":0,
  "data":{
    "ws":{
      "selenium":"127.0.0.1:xxxx",    //Browser debug interface, used for selenium automation
      "puppeteer":"ws://127.0.0.1:xxxx/devtools/browser/xxxxxx"  //Browser debug interface, used for puppeteer automation
    },
    "debug_port": "xxxx", //debug port
    "webdriver": "C:\xxxx\chromedriver.exe" //webdriver path
  },
  "msg":"success"
}

//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}  

```

<br/>

> #### Close Browser 
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/browser/stop

&ensp; &ensp; **Method:** GET

&ensp; &ensp; **Description:** Used to close browsers and account ID designation is required.
<br/>

### &ensp; **Request Parameters**
&ensp; **Query:** Nonessential parameter and you may pass it or not

|Name              |Necessary              |Default              |Example              |Description            
|------|------|------|------|------|
|user_id              |YES              |-              |h1yynkm              |Unique ID, generated after importing account            
|serial_number              |NO              |-              |123              |Priority will be given to user id when user id is passed.            

<br/>

### &ensp; **Returning Data**
```
{
  "code":0,
  "msg":"success"
}
```

<br/>

> #### Check Open Status
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/browser/active

&ensp; &ensp; **Method:** GET

&ensp; &ensp; **Description:** Used to check browser open status and account ID designation is required
<br/>

### &ensp; **Request Parameters** 
&ensp; **Query:** Nonessential parameter and you may pass it or not

|Name              |Necessary              |Default              |Example              |Description            
|------|------|------|------|------
|user_id              |YES              |-              |h1yynkm              |Unique ID, generated after importing account             
|serial_number              |NO              |-              |123              |Priority will be given to user id when user id is passed.           

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code":0,
  "data":{
    "status": "active",    //Open in browser: “active”, Close in browser: “inactive”
    "ws":{
      "selenium":"127.0.0.1:xxxx",    //Browser debug interface, used for selenium automation
      "puppeteer":"ws://127.0.0.1:xxxx/devtools/browser/xxxxxx"   //Browser debug interface, used for puppeteer automation
    }
  },
  "msg":"success"
}

//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}

```

<br/>

> ### Group Management

<br/>

> #### Create Group
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/group/create

&ensp; &ensp; **Method:** POST

&ensp; &ensp; **Description:** Used to add group and divide accounts imported into several groups. Group name should be unique. After creating a group there will be a group ID. Group ID 0 is the default setting of system.
<br/>

### &ensp; **Request Parameters** 
&ensp; **Body:** Nonessential parameter and you may pass it or not, format of parameter to be passed: JSON
|Name              |Type              |Necessary              |Default              |Example              |Description            
|------|------|------|------|------|------
|group_name              |text              |YES              |-              |group1              |Unique name of the new group            

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code": 0,
  "data": {
    "group_id":"xxxxxxx"  //Group ID after adding group
    "group_name":"group1" //Group name
  }      
  "msg": "Success"
}
        
//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}

```

<br/>

> #### Update Group(coming soon)
- Coming Soon

<br/>


> #### Query Group
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/group/list

&ensp; &ensp; **Method:** GET

&ensp; &ensp; **Description:** Used to search group information. Group information includes group ID, group name. Group ID 0 is set by default.
<br/>

### &ensp; **Request Parameters** 
&ensp; **Query:** Nonessential parameter and you may pass it or not

|Name            |Necessary            |Default            |Example            |Description          
|------|------|------|------|------
|group_name            |NO            |-            |group1            |Enter a group name and search. If it is empty, system will search all groups.          
|page            |NO            |1            |1            |Set from page 1 by default          
|page_size            |NO            |1            |10            |1 piece of data per page by default, max. 2000          

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code": 0,
  "data": {
    "list": [
      {
        "group_id": "100",     //Group ID, used to add account
        "group_name": "group1"  //Group name
      },
      {
        "group_id": "101",
        "group_name": "group2"
      }
    ],
    "page": 1,
    "page_size": 10
  },
  "msg": "Success"
}

//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}

```

<br/>

> ### <a name="profile_management">Profile Management</a>

<br/>

> #### Create Profile
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/user/create

&ensp; &ensp; **Method:** POST

&ensp; &ensp; **Description:** Create account, which allows to configure platform account name and password, cookie, proxy, fingerprint and so on. After importing there will be an account ID

<br/>

### &ensp; **Request Parameters** 
&ensp; **Body:** Nonessential parameter and you may pass it or not, format of parameter to be passed: JSON

|Name              |Type              |Necessary              |Default              |Example              |Description              |Remarks            
|------|------|------|------|------|------|------
|name    |text   |NO  |-   |user A   |The name of the account, no more than 100 characters   |            
|domain_name              |text              |YES              |-              |facebook.com              |Domain name of user’s account platform, such as facebook.com, amazon.com... Will open when clicking Open.               |            
|open_urls              |list              |NO              |-              |["http://www.baidu.com","https://www.google.com"]              |Other urls when opening browser. If leaving it empty, will open the domain name url.              |            
|repeat_config              |list              |NO              |-              |[2,3]              |Account deduplication. Default setting: Allow duplication.               0: Allow duplication;               2: Deduplication based on the account name/password;               3: Deduplication based on cookie;               4: Deduplication based on c_user (c_user is a specific tag for Facebook)                            |            
|username              |text              |NO              |-              |myusername              |Fill in at least one of the following: username /password or cookie information. If username /password duplication is allowed, leave here empty.                            |            
|password              |text              |NO              |-              |123456              |Fill in at least one f the following: username /password or cookie information. If username /password duplication is allowed, leave here empty.              |            
|cookie              |text              |NO              |-              |[ { "domain": ".baidu.com", "expirationDate": ,                "name":"path": "/","sameSite": "unspecified",                "secure":true, "value": "", "id": 1 } ]              |Fill in at least one of the following: username /password or cookie information. If username /password repeat is allowed, leave here empty. Format: JSON                            |            
|ignore_cookie_error              |text              |NO              |0              |1              |                0：When the cookie verification fails, the cookie format is incorrectly returned directly                1：When the cookie verification fails, filter out the data in the wrong format and keep the cookie in the correct format                Only supports netspace                            |Should upgrade to V2.4.6.6 or above            
|group_id              |text              |YES              |-              |100              |Add to corresponding group.              |            
|ip              |text              |NO              |-              |xxx.xxx.xxx.xxx              |Proxy IP used for an account to log in. Fill in when proxy software is 911s5, lumauto or oxylabs.              |            
|country              |text              |NO              |-              |us              |Country or region your 911s5, lumauto and oxylabs account belongs to.Without 911s5, lumauto and oxylabs IP please enter country.              |            
|region              |text              |NO              |-              |xx              |State or province where account logged in, optional.              |            
|city         |text              |NO              |-              |xx              |City where account logged in, optional.              |            
|remark       |text              |NO              |-              |This is remark.              |Remarks to describe accounts              |            
|user_proxy_config              |<a href=#userProxyConfig>**<u>userProxyConfig</u>**</a>              |YES              |-              |{"proxy_type":"http","proxy_host":"123.0.0.1",                "proxy_port":"12","proxy_user":"12",                "proxy_password":"12","proxy_soft":"luminati"}              |Account proxy configuration, for details please see parameter object userPorxyConfig                            |            
|fingerprint_config              |<a href=#fingerprintConfig>**<u>fingerprintConfig</u>**</a>              |YES              |-              |{"automatic_timezone": "1","language": ["en-US","en"],"flash": "block","fonts":                ["all"],"webrtc":                "disabled",                "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)                Chrome/87.0.4280.141 Safari/537.36"}              |Account fingerprint configuration, for details please see parameter object fingerprintConfig                            |            

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code": 0,
  "data": {
    "id":"xxxxxxx"  //Unique ID(user_id) after importing account
  }      
  "msg": "Success"
}
        
//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}

```

<br/>


> #### Update Profile
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/user/update

&ensp; &ensp; **Method:** POST

&ensp; &ensp; **Description:** Edit account to update account username/password, cookie, proxy, fingerprint and so on
<br/>

### &ensp; **Request Parameters** 
&ensp; **Body:** Nonessential parameter and you may pass it or not, format of parameter to be passed: JSON

|Name              |Type              |Necessary              |Default              |Example              |Description              |Remarks            
|------|------|------|------|------|------|------
|user_id              |text              |YES              |-              |xxxxxxx              |User id being edited              |            
|name              |text              |NO              |-              |user A              |The name of the account, no more than 100 characters              |            
|domain_name              |text              |NO              |-              |facebook.com              |Domain name of user’s account platform, such as facebook.com, amazon.com... Will open when clicking Open.              |            
|open_urls              |list              |NO              |-              |["http://www.baidu.com","https://www.google.com"]              |Other urls when opening browser. If leaving it empty, will open the domain name url.              |            
|username              |text              |NO              |-              |myusername              |Fill in at least one of the following: username /password or cookie information. If username /password duplication is allowed, leave here empty.                            |            
|password              |text              |NO              |-              |123456              |Fill in at least one of the following: username /password or cookie information. If username /password duplication is allowed, leave here empty.               |            
|cookie              |text              |NO              |-              |[ { "domain": ".baidu.com", "expirationDate": ,                "name":"path": "/","sameSite": "unspecified",                "secure":true, "value": "", "id": 1 } ]              |Fill in at least one of the following: username /password or cookie information. If username /password repeat is allowed, leave here empty. Format: JSON                            |            
|ignore_cookie_error              |text              |NO              |0              |1              |                0：When the cookie verification fails, the cookie format is incorrectly returned directly                1：When the cookie verification fails, filter out the data in the wrong format and keep the cookie in the correct format                Only supports netspace                            |Should upgrade to V2.4.6.6 or above            
|ip              |text              |NO              |-              |xxx.xxx.xxx.xxx              |Proxy IP for an account to log in, fill it when proxy software is 911s5, lumauto or oxylabs              |            
|country              |text              |NO              |-              |us              |Country or region where your account belongs to. Without 911s5, lumauto or oxylabs IP please enter country              |            
|region              |text              |NO              |-              |xx              |State or province where an account logged in, optional              |            
|city              |text              |NO              |-              |xx         |City where an account logged in, optional              |            
|remark          |text              |NO              |-              |This is remark              |Remark to describe accounts              |            
|user_proxy_config              |<a href=#userProxyConfig>**<u>userProxyConfig</u>**</a>              |NO              |-              |{"proxy_type":"http","proxy_host":"123.0.0.1",                "proxy_port":"12","proxy_user":"12",     "proxy_password":"12","proxy_soft":"luminati"}              |Account proxy configuration, for details please see parameter object userProxyConfig                 |            
|fingerprint_config              |<a href=#fingerprintConfig>**<u>fingerprintConfig</u>**</a>              |NO              |-              |{"automatic_timezone": "1","language": ["en-US","en"],"flash": "block","fonts": ["all"],"webrtc":                "disabled",                "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)                Chrome/87.0.4280.141 Safari/537.36"}              |Account fingerprint configuration, for details please see parameter object fingerprintConfig                            |            

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code": 0,
  "data": {
  }      
  "msg": "Success"
}
        
//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}

```

<br/>

> #### Query Profile
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/user/list

&ensp; &ensp; **Method:** GET

&ensp; &ensp; **Description:** View imported account information
<br/>

### &ensp; **Request Parameters** 
&ensp; **Query:** Nonessential parameter and you may pass it or not

|Name              |Necessary              |Default              |Example              |Description            
|------|------|------|------|------
|group_id    |NO              |-              |1001              |Query by group ID. If leave here empty, system will search all groups            
|user_id              |NO              |-              |xxxxxxx              |Query by user id            
|serial_number              |NO              |-              |123              |Query by serial number            
|page              |NO              |1              |1              |Query by page number, default setting: 1            
|page_size              |NO              |1              |50              |Default setting: 1/page, max. 100/page            

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code": 0,
  "data": {
    "list": [
    {
      "serial_number": "1",
      "user_id": "XXX",
      "name": "XXX",
      "group_id": "1",
      "group_name": "XX",
      "domain_name": "facebook.com",
      "username": "username",
      "remark": "remark",
      "created_time": "1612520997", // Timestamp
      "ip": "13.251.172.174",
      "ip_country": "sg",
      "password": "",
      "last_open_time": "1621333030" // Last opened time (Timestamp)
    }],
    "page": 1,
    "page_size": 50
  },
  "msg": "Success"
}
        
//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}
```

<br/>

> #### Delete Profile
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/user/delete

&ensp; &ensp; **Method:** POST

&ensp; &ensp; **Description:** Delete useless accounts, batch deletion is allowed, max. quantity to delete once: 100
<br/>

### &ensp; **Request Parameters** 
&ensp; **Body:** Nonessential parameter and you may pass it or not, format of parameter to be passed: JSON

|Name              |Type              |Necessary              |Default              |Example              |Description            
|------|------|------|------|------|------
|user_ids     |list       |YES     |-       |["xxx"]         ["xxx","yyy","zzz"]              |User id being deleted, format: array            

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code":0,
  "data":{},
  "msg":"success"
}

//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}

```

<br/>

> #### Update Profile Group
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/user/regroup

&ensp; &ensp; **Method:** POST

&ensp; &ensp; **Description:** Regroup accounts according to ID

<br/>

### &ensp; **Request Parameters** 
&ensp; **Body:** Nonessential parameter and you may pass it or not, format of parameter to be passed: JSON

|Name              |Type              |Necessary              |Default              |Example              |Description            
|------|------|------|------|------|------
|user_ids              |list              |YES              |-              |["xxx"]                ["xxx","yyy","zzz"]              |User id being grouped, format: array            
|group_id              |text              |YES              |-              |123              |Corresponding group id            

<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code":0,
  "data":{},
  "msg":"success"
}

//Operation failed
{
  "code":-1,
  "data":{},
  "msg":"failed"
}

```

<br/>

> #### Delete Profile Cache
<br/>

### &ensp; **Basic Information**

&ensp; &ensp; **Path:**  /api/v1/user/delete-cache 

&ensp; &ensp; **Method:** POST

&ensp; &ensp; **Description:** Used to clear all local caches generated by opening the browser. For account security, please be sure to use this interface when the device is not opening the browser. Need to be updated to V2.4.7.4
<br/>

### &ensp; **Returning Data**
```
//Operation succeeded
{
  "code":0,
  "msg":"success"
}

//If the current user has an open browser, the execution will fail
{
  "code":-1,
  "msg":"There are currently open browsers, please close them before deleting the cache"
}

```

<br/>


> ## Parameter Object
<br/>

> ### user_proxy_config 

### &ensp; **user_proxy_config:** Information about account proxy configuration. AdsPower supports frequently used proxy software and protocol.

|Name              |Type              |Necessary              |Default              |Example              |Description            
|------|------|------|------|------|------
|proxy_soft              |text              |YES              |-              |luminati              |Currently supports 911, luminati, lumauto, oxylabsatuto, ssh, other, noproxy            
|proxy_type              |text              |NO              |-              |socks5              |Currently supports http, https, socks5; For 911 or no_proxy, you may pass the parameter or not            
|proxy_host              |text              |NO              |-              |pr.oxylabs.io               |Address of the proxy server, users can enter domain name or IP; For 911 or no_proxy, you may pass the parameter or not            
|proxy_port              |text              |NO              |-              |123              |Port of the proxy server; For 911 or no_proxy, you may pass the parameter or not            
|proxy_user              |text              |NO              |-              |abc              |Proxy account name            
|proxy_password              |text              |NO              |-              |xyz              |Proxy account password            
|proxy_url              |text              |NO              |-              |http://www.xxx.com/              |The link to change IP is used for mobile proxies and only supports http/https/socks5 proxy.                1. You can change proxy IP address via the link                2. If many profiles have the same proxy settings, IP address of these profiles will be changed simultaneously after refreshing proxy IP address            

For user_proxy_config to pass corresponding JSON object is required, for example,

 - 911s5 <br/>
    {"proxy_soft":"911"}
 - luminati <br/>
    {"proxy_soft":"luminati","proxy_type":"http","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xxx","proxy_password":"**"}
 - luminati https <br/>
    {"proxy_soft":"luminati","proxy_type":"https","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xxx","proxy_password":"**"}
 - luminati socks5
    {"proxy_soft":"luminati","proxy_type":"socks5","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xxx","proxy_password":"**"}
 - lumauto<br/>
    {"proxy_soft":"lumauto","proxy_type":"http","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xxx","proxy_password":"**","global_config":"0"}<br/>
    **Note: global_config is optional**<br/>
    - Custom (Default setting)
    - Use luminati dynamic IP in global settings {"proxy_soft":"lumauto","proxy_type":"http","global_config":"1"}
 - oxylabsauto <br/>
    {"proxy_soft":"oxylabsauto","proxy_type":"http","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xx","proxy_password":"**","global_config":"0"}<br/>
    **Note: global_config is optional**<br/>
     - Custom (Default setting)
     - Use oxylabs dynamic IP in global settings {"proxy_soft":"oxylabsauto","proxy_type":"http","global_config":"1"}
 - socks5<br/>
    {"proxy_soft":"other","proxy_type":"socks5","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xxx","proxy_password":"**"}
 - http<br/>
    {"proxy_soft":"other","proxy_type":"http","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xxx","proxy_password":"**"}
 - https<br/>
    {"proxy_soft":"other","proxy_type":"https","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xxx","proxy_password":"**"}
 - ssh<br/>
    {"proxy_soft":"ssh","proxy_type":"socks5","proxy_host":"xxxx","proxy_port":"xx","proxy_user":"xxx","proxy_password":"**"}
 - no_proxy<br/>
    {"proxy_soft":"no_proxy"}

<br/>

> ### fingerprint_config 

### &ensp; **fingerprint_config:** Information about browser fingerprint configuration. AdsPower allows to configure many kinds of fingerprints.

|Name              |Type              |Necessary              |Default              |Example              |Description              |Remarks            
|------|------|------|------|------|------|------
|automatic_timezone              |text              |NO              |1              |1              |1: Timezone,  automatically generated based on IP (Default setting); 0: Custom timezone              |            
|timezone              |text              |NO              |-              |America/Yellowknife              |Custom timezone, empty string "" represents local timezone by default              |            
|webrtc              |text              |NO              |disabled              |disabled              |Chrome instant messaging component, 3 options:                Replace (Use proxy IP to cover real IP);                Real (The local IP is acquired);                Disabled (Default setting, website cannot obtain your IP)                            |            
|location              |text              |NO              |ask              |ask              |Website requests  your current location.  Ask: ask for  permission (Default setting), the same as common browsers; Allow: always allow website to obtain your location information; Block: always block  obtaining location                            |            
|location_switch              |text              |NO              |1              |1              |1: Location, generated based on IP (Default setting); 0: Custom location              |            
|longitude              |text              |NO              |-              |-40.123321              |Configure the longitude of location, necessary when designating location. From -180 to 180 with 6 number after decimal point.              |            
|latitude              |text              |NO              |-              |30.123321              |Configure latitude of location, necessary when designating location, from -90 to 90 with 6 numbers after decimal point.              |            
|accuracy              |text              |NO              |1000              |1000              |Configure distance of location, necessary when designating location, from 10 to 5000 meters, should be integer              |            
|language              |list              |NO              |["en-US","en"]              |["en-US","en","zh-CN","zh"]              |Language of the browser (Default setting: ["en-US","en"]), supports many languages, format: string array              |            
|language_switch              |text              |NO              |0              |0              |Configure languages based on IP country.                   0: Off;                   1: On.                            |Should upgrade to V2.4.4.3 or above            
|ua              |text              |NO              |-              |Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36                (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36                            |User-agent, default setting: using random ua base. When customizing please make sure that ua format and content meet the requirement.                             |            
|screen_resolution              |text              |NO              |none              |1024_600              |none: default setting, follow current computer. random: random resolution. When customizing, separate them with "_", width_height                             |            
|fonts              |list              |NO              |-              |["all"]                ["Arial","Calibri","Cambria"]              |Font of the browser.                   Allows to customize font, format: string array                            |            
|canvas              |text              |NO              |0              |0              |Browser canvas fingerprint switch.                 1: Add noise;                 0: Use the current computer default Canvas (Default setting)                            |            
|webgl_image              |text              |NO              |0              |0              |Browser webgl image fingerprint switch.                   1: Add noise;                   0: Use the current computer default WebGL (Default setting)                            |            
|webgl              |text              |NO              |0              |0              |Browser webgl metadata fingerprint switch.                   1: Mark;                   2: Custom (need to set a value to replace the real WebGL metadata of your device);                   0: Close (Default setting, uses the current computer default WebGL)                            |                For 2 Custom, should upgrade to V 2.4.3.9 or above                          
|webgl_config              |json              |NO              |{"unmasked_vendor": "", "unmasked_renderer": ""}              |{"unmasked_vendor": "Google Inc.", "unmasked_renderer": "ANGLE (Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0)"}              |Custom browser webgl metadata.Unmasked vendor: providers;Unmasked renderer: can be customized only when webgl is 2. When webgl is 2, vendor and renderer cannot be empty.                            |                Should update to V 2.4.3.9 or above                           
|audio              |text              |NO              |0              |0              |Audio fingerprint switch. 1: Add noise; 0: Close (Default setting, use the current computer default audio)                            |            
|do_not_track              |text              |NO              |default              |true              |DNT means do not track. A browser configuration switch.                   3 options:                  Default;                   True: open;                    False: close.                            |            
|hardware_concurrency              |text              |NO              |4              |4              |The number of CPU cores.Follow the current computer (Default); 2; 4 (Default value if parameter is not passed); 6; 8; 16                            |            
|device_memory              |text              |NO              |8              |8              |Follow the current computer (Default); 2; 4; 6; 8 (Default value if parameter is not passed)                            |            
|flash              |text              |NO              |block              |allow              |Flash configuration switch. Allow or block (Default setting)                             |            
|scan_port_type              |text              |NO              |0              |1              |Port scan protection. 1: Enable; 0: Close (Default setting)                            |            
|allow_scan_ports              |list              |NO              |-              |["4000","4001"]              |Port allowed to be scanned when port scan protection is enabled, format: string array. Leave it empty if not to pass the parameter.                            |            
|media_devices              |text              |NO              |0              |0              |Media devices switch. 0: Off (each browser use default media device id of the computer); 1: On (use corresponding value to cover you real media device id)                            |            
|client_rects              |text              |NO              |1              |1              |ClientRects，0：Each browser uses the default ClientRects of the current computer. 1：Add corresponding noise, generate different ClientRects for each browser on the same computer                            |Should upgrade to V3.6.2 or above            
|device_name_switch              |text              |NO              |0              |0              |Device name, 0: Close, each browser uses the device name of the current computer. 1: Mask, replace your real device name with a suitable value. 2: Custom device name                            |Should upgrade to 3.6.25 or above, when the value is 2, upgrade to V2.4.8.1 and above            
|device_name              |text              |NO              |-              |abcd              |Custom device name                            |Should upgrade to V2.4.8.1 or above            
|random_ua              |json              |NO              |-              |{"ua_version":["80"],"ua_system":["Android"]}              |Support specified system, version setting ua. If you pass in a custom ua at the same time, take the custom ua first.                ua_system: system；ua_version: version.                This field is only supported in the create account interface, and the update account interface does not currently support the specified system and version update ua.                See details[random_ua](#randomua)                            |            
|speech_switch                |text                |NO                |0                |0                |SpeechVoices，0：Each profile uses the default SpeechVoices of the current computer 1：Use a value to replace the real SpeechVoices                                |Should update program version to V3.11.10 or above and kernel version to V2.5.0.9 or above            
|mac_address_config              |json              |NO              |{"model": "0", address: ""}              |{"model": "2", address: "E4-02-9B-3B-E9-27"}              |                MAC address: Support setting an appropriate value instead of the real MAC address. <br>                model: 0 (use the MAC address of the current computer) , 1 (match an appropriate value instead of the real MAC address) , 2 (custom appropriate value instead of the real MAC address). <br>                address: Custom MAC address, when model is 2, this value needs to be passed in.                            |Should update program version to V4.3.9 or above          

<br/>

**Note: For fingerprint_config to pass JSON object is required, example:**
```
{
    "automatic_timezone": "1",
    "language": ["en-US","en","zh-CN","zh"],
    "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141",
    "flash": "block",
    "webrtc": "disabled"
}
          
```


> ## random_ua
**ua_system**: list, not required. If you don’t fill in, it will be random in all systems by default. Support Android, iOS, Windows, Mac OS X , Linux.<br/>
**ua_version**: list, not required. If not filled, it will be random in all versions by default. Each system supports the following versions
<br/>
**for examples:**<br/>
**Windows:** ["95", "94", "93","92", "91", "90", "89", "88", "87", "86", "85", "84", "83", "82", "81", "80", "79", "78", "77"]<br/>
**Mac OS X:** ["89", "87", "86", "85", "84", "83", "81", "80", "79", "78"]<br/>
**Linux:** ["89", "88", "86", "85", "84", "83", "81", "80", "79"]<br/>
**Android:** ["95", "94", "93","92", "91", "90", "80", "79", "78", "77", "76", "75", "74", "73"]<br/>
**iOS:** ["95", "94", "93","92", "91", "90"] <br/>