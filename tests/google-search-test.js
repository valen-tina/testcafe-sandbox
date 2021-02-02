import googlePage from './page-model/google-page.js'
import getURL from './helpers/common-helpers.js'

fixture `Google search`
    .page `http://google.com`
    .beforeEach(async t => {
        await console.log("before each test");})
    .afterEach(async t => {
        await console.log("after each test");
    });

test('Search string', async t => {
    let query = "Hello, World!";
    await googlePage.makeSearch(query);
    console.log(await getURL());
    await t.expect(await googlePage.firstLink.innerText).contains(query, `${query} is not found`, {timeout: 500});
});