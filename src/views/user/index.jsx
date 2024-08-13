import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <Ionicons name="accessibility" size={32} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
