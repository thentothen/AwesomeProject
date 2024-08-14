import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
export default function App({ navigation }) {
  useFocusEffect(() => {
    console.log('user active');
  });
  return (
    <View style={styles.container}>
      <Ionicons name="accessibility" size={32} color="green" />
      <Button title="Go to Details" onPress={() => navigation.navigate('UserDetail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
