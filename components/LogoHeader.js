import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import styles from '../styles';

const LogoHeader = () => {
    return (
        <View style={styles.containerLogo}>
            <View style={styles.rowLogo}>
                <Image source={require("../assets/logo.png")} />
                <Text style={styles.sizeText}>NFTMarket</Text>
            </View>
            <View>
                <FontAwesome name="bell-o" size={20} color="black" />
            </View>
        </View>
    )
}

export default LogoHeader