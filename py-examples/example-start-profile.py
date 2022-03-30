# The sample passed the test in selenium version 3.141.0

import requests,time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import sys

ads_id = "XXX"
# http://local.adspower.net:50325 Script can go to Profile Management-> click Settings-> click Cache folder-> local_api file to obtain API address
open_url = "http://local.adspower.net:50325/api/v1/browser/start?user_id=" + ads_id
close_url = "http://local.adspower.net:50325/api/v1/browser/stop?user_id=" + ads_id

resp = requests.get(open_url).json()
if resp["code"] != 0:
    print(resp["msg"])
    print("please check ads_id")
    sys.exit()

chrome_driver = resp["data"]["webdriver"]
chrome_options = Options()
chrome_options.add_experimental_option("debuggerAddress", resp["data"]["ws"]["selenium"])
driver = webdriver.Chrome(chrome_driver, options=chrome_options)
print(driver.title)
driver.get("https://www.adspower.com")
time.sleep(5)
driver.quit()
requests.get(close_url)