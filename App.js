import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const globalScreenOption = {
  headerStyle: { backgroundColor: '#2C6BED'},
  headerTitleStyle: { color: "white"},
  headerTintColor: "white"
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={
          globalScreenOption
        }>
        <Stack.Screen 
          /*options={{
            title: 'Lets Sign Up'
          }}*/
          name='Login' 
          component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
