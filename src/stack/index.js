import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import UserStack from './userStack';
import {createStackNavigator} from '@react-navigation/stack';
// import {TabBarIcon} from '../components/navigation/TabBarIcon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  function Tabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="homeStack"
          component={HomeStack}
          options={{headerShown: false}}
          tabBarIcon={({color, focused}) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          )}
        />
        <Tab.Screen
          name="User"
          component={UserStack}
          tabBarIcon={({color, focused}) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
            />
          )}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}></Stack.Screen>
      {/*  下为不带tab的路由 */}
      {/* <Stack.Screen
        name="scoreShow"
        component={scoreShow}
        options={{
          headerShown: true,
          title: '',
          headerBackTitleVisible: false,
          headerBackTitle: '',
          headerTintColor: '#000',
          headerStyle: {backgroundColor: 'tomato'},
        }}
      /> */}
    </Stack.Navigator>
  );
}
