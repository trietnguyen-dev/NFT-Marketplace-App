import { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Dimensions, View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import CartScreen from './screens/CartScreen';
import UserScreen from './screens/UserScreen';
import styles from './styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function getWidth() {
  let width = Dimensions.get('window').width;
  width = width - 260;
  return width / 5;
}

function BottomTab() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: styles.footerBar,

        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather name="home" size={24} color={focused ? 'tomato' : 'grey'} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start()
          }
        })} />
        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather name="grid" size={24} color={focused ? 'tomato' : 'grey'} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2.7,
              useNativeDriver: true,
            }).start()
          }
        })} />
        <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather name="shopping-cart" size={24} color={focused ? 'tomato' : 'grey'} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 5.5,
              useNativeDriver: true,
            }).start()
          }
        })} />
        <Tab.Screen name="User" component={UserScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather name="user" size={24} color={focused ? 'tomato' : 'grey'} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 8.1,
              useNativeDriver: true,
            }).start()
          }
        })} />
      </Tab.Navigator>
      <Animated.View style={[styles.tabOffset, {
        transform: [
          { translateX: tabOffsetValue }
        ]
      }]}>
      </Animated.View>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


