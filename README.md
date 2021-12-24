# Environment Setup of React Native for Windows

## 0.1 Install Windows Terminal

## 0.2 Install Git
Install Git from [here](https://git-scm.com/download/win).
```
git --version
```
## 0.3 Install VScode
Install Git from [here](https://code.visualstudio.com/download).
```
{
  "files.autoGuessEncoding": true,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.cursorBlinking": "smooth",
  "files.autoSave": "afterDelay",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "workbench.colorTheme": "Material Theme",
  "[javascript]": {
    "editor.detectIndentation": true,
    "editor.tabSize": 2
  },
  "[javascriptreact]": {
    "editor.detectIndentation": true,
    "editor.tabSize": 2,
    "editor.formatOnPaste": true,
  },
  "[typescript]": {
    "editor.detectIndentation": true,
    "editor.tabSize": 2,
    "editor.formatOnPaste": true,
  },
  "[typescriptreact]": {
    "editor.detectIndentation": true,
    "editor.tabSize": 2,
    "editor.formatOnPaste": true,
  },
  "[json]": {
    "editor.detectIndentation": true,
    "editor.tabSize": 2,
    "editor.formatOnPaste": true,
  },
  "tailwindCSS.experimental.classRegex": [
    "tw\\('([^')]*)"
  ],
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.CustomBrowser": "chrome",
  "autoDocstring.docstringFormat": "google",
  "vsicons.dontShowNewVersionMessage": true,
  "files.associations": {
    "*.rmd": "markdown",
    "*.js": "javascript",
    "*.jsx": "javascriptreact",
    "*.ts": "typescript",
    "*.tsx": "typescriptreact",
  },
  "material-icon-theme.folders.color": "#90a4ae",
  "react-native-tools.showUserTips": false,
  "prettier.requireConfig": true,
}
```

## 1. Install Node.js
Install Node.js from [here](https://nodejs.org/ja/).
Click the check box "Automatically install necessary tools." Finally, if your terminal output "Type Enter to Exit", your Node.js environment is constructed.
```
node -v
```
```
npm -v
```
```
npx -v
```

## 2. Install Expo
Install Expo according to [here](https://docs.expo.dev/get-started/installation/).
```
npm install --global expo-cli
```
```
expo --version
```

## 3. Install Android Studio
### 3.1
Install Android Studio from [here](https://developer.android.com/studio/install).
Android SDK → SDK tools → Select Android SDK Build-Tools and Install it.

### 3.2
Copy Android SDK Location (ANDROID_SDK_LOCATION). Add new path to your environment as
```
ANDROID_SDK_LOCATION/platform-tools
```
and
```
ANDROID_SDK_LOCATION/emulator
```
```
adb --version
```

### 3.3
Install AVD Manager → Pixcel 3 → Q.
```
emulator -list-avds
```
```
emulator @Pixel_3_API_29
```
```
emulator @Pixel_3_API_29 -dns-server 8.8.8.8
```

## 4. Create a new app
How to set up Expo App, click [here](https://docs.expo.dev/get-started/create-a-new-app/).
```
expo init MyApp --npm
```
```
expo start
```
## 5. Install eslint
Install eslint according to [here](https://eslint.org/docs/user-guide/getting-started).
```
npm install eslint --save-dev
```
```
npx eslint --init
```

## 5. Install react navigation
Install react navigation according to [here](https://reactnavigation.org/docs/5.x/getting-started/).
```
npm install @react-navigation/native@5.9.8
```
```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
```
npm install @react-navigation/stack@5.14.9
```
