//
import { useEffect } from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, Button } from 'react-native';
export default function App({ navigation }) {
  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <>
      <Text>detail</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('UserDetail2')} />
    </>
  );
}
