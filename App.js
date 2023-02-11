import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CartScreen}
        />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
