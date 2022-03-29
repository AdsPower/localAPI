const axios = require('axios');
const puppeteer = require('puppeteer-core');

const profileId = 'XXX';

// http://local.adspower.net:50325: Script can go to Profile Management-> click Settings-> click Cache folder-> local_api file to obtain API address
axios.get(`http://local.adspower.net:50325/api/v1/browser/start?user_id=${profileId}`).then(async (res) => {
  console.log(res.data);

  if(res.data.code === 0 && res.data.data.ws && res.data.data.ws.puppeteer) {
    try{
        const browser = await puppeteer.connect({
            browserWSEndpoint: res.data.data.ws.puppeteer,
            defaultViewport:null
        });

        const page = await browser.newPage();
        await page.goto('https://www.adspower.com');
        await page.screenshot({ path: './adspower.png' });
        await browser.close();
    } catch(err){
        console.log(err.message);
    }
  }
}).catch((err) => {
	console.log(err)
})