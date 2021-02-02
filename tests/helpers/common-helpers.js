import {t, Selector, ClientFunction} from 'testcafe';

export default async function getURL() {
    return ClientFunction(() => window.location.href)();
} 