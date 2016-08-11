# Webviewer Demo

A demo cordova application integrated with PDFTron WebViewer.

## Building Instructions for Android

Clone the repo:

``` bash
git clone https://github.com/yedhukrishnan/webviewer-demo.git
cd webviewer-demo
```

Install [Cordova](https://cordova.apache.org/) if it is not already installed:

``` bash
sudo npm install -g cordova
```

Build the APK for Android:


``` bash
cordova build android
```

This creates the debug APK (`platforms/android/build/outputs/apk/android-debug.apk`). Install the APK in your android device. If you have [ADB](https://developer.android.com/studio/command-line/adb.html) installed in your machine, you can install it using:

``` bash
adb install -r platforms/android/build/outputs/apk/android-debug.apk
```

