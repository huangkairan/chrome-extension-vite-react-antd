import browser from 'webextension-polyfill';

console.log('Hello from the background!');

browser.runtime.onInstalled.addListener((details) => {
  console.log(
    'Extension `chrome-extension-vite-react-antd` installed:',
    details,
  );
});
