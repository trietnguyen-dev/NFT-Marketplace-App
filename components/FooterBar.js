import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

const FooterBar = () => {
    const navigation = useNavigation();

    return (
        <>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Feather name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')} >
                <Feather name="grid" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} >
                <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('User')} >
                <Feather name="user" size={24} color="black" />
            </TouchableOpacity> */}
        </>
    )
}

export default FooterBar