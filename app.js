import express from 'express';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
var port = normalizePort(process.env.PORT || 5015);

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromToken } from "./Token/routes.js";
import { router as routerFromV14 } from "./V14/routes.js";
import { router as routerFromSV7 } from "./SV7/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/Token", routerFromToken);
app.use("/V14", routerFromV14);
app.use("/SV7", StartFuncFromMiddleware, routerFromSV7);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});