# Environment Setup of React Native for Windows

## 0.1 Install Windows Terminal

## 0.2 Install Git
Install Git from [here](https://git-scm.com/download/win).
```
git --version
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
Copy Android SDK Location (ANDROID_SDK_LOCATION). Add new path as
```
ANDROID_SDK_LOCATION/platform-tools
```
and
```
ANDROID_SDK_LOCATION/emulator
```
