import { Navigation } from "react-native-navigation";
// import { alert } from 'react-native';

import App from "./App";
import RegisterAllScreens from './src/navigation/register';

Navigation.registerComponent('WelcomeScreen', () => App);

RegisterAllScreens();

Navigation.setDefaultOptions({
    topBar: {
        visible: false,
    }
})

Navigation.events().registerAppLaunchedListener(async () => {

    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'WelcomeScreen',
                    },
                }],


            }
        }
    });
});