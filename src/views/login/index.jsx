import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 这里可以添加登录逻辑，比如验证用户名和密码
    if (username === 'user' && password === 'password') {
      Alert.alert('登录成功', '欢迎，' + username);
    } else {
      Alert.alert('登录失败', '用户名或密码错误');
    }
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
