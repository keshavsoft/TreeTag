import express from 'express';

const router = express.Router();

import { router as routerFromDonors } from "./Donors/routes.js";
import { router as routerFromGpsTable } from "./GpsTable/routes.js";

router.use("/Donors", routerFromDonors);
router.use("/GpsTable", routerFromGpsTable);

export { router };