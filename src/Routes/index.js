import React from 'react';
import { View, Text, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import menu from '../../assets/menu.png'
import logo from '../../assets/images/logo-2.png'

import Home from '../pages/Home'
import CategoryCourses from '../pages/CategoryCourses'
import PageContent from '../pages/PageContent'

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            headerLeft: () => (
              <Image source={logo} style={{ width: 150, height: 38 }} />),
            headerRight: () => (
              <Image source={menu} style={{ width: 38, height: 38 }} />),
            headerTitleStyle: { color: 'transparent' },
          }} />

          <Stack.Screen name="CategoryCourses" component={CategoryCourses} options={{
            headerLeft: () => (
              <Image source={logo} style={{ width: 150, height: 38 }} />),
            headerRight: () => (
              <Image source={menu} style={{ width: 38, height: 38 }} />),
            headerBackVisible: true,
            headerTitleStyle: { color: 'transparent' }
          }} />

          <Stack.Screen name="PageContent" component={PageContent} options={{
            headerLeft: () => (
              <Image source={logo} style={{ width: 150, height: 38 }} />),
            headerRight: () => (
              <Image source={menu} style={{ width: 38, height: 38 }} />),
            headerBackVisible: true,
            headerTitleStyle: { color: 'transparent' }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}