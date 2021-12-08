import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import AppDetailScreen from './src/screens/AppDetailScreen';
import AppsScreen from './src/screens/AppsScreen';
import ArcadeScreen from './src/screens/ArcadeScreen';
import DescriptionScreen from './src/screens/DescriptionScreen';
import GamesScreen from './src/screens/GamesScreen';
import SearchScreen from './src/screens/SearchScreen';
import TodayScreen from './src/screens/TodayScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Today"
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTiteStyle: { color: '#ffffff' },
          headerTitle: 'Ex Store',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="AppDetail" component={AppDetailScreen} />
        <Stack.Screen name="Apps" component={AppsScreen} />
        <Stack.Screen name="Arcade" component={ArcadeScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="Games" component={GamesScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Today" component={TodayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
