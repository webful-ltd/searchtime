SearchTime
==========

[![Build Status](https://travis-ci.org/webful-ltd/searchtime.svg?branch=master)](https://travis-ci.org/webful-ltd/searchtime)

This React Native ES6 mobile app lets you search Google for results from a specific time window, in a way that's not easily possible with the official search apps or mobile web site.

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
* With style checks: `yarn test`
* Without: `yarn test-sans-lint`

[Travis CI checks](https://travis-ci.org/webful-ltd/searchtime) require tests and linting rules to pass.

### Check code style
`yarn lint`

Release
-------
### Android

Assuming [Gradle configured locally](https://facebook.github.io/react-native/docs/signed-apk-android.html#setting-up-gradle-variables):

* Update version code and name in `android/app/build.gradle`
* `cd android && ./gradlew assembleRelease`
* To test live build: `react-native run-android --variant=release`
* Upload `android/app/build/outputs/apk/app-release.apk` to [Google Play Developer Console](https://play.google.com/apps/publish/)

### iOS
* `react-native bundle --dev false --entry-file index.ios.js --bundle-output ios/main.jsbundle --platform ios`
* Open project `./ios/SearchTime.xcodeproj` in Xcode & update version numbers
* `react-native run-ios --configuration Release`
* In Xcode, Set build device to Generic iOS Device
* Go to Product > Archive
* Go to Window > Organizer > Archives if not opened automatically. Validate the created archive, and Upload to App Store.
* Complete beta setup [on iTunes Connect](https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app)

Issues
------
[Tracked on GitHub](https://github.com/webful-ltd/searchtime/issues).
