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
    console.log("Project loaded");

    //Interactuar con la aplicación web
    await page.goto("http://localhost:2368/ghost/");

    await new Promise((r) => setTimeout(r, 3000));

    await page.click('a[href="#/setup/two/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.type('input[tabindex="1"]', "Blog Diego");

    await new Promise((r) => setTimeout(r, 1000));

    await page.type('input[tabindex="2"]', "Diego Eslava");

    await new Promise((r) => setTimeout(r, 1000));

    await page.type('input[tabindex="3"]', "diegof.eslava@gmail.com");

    await new Promise((r) => setTimeout(r, 1000));

    await page.type('input[tabindex="4"]', "MISO420899494949494");

    await new Promise((r) => setTimeout(r, 1000));

    await page.click(
      'button[class="gh-btn gh-btn-green gh-btn-lg gh-btn-block gh-btn-icon ember-view"]'
    );

    await new Promise((r) => setTimeout(r, 3000));

    await page.click('button[class="gh-flow-skip"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.click('a[href="#/tags/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.click('a[href="#/tags/new/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.type('input[id="tag-name"]', "Prueba");

    await page.click(
      'button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]'
    );

    await page.click('a[href="#/tags/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.screenshot({ path: "./prueba1.png" });

    //...

    //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
