const axios = require('axios');
const CryptoJS = require('crypto-js');
const Data = async (req, res, next) => {
    const apiKey = '5f2ca1e0270bb0e7e4910070456969c6';
    const secretKey = '8e750a43dff978ba7c01fe75570e2bac8cdbe6d6ce3452bd7c956a191a0f98d1';
    const currency = 'BTC';

    const generateSignHeader = (params, secretKey) => {
        const paramString = Object.keys(params).sort().map((key) => {
            return `${key}=${params[key]}`;
        }).join('&');
        const sign = CryptoJS.HmacSHA512(paramString, secretKey).toString(CryptoJS.enc.Hex);
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'key': apiKey,
            'sign': sign
        };
    };
    const symbol = 'btc_usdt';
    const url = `https://data.gateapi.io/api2/1/ticker/${symbol}`;
    const params = {};
    const headers = generateSignHeader(params, secretKey);
    axios.get(url, { headers }).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = Data