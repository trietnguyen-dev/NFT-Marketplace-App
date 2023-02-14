import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import styles from "../styles/index.js";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoHeader from '../components/LogoHeader.js';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
const CartScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View style={styles.bgColor}>
            <SafeAreaView style={styles.container}>
                <LogoHeader />
                <View style={{ flex: 1, borderWidth: 0, }}>
                    <View style={{ flex: 0.07, fontSize: 18, fontWeight: "bold" }}>
                        <Text style={{ position: "absolute", bottom: 0, fontSize: 18, fontWeight: "bold" }}>Items</Text>
                    </View>
                    <ScrollView style={{ flex: 0.80, overflow: 'hidden' }} contentContainerStyle={{ flexGrow: 0 }}>
                        <View style={styles.cartItem}>
                            <View style={styles.cartItem2}>
                                <View style={{ marginLeft: 50, marginTop: 15 }}>
                                    <Text>The Unknown</Text>
                                    <View style={{ marginTop: 6, flexDirection: "row" }}>
                                        <View>
                                            <LinearGradient
                                                colors={["#320D6D", "#8A4CED"]}
                                                start={{ x: 0.5, y: 0.5 }}
                                                end={{ x: 1, y: 1 }}
                                                style={styles.bgETHCart}
                                            >
                                                <Text style={styles.textETH}>ETH 2.25</Text>
                                            </LinearGradient>
                                        </View>
                                        <View>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    boxSixing: "border-box",
                                                    fontSize: 1,
                                                    backgroundColor: "#F1F1F1",
                                                    borderRadius: 28,
                                                    marginLeft: 14
                                                }}
                                            >
                                                <View
                                                    style={{ width: 15, height: 15, borderRadius: 100 }}
                                                >
                                                    <Image
                                                        source={require("../assets/avatar.png")}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            borderRadius: 100,
                                                        }}
                                                    />
                                                </View>
                                                <Text
                                                    style={{
                                                        fontSize: 9,
                                                        paddingRight: 10,
                                                        marginLeft: 2,
                                                    }}
                                                >
                                                    iamjackrider
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={{ marginTop: 10, fontSize: 10, fontWeight: "bold", color: "#8D8D8D" }}>Top Bid is By You</Text>
                                    <Text style={{ marginTop: 15, fontSize: 10, fontWeight: "bold", color: "#8D8D8D" }}>Time Remaining</Text>
                                    <View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flexDirection: "row", backgroundColor: "#F1F1F1", width: 84.91, height: 19, marginTop: 2, borderRadius: 10 }}>
                                                <Feather style={{ marginLeft: 10, marginTop: 3 }} name="clock" size={13} color="#F96900" />
                                                <Text style={{ marginLeft: 2, marginRight: 2, marginBottom: 3, color: "#C4C4C4" }}>|</Text>
                                                <Text style={{ fontSize: 11, color: "#F96900", marginTop: 2 }}>00:02:30</Text>
                                            </View>
                                            <TouchableOpacity style={{ width: 21.23, height: 20, marginLeft: 40, backgroundColor: "#F1F1F1", borderRadius: 10 }}>
                                                <Feather style={{ textAlign: "center", marginTop: 3 }} name="trash" size={13} color="#F96900" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.cartItem1}>
                                <Image style={{ width: "100%", height: "100%", borderRadius: 10 }} source={require("../assets/NFT-2.png")} />
                            </View>
                        </View>

                    </ScrollView>
                </View>
                <View style={{ flex: 0.12 }} />
            </SafeAreaView >
        </View >
        
    )
}

export default CartScreen