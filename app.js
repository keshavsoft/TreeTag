import express from 'express';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
var port = normalizePort(process.env.PORT || 5015);

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromToken } from "./Token/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromSV1 } from "./SV1/routes.js";
import { router as routerFromV8 } from "./V8/routes.js";
import { router as routerFromV9 } from "./V9/routes.js";
import { router as routerFromSV2 } from "./SV2/routes.js";
import { router as routerFromV10 } from "./V10/routes.js";
import { router as routerFromSV3 } from "./SV3/routes.js";
import { router as routerFromV11 } from "./V11/routes.js";
import { router as routerFromSV4 } from "./SV4/routes.js";
import { router as routerFromV12 } from "./V12/routes.js";
import { router as routerFromSV5 } from "./SV5/routes.js";
import { router as routerFromV13 } from "./V13/routes.js";
import { router as routerFromSV6 } from "./SV6/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/Token", routerFromToken);
app.use("/V1", routerFromV1);
app.use("/SV1", StartFuncFromMiddleware, routerFromSV1);
app.use("/V8", routerFromV8);
app.use("/V9", routerFromV9);
app.use("/SV2", StartFuncFromMiddleware, routerFromSV2);
app.use("/V10", routerFromV10);
app.use("/SV3", StartFuncFromMiddleware, routerFromSV3);
app.use("/V11", routerFromV11);
app.use("/SV4", StartFuncFromMiddleware, routerFromSV4);
app.use("/V12", routerFromV12);
app.use("/SV5", StartFuncFromMiddleware, routerFromSV5);
app.use("/V13", routerFromV13);
app.use("/SV6", StartFuncFromMiddleware, routerFromSV6);

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