import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

let port = normalizePort(process.env.PORT || '5015');

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromV2 } from "./V2/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";
import { router as routerFromV4 } from "./V4/routes.js";
import { router as routerFromV5 } from "./V5/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";
import { router as routerFromV7 } from "./V7/routes.js";

app.use(express.static('Public'));

app.use("/V1", routerFromV1);
app.use("/V2", routerFromV2);
app.use("/V3", routerFromV3);
app.use("/V4", routerFromV4);
app.use("/V5", routerFromV5);
app.use("/V6", routerFromV6);
app.use("/V7", routerFromV7);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});

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