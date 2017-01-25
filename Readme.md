SearchTime
==========

[![Build Status](https://travis-ci.org/webful-ltd/searchtime.svg?branch=master)](https://travis-ci.org/webful-ltd/searchtime)

This React Native mobile app lets you search Google for results from a specific time window, in a way that's not easily possible with the official search apps or mobile web site.

Issues
------
[Tracked on GitHub](https://github.com/webful-ltd/searchtime/issues).

Install
-------
With [Yarn](https://yarnpkg.com/en/docs/getting-started), run:
* `yarn`

Run
---
* `react-native run-android`
* `react-native run-ios`

Test
----
* With style checks: `npm test`
* Without: `npm run test-sans-lint`

[Travis CI checks](https://travis-ci.org/webful-ltd/searchtime) require tests and linting rules to pass.

### Check code style
`npm run lint`

Release
-------
### Android
### iOS
(Minimum required steps TBC...)
* `react-native bundle --dev false --entry-file index.ios.js --bundle-output ios/main.jsbundle --platform ios`
* but possibly also? `react-native run-ios --configuration Release`
* Maybe make [this change?](http://stackoverflow.com/a/32989683/2803757)
* Open project `./ios/SearchTime.xcodeproj` in Xcode
* Set build device to Generic iOS Device
* Go to Product > Archive
* Go to Window > Organizer > Archives. Validate the created archive, and Upload to App Store.
* Complete beta setup [on iTunes Connect](https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app)
