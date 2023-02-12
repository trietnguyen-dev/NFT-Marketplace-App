import { View, Dimensions, Animated } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef } from 'react'
import { Feather } from "@expo/vector-icons";

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import UserScreen from '../screens/UserScreen';
import styles from '../styles';

const Tab = createBottomTabNavigator();

function getWidth() {
  let width = Dimensions.get('window').width;
  width = width - 260;
  return width / 5;
}
const BottomTab = () => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current
    return (
        <>
            <Tab.Navigator
                screenOptions={() => ({
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

export default BottomTab