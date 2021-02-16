import { Navigation } from "react-native-navigation";
import App from "./App";
import RegisterAllScreens from './src/navigation/register';

Navigation.registerComponent('WelcomeScreen', () => App);

RegisterAllScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'WelcomeScreen'
                        }
                    }
                ]
            }
        }
    });
});