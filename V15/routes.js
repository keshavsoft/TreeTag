import express from 'express';

const router = express.Router();

import { router as routerFromGpsCertificatedata } from "./GpsCertificatedata/routes.js";
import { router as routerFromGpsTable } from "./GpsTable/routes.js";

router.use("/GpsCertificatedata", routerFromGpsCertificatedata);
router.use("/GpsTable", routerFromGpsTable);

export { router };