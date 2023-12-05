import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RateScreen from './screens/RateScreen';
import NotifyScreen from './screens/NotifyScreen';
import ProfileScreen from './screens/ProfileScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rate" component={RateScreen} />
      <Tab.Screen name="Notify" component={NotifyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      
    </Tab.Navigator>
  );
}

const SignedInStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
                screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedInStack