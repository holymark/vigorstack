import express, { Router } from "express";
import SmsController from "../controllers/smsController.js";
import DrugListControler from "../controllers/druglist.js";

const router = Router();
const SMS = new SmsController();
const DrugList = new DrugListControler();


router.post("/send-sms", SMS.sendSms);
router.get("/scrape", DrugList.scrape);

export default router;
