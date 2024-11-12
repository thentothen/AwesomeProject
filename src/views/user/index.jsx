import * as React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

import request from '../../request';
export default function App({ navigation }) {
  React.useEffect(() => {
    console.log('mounted');
  }, []);
  useFocusEffect(() => {
    request({ url: 'http://192.168.0.36:8081/getUser' }).then((res) => {
      console.log(res);
    });
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
