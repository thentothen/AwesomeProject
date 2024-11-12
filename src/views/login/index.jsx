import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username) {
      Alert.alert('请输入用户名');
      return;
    }
    if (!password) {
      Alert.alert('请输入密码');
      return;
    }
    console.log(username);

    fetch('http://192.168.0.36:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // if (res.data) {
        //   navigation.navigate('Home');
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>登录页面</Text>
      <TextInput style={styles.input} placeholder="用户名" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="密码" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="登录" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
