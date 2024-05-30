import { createCheerioRouter, log, Dataset } from "crawlee";
import { labels } from "../constants.js";

const router = createCheerioRouter();

router.addHandler(labels.DrugListStart, async ({ enqueueLinks, request }) => {
  const { url } = request;
  log.info(`enqueing new urls in [${url}], [label: Start]`);

  await enqueueLinks({
    // globs: ["https://www.crawlee.dev/**"],
    label: labels.DrugList,
  });
});

router.addHandler(labels.DrugList, async ({ request, $, enqueueLinks }) => {
  const url = request.url;
  log.info(`Crawling url: ${url}`);
  const drug_name = $(".content-header")
    .find("h1").text()

  const drug_summary = $('#summary').next('dd').next('div').next("em").text();

  const brand_name = $("#brand-names").next('dd').find('p').text();


  const generic_name = $("#generic-name").next("dd").text()


  const drug_bank_accession_number = $("#drugbank-accession-number").next('dd').text();

  const background_info = $("#background").next('dd').find('p').text();

  // const drug_type = $()
  const drug_weight = $("#weight").next('dd').text();
  // const drug_group = $()
  const chemical_formula = $("#chemical-formula").next('dd').text();

  await Dataset.pushData({
    drug_name,
    drug_summary,
    brand_name,
    generic_name,
    drug_bank_accession_number,
    background_info,
    drug_weight,
    chemical_formula
  });
  await enqueueLinks();
});

router.addDefaultHandler(async () => {
  log.info("Now in default handler")
})

export default router;
