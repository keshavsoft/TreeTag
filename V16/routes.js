import express from 'express';

const router = express.Router();

import { router as routerFromCertificates } from "./Certificates/routes.js";
import { router as routerFromGpsTable } from "./GpsTable/routes.js";

router.use("/Certificates", routerFromCertificates);
router.use("/GpsTable", routerFromGpsTable);

export { router };