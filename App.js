import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/LoginScreen';
//Register Screens
Navigation.registerComponent(
  "timepass-app.LoginScreen",
  () => LoginScreen
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "timepass-app.LoginScreen",
      navigatorStyle: {
        navBarHidden: true
      }
  }
});