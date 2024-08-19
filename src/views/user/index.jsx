import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

export default function App({ navigation }) {
  React.useEffect(() => {
    console.log('mounted');
    fetch('http://localhost:8081/getUser', {})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useFocusEffect(() => {
    console.log('user active');
  });
  return (
    <View style={styles.container}>
      <Ionicons name="accessibility" size={32} color="green" />
      <Button title="Go to Details" onPress={() => navigation.navigate('UserDetail')} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
