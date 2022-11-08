// mit npm init -y wird package json geholt

import express from 'express';
// wofür? Funktionalität von express: Menschen haben packages/codes für andere geschrieben den wir nutzen können
// node wurde für Serverseitiges Coden erstellt
// Express erleichtert uns Webseiten zu hosten
/*
Extra:
app.get('/hello') // wo wollen wir hin? zu www.webseite/hello
*/
import path from 'path';
import {env} from 'process';

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

const app = express();

const publicDir = path.join(__dirname, 'public');     
// Path ist ein Paket
// path.join sorgt dafür, dass öffentliches __ der aktuelle Pathname zusammen mit public??
// mithilfe publicDir... index.html sagt wo alles liegt??

app.use('/', express.static(publicDir));
// TO DO:
// npm install express
// mit node main.js ausführen

app.listen(port, () => { // starte Server
    console.log('Example app listening on port : ${port}');
  });

// Mehrere webservers starten will
// wenn man nur localhost eingebe, und parallel viele Sachen laufen muss der Rechner wissen
// wohin er soll mit dem Port
