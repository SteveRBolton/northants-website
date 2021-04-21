import React, { ReactElement } from 'react';
import { AlertBannerService } from 'northants-design-system';

const AlertBannerServiceIE = (): ReactElement | null => {
  let usingInternetExplorer = null;
  console.log('Alert banner start');
  if (typeof window !== 'undefined') {
    console.log('If window is not undefined');
    if (navigator) {
      console.log('If navigator', navigator);
      // Can't use destructing assignment here as it needs to work on IE.
      const { userAgent } = navigator;
      console.log('User agent', userAgent);
      const regEx = new RegExp('(?:\\b(MS)?IE\\s+|\\bTrident\\/7\\.0;.*\\s+rv:)(\\d+)');
      console.log('RegEx', regEx);
      usingInternetExplorer = regEx.exec(userAgent);
      console.log('Using Internet Explorer', usingInternetExplorer);
    }
  }
  if (usingInternetExplorer != null) {
    console.log('If usingInternetExplorer is true', usingInternetExplorer);
    return (
      <AlertBannerService title="Browser upgrade recommended">
        <p>
          It looks like you are using an out of date version of Internet Explorer. Using this browser will mean that
          certain features of this website will not work. It also means you are vulnerable to security exploits.{' '}
          <strong>Microsoft will no longer support Internet Explorer from August 17th 2021.</strong>
        </p>
        <p>
          We recommend that you use a modern up to date and secure browser to view this and all other websites. Download
          and install a new browser:
        </p>
        <ul>
          <li>
            <a href="https://www.microsoft.com/en-us/edge" title="Download and install Edge">
              Microsoft Edge
            </a>
          </li>
          <li>
            <a href="https://www.google.co.uk/chrome/" title="Download and install Chrome">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://www.mozilla.org/en-GB/firefox/new/" title="Download and install Firefox">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/uk/safari/" title="Download and install Safari">
              Apple Safari
            </a>
          </li>
        </ul>
      </AlertBannerService>
    );
  }
  return null;
};

export default AlertBannerServiceIE;
