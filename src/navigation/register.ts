import { Navigation } from 'react-native-navigation';
import Profile from '../screens/profile';
import Home from '../screens/home';

const RegisterAllScreens = () => {
    Navigation.registerComponent('ProfileScreen', () => Profile);
    Navigation.registerComponent('HomeScreen', () => Home);

}



export default RegisterAllScreens;