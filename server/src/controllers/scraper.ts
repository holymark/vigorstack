import { CheerioCrawler } from "crawlee";
import { Request, Response } from "express";
import router from "../routes/routes.js";
import { Dataset } from "crawlee";
import { labels } from "../constants.js";

class ScrapingControler {
  public async scrape(req: Request, res: Response) {
    const url = req.query.url;

    if (!url) {
      return res.status(400).send({ error: "URL parameter is required" });
    }

    const crawler = new CheerioCrawler({
      requestHandler: router,
      maxRequestsPerCrawl: 20,
    });

    try {
      await crawler.run([
        {
          url: url as string,
          label: labels.DrugList,
        },
      ]);

      const data = await Dataset.getData();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ error: "Scraping failed", details: error });
    }
  }
}

export default ScrapingControler;
