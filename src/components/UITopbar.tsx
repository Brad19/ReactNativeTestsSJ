import React, { useEffect, useState } from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { pop } from '../navigation/routes';

const UITopbar: React.FC<{ firstName: string, lastName: string, componentId?: string, isBackButton?: boolean }> = ({ firstName, lastName, componentId, isBackButton = false }) => {
    const [statusBarHeight, SetStatusBarHeight] = useState(0);
    const [topBarHeight, SetTopBarHeight] = useState(0);

    useEffect(() => {
        const getNavigationConstants = async () => {
            const {
                statusBarHeight,
                topBarHeight
            } = await Navigation.constants();
            SetStatusBarHeight(statusBarHeight);
            SetTopBarHeight(topBarHeight);
        }
        getNavigationConstants();

    }, [])
    const onPress = () => {
        pop(componentId);
    }
    return (
        <View style={[styles.container, { height: statusBarHeight + topBarHeight }]} testID={'Topbar'}>
            {isBackButton && (<TouchableOpacity onPress={onPress}>
                <View style={styles.arrowWrapper}><Text style={{ color: 'white', fontSize: 20 }}>{'<'}</Text></View>
            </TouchableOpacity>)
            }
            <Text style={[styles.title, { fontWeight: '300' }]}>swipe</Text>
            <Text style={[styles.title, { fontWeight: '400' }]}>jobs</Text>
            <View style={styles.innerView}>
                <Text style={styles.subtitle}>{firstName + ' ' + lastName}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 30,
        paddingVertical: 30,
    },
    arrowWrapper: {
        paddingRight: 15
    },
    title: {
        color: 'white',
        fontSize: 30,
    },
    innerView: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20

    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'right'
    }

})

export default UITopbar;