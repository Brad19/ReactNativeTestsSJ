/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import push from './src/navigation/routes';

const App: () => React$Node = (props) => {
  onPress = () => push(props.componentId, 'HomeScreen');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text>Navigate to Home Screen</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
};

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

export default App;
