//Importar Playwright
const playwright = require("playwright");

const url = "http://localhost:2368/ghost/";

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ["chromium"]) {
    //, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType + "-------------------------------------------");

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise((r) => setTimeout(r, 7000));
    await page.click("css=button");
    await new Promise((r) => setTimeout(r, 9000));
    console.log("Project loaded");

    //Interactuar con la aplicación web
    await page.goto("http://localhost:2368/ghost/#/signin");

    await page.type(
      'input[class="email ember-text-field gh-input ember-view"]',
      "diegof.eslava@gmail.com"
    );

    await page.type(
      'input[class="password ember-text-field gh-input ember-view"]',
      "MISO420899494949494"
    );

    await page.click(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    );

    await new Promise((r) => setTimeout(r, 5000));

    await page.click('a[href="#/tags/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.click('a[href="#/tags/prueba/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.click('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]');

    await new Promise((r) => setTimeout(r, 1000));

    await page.click(
      'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]'
    );

    await new Promise((r) => setTimeout(r, 3000));

    await page.click('a[href="#/tags/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.screenshot({ path: "./prueba3.png" });

    //...

    //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
