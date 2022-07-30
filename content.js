console.log('started')
chrome.runtime.onMessage.addListener(
  
  function(request, sender, sendResponse) {
    console.log(request)
    fetch("https://kite.zerodha.com/oms/alerts", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "ENTOKEN_CODE_GOES_HERE",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-kite-version": "2.9.11"
  },
  "referrer": "https://kite.zerodha.com/orders/alerts",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "name="+request.message+"&lhs_exchange=NSE&lhs_tradingsymbol="+request.stock+"&lhs_attribute=LastTradedPrice&operator=%3C%3D&rhs_type=constant&rhs_constant="+request.price+"",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(res => res.json().then(data => console.log(data)));
      sendResponse({farewell: "success"});
  }
);