import express from 'express';

const router = express.Router();

import { router as routerFromTokenTable } from "./TokenTable/routes.js";
import { router as routerFromLoginTable } from "./LoginTable/routes.js";
import { router as routerFromDonors } from "./Donors/routes.js";
import { router as routerFromGpsTable } from "./GpsTable/routes.js";

router.use("/TokenTable", routerFromTokenTable);
router.use("/LoginTable", routerFromLoginTable);
router.use("/Donors", routerFromDonors);
router.use("/GpsTable", routerFromGpsTable);

export { router };