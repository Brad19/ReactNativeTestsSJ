import { Navigation } from 'react-native-navigation';
import Profile from '../screens/profile';
import Home from '../screens/home';
import UISectionList from '../components/UISectionList';
import UITopbar from '../components/UITopbar';


const RegisterAllScreens = () => {
    Navigation.registerComponent('ProfileScreen', () => Profile);
    Navigation.registerComponent('HomeScreen', () => Home);
    Navigation.registerComponent('SectionList', () => UISectionList);
    Navigation.registerComponent('TopBar', () => UITopbar);
}



export default RegisterAllScreens;