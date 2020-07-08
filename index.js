import * as functions from "firebase-functions";
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";

import App from "./src/App";
import getNews from "./src/getNews";

const app = express();

const getHtml = function (html) {
  return `<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="utf-8" />
     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <meta name="theme-color" content="#000000" />
     <meta
       name="description"
       content="Web site created using create-react-app"
     />
     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
     
     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
     <title>Hacker News</title>
   </head>
   <body>
     <noscript>You need to enable JavaScript to run this app.</noscript>
     <div id="root">${html}</div>
     <script type="text/javaScript" src="bundle.js"></script>
   </body>
 </html>
 `;
};

app.get('/',(req,res)=>{
  console.log('root');
});

app.get("**", (req, res) => {
  getNews(0).then((news) => {
    const html = renderToString(<App news={news.hits} />);
    const finalHtml = getHtml(html);
    res.set('Cache-Control', 'public, max-age=0, s-maxage=0, no-cache');
    res.send(finalHtml);
  });
});

//cloud function.
export let ssrApp = functions.https.onRequest(app);
