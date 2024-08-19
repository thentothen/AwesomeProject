/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TabBarIcon } from '../components/navigation/TabBarIcon';
import HomeStack from './homeStack';
import UserStack from './userStack';
import UserDetail from '../views/user/detail';
import Login from '../views/login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />,
        }}
      />
      <Tab.Screen
        name="UserStack"
        component={UserStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default function MyTabs() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitle: null, headerTruncatedBackTitle: '' }}>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}></Stack.Screen>
      {/*  下为不带tab的路由 */}
      <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: 'UserDetail1' }} />
      <Stack.Screen name="UserDetail2" component={UserDetail} options={{ title: 'UserDetail2' }} />
      <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
    </Stack.Navigator>
  );
}
