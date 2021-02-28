import { Navigation } from 'react-native-navigation';


export const push = (componentId: string, componentName: string, ...props) => Navigation.push(componentId, {
    component: {
        name: componentName,
        passProps: {
            data: props
        }

    }
});

export const pop = (componentId: string) => Navigation.pop(componentId);
