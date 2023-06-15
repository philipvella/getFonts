const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://fonts.shopifycdn.com/assistant/assistant_n4.bcd3d09dcb631dec5544b8fb7b154ff234a44630.woff2',
  headers: { 
    'referer': 'https://rb-context-sandbox.myshopify.com/'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
