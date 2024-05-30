import { CheerioCrawler } from "crawlee";
import { Request, Response } from "express";
import router from "../routes/routes.js";
import { Dataset } from "crawlee";
import { labels } from "../constants.js";

class DrugListControler {
 
  public async scrape(req: Request, res: Response) {
    const query = req.query.query;

    if (!query) {
      return res.status(400).send({ error: "Query parameter is required" });
    }

    const crawler = new CheerioCrawler({
      requestHandler: router,
      maxRequestsPerCrawl: 20,
    });

    try {
      await crawler.run([
        {
          url: `https://go.drugbank.com/unearth/q?searcher=drugs&query=${query}&button=`,
          label: labels.DrugList,
        },
      ]);

      const data = (await Dataset.getData()).items[0];
      console.log(data)
      res.status(200).json(data);
    } catch (error) {
      console.log(error)
      res.status(500).send({ error: "Scraping failed", details: error });
    }
  }
}

export default DrugListControler;
