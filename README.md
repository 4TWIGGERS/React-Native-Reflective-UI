# Here's the result

https://github.com/front-end-jeko/React-Native-Reflective-UI/assets/43757639/6d50d29f-1c05-4e8b-a8d6-77ac0fd6a075

# Overview

Welcome to the Reflective UI project, a React Native application featuring a camera component, a masked view, a blur view, and other components such as a header, story, posts, and tabs. It also includes an array of users with their names and roles. The project is configured to run on both iOS and Android platforms, and it uses Expo for the development environment.

# Technologies and Frameworks

- React Native
- Expo
- Expo Camera
- Xcode
- Objective-C
- Swift
- Gradle
- Java
- ProGuard

# Installation

Follow the steps below to install and run the project:

1. **Install Node.js and npm**
   - Download and install Node.js [official website](https://nodejs.org/en/download/).
   - Verify the installation by running the following commands in your terminal:
     ```
     node -v
     npm -v
     ```

2. **Clone the GitHub repository**
   - Run the following command in your terminal:
     ```
     git clone https://github.com/4TWIGGERS/React-Native-Reflective-UI.git
     ```
   - Navigate to the project directory:
     ```
     cd React-Native-Reflective-UI
     ```

3. **Install Expo CLI**
   - Run the following command in your terminal:
     ```
     npm install -g expo-cli
     ```

4. **Install the project dependencies**
   - Run the following command in your terminal:
     ```
     npm install
     ```

5. **Install the Expo Camera plugin**
   - Run the following command in your terminal:
     ```
     expo install expo-camera
     ```

6. **Install the Hermes JavaScript engine**
   - Follow the instructions on the [official website](https://hermesengine.dev/docs/android-building).

7. **Install Cocoapods**
   - Run the following command in your terminal:
     ```
     sudo gem install cocoapods
     ```

8. **Install the required iOS packages**
   - Navigate to the iOS directory:
     ```
     cd ios
     ```
   - Run the following command in your terminal:
     ```
     pod install
     ```

9. **Install Android build tools**
   - Open Android Studio.
   - Go to `File > Settings > Appearance & Behavior > System Settings > Android SDK`.
   - Check the box for `Android 11.0 (R)`.
   - Click `Apply`.

10. **Set up the environment for running the app**
    - Open `index.js` and import the 'App' component from the './App' file.
    - Call the 'registerRootComponent' function with the 'App' component as an argument.

11. **Run the project**
    - For iOS, run the following command in your terminal:
      ```
      npm run ios
      ```
    - For Android, run the following command in your terminal:
      ```
      npm run android
      ```

Please note that this guide assumes you have Git, Android Studio, and Xcode installed on your machine. If not, please install them first.
