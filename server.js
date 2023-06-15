const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/load-font', async (req, res) => {
    try {
        const referer = 'https://rb-context-sandbox.myshopify.com/';

        const fontUrl = 'https://fonts.shopifycdn.com/assistant/assistant_n4.bcd3d09dcb631dec5544b8fb7b154ff234a44630.woff2';
        const response = await axios.get(fontUrl, {
            headers: {
                Referer: referer
            },
            responseType: 'arraybuffer'
        });

        res.set('Content-Type', 'font/woff2');
        res.send(response.data);
    } catch (error) {
        console.error('Error loading font:', error.message);
        res.status(500).send('Error loading font');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
