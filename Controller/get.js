const axios = require('axios');
const crypto = require('crypto');
const postData = async (req, res, next) => {
    const apiKey = '5f2ca1e0270bb0e7e4910070456969c6';
    const secretKey = '8e750a43dff978ba7c01fe75570e2bac8cdbe6d6ce3452bd7c956a191a0f98d1';
    const currency = 'BTC';

    // const baseApiUrl = 'https://api.gateio.ws/api/v4';
    const baseApiUrl = 'https://data.gateapi.io/api/1';
    const timestamp = Date.now() /1000;
    const path = "/trade/api33s_usdt"   
    const signaturePayload = timestamp + 'GET' + path;
    // console.log(signaturePayload);
    const signature = crypto.createHmac('sha512', secretKey).update(signaturePayload).digest('hex');
    const requestConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'KEY': apiKey,
            'Timestamp': timestamp,
            'SIGN': signature
        },
        params: {
            currency
        }
    };

    axios.get(baseApiUrl+path, requestConfig)
        .then(response => {
            console.log(response.data);
            // console.log(`Balance of ${currency}: ${response.data.available}`);
        })
        .catch(error => {
            console.error(error);
        });

};
module.exports = postData