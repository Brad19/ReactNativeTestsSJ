import React from 'react';
import { View, Text, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.body}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text>Navigate to Profile Screen</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'skyblue'
    },
    body: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;