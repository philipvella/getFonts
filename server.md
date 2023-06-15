# Using the "load-font" File

This guide provides instructions on how to use the "load-font" file in your Node.js application. The "load-font" file sets up an Express server that serves a font file in response to a specific route.

## Prerequisites

Before you begin, ensure that you have the following:

- Node.js installed on your machine.
- Basic knowledge of JavaScript and Express.

## Installation

1. Create a new directory for your project (if not already created) and navigate to it in your terminal.

2. Initialize a new Node.js project by running the following command:

   ```shell
   npm init -y
   ```

3. Install the required dependencies by executing the following command:

   ```shell
   npm install express axios
   ```

4. Create a new file called `load-font.js` and paste the provided code into it.

## Usage

To use the "load-font" file in your application, follow these steps:

1. Import the required modules at the beginning of your file:

   ```javascript
   const express = require('express');
   const axios = require('axios');
   const path = require('path');
   ```

2. Create an instance of the Express application and define a port for your server:

   ```javascript
   const app = express();
   const PORT = 3000;
   ```

3. Set up a static middleware to serve static files (if needed). Adjust the path to your static files accordingly:

   ```javascript
   app.use(express.static(path.join(__dirname, 'public')));
   ```

4. Define a route to handle font file requests. Customize the `referer` and `fontUrl` variables to match your requirements:

   ```javascript
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
   ```

   Make sure to adjust the headers and response type as needed.

5. Start the Express server by adding the following line:

   ```javascript
   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

6. Save the file and run your Node.js application using the following command:

   ```shell
   node load-font.js
   ```

   The server will start and listen on the specified port.

7. Create an HTML file (`index.html` for example) in the same directory as the `load-font.js` file and paste the following code into it:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="UTF-8">
       <title>Welcome to My Website</title>
       <style>
           @font-face {
               font-family: 'Assistant';
               src: url('http://localhost:3000/load-font');
           }

           body {
               font-family: 'Assistant';
               text-align: center;
           }

           h1 {
               color: #333;
               margin-top: 100px;
           }
       </style>
  