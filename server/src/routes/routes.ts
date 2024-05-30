import { createCheerioRouter, log, Dataset } from "crawlee";
import { labels } from "../constants.js";

const router = createCheerioRouter();

router.addHandler(labels.Start, async ({ enqueueLinks, request }) => {
  const { url } = request;
  log.info(`enqueing new urls in [${url}], [label: Start]`);

  await enqueueLinks({
    globs: ["https://www.crawlee.dev/**"],
    label: labels.DrugList,
  });
});

router.addHandler(labels.DrugList, async ({ request, $, enqueueLinks }) => {
  const url = request.url;
  log.info(`Crawling url: ${url}`);
  const title = $("title");

  console.log(title);
  await Dataset.pushData({ title });
  await enqueueLinks();
});

export default router;
