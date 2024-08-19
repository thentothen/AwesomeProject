//
import React, { useRef, useState, useEffect } from 'react';
import { Text } from 'react-native';
import { AppState, View, StyleSheet, Button } from 'react-native';

export default function App({ navigation }) {
  const [bulr, setBulr] = useState(false);
  const appState = useRef(AppState.currentState);

  return (
    <View style={bulr && styles.bulr}>
      <Text>detail</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('UserDetail2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  bulr: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
