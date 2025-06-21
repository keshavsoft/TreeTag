import express from 'express';

const router = express.Router();

import { router as routerFromGpsTable } from "./GpsTable/routes.js";

router.use("/GpsTable", routerFromGpsTable);

export { router };