import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import User from '../views/user';
import UserDetail from '../views/user/detail';

export default function UserScreen() {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen name="User" component={User} options={{}} />
      {/* <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: 'UserDetail1' }} /> */}
    </Stack.Navigator>
  );
}
