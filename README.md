# Font Fetching Example

This code demonstrates how to fetch a font using Axios in Node.js.

## Prerequisites

To run the code, ensure that you have the following installed:

- [Node.js](https://nodejs.org) (version 12 or above)

## Installation

1. Clone this repository or download the code as a ZIP file and extract it.

2. Open a terminal or command prompt and navigate to the project's directory.

3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

## Usage

To fetch the font, follow these steps:

1. Update the `config` object with the desired font URL and headers:

   ```javascript
   let config = {
     method: 'get',
     maxBodyLength: Infinity,
     url: 'https://fonts.shopifycdn.com/assistant/assistant_n4.bcd3d09dcb631dec5544b8fb7b154ff234a44630.woff2',
     headers: { 
       'referer': 'https://rb-context-sandbox.myshopify.com/'
     }
   };
   ```

   Replace the `url` property with the URL of the font you want to fetch, and update the `referer` value in the `headers` property if necessary.

2. Run the code using the following command:

   ```bash
   npm run start
   ```

   The script will fetch the font using Axios and log the response data to the console.

## License

This code is released under the [MIT License](https://opensource.org/license/mit/).

