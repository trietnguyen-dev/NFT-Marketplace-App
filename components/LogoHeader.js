import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';


const LogoHeader = () => {
    const navigation = useNavigation();

    return (

        <View style={styles.containerLogo}>
            <TouchableOpacity >
                <View style={[styles.rowLogo]} >
                    <Image source={require("../assets/logo.png")} />
                    <Text style={styles.sizeText}>NFTMarket</Text>
                </View>
            </TouchableOpacity >
            <View>
                <FontAwesome name="bell-o" size={20} color="black" />
            </View>
        </View>
    )
}

export default LogoHeader