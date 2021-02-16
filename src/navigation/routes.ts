import { Navigation } from 'react-native-navigation';


const push = (componentId: string, componentName: string) => Navigation.push(componentId, {
    component: {
        name: componentName,
        options: {
            topBar: {
                title: {
                    text: componentName
                }
            }
        }
    }
})

export default push;