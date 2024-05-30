import express, { Router } from "express";
import SmsController from "../controllers/smsController.js";
import ScrapingControler from "../controllers/scraper.js";

const router = Router();
const SMS = new SmsController();
const Scraper = new ScrapingControler();

router.post("/send-sms", SMS.sendSms);
router.get("/scrape", Scraper.scrape);

export default router;
