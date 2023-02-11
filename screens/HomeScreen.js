import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,

} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/index.js";
import LogoHeader from "../components/LogoHeader.js";
import NftComponents from "../components/NftComponents.js";


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <View style={styles.bgColor}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }} >

                <SafeAreaView style={[styles.container]} >

                    <LogoHeader />

                    <View style={styles.containerFullMainImage}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Trending</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.containerMainImage}>
                                <View style={styles.mainImage}>
                                    <Image
                                        style={styles.image}
                                        source={require("../assets/nft1.png")}
                                    />
                                    <View style={styles.mainImage2}></View>
                                </View>
                                <View style={[styles.mainImage3]}>
                                    <View>
                                        <View style={styles.containerTextMainImage}>
                                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                                                The Unknown
                                            </Text>
                                            <LinearGradient
                                                colors={["#320D6D", "#8A4CED"]}
                                                start={{ x: 0.5, y: 0.5 }}
                                                end={{ x: 1, y: 1 }}
                                                style={styles.bgETH}
                                            >
                                                <Text style={styles.textETH}>ETH 2.25</Text>
                                            </LinearGradient>
                                        </View>

                                        <View style={styles.containerTextMainImage}>
                                            <View>
                                                <Text style={{ fontSize: 10 }}>Creator</Text>
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        boxSixing: "border-box",
                                                        fontSize: 1,
                                                        backgroundColor: "#F1F1F1",
                                                        borderRadius: 28,
                                                        marginTop: 4,
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

                                            <View>
                                                <Text style={{ fontSize: 10 }}>Owner</Text>
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        boxSixing: "border-box",
                                                        fontSize: 1,
                                                        backgroundColor: "#F1F1F1",
                                                        borderRadius: 28,
                                                        marginTop: 4,
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                            width: 15,
                                                            height: 15,
                                                            backgroundColor: "red",
                                                            borderRadius: 100,
                                                        }}
                                                    ></View>
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
                                        <View
                                            style={[
                                                {
                                                    marginTop: 20,
                                                    marginHorizontal: 12,
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                },
                                            ]}
                                        >
                                            <TouchableOpacity style={styles.bgPlaceBid}>
                                                <View>
                                                    <LinearGradient
                                                        style={{
                                                            borderRadius: 10,
                                                            width: 84.24,
                                                            height: 24.07,
                                                            justifyContent: "center",
                                                        }}
                                                        colors={["#1DD0DF", "#14BDEB"]}
                                                        start={{ x: 0.5, y: 0.5 }}
                                                        end={{ x: 1, y: 1 }}
                                                    >
                                                        <Text
                                                            style={{
                                                                alignSelf: "center",
                                                                fontSize: 10,
                                                                fontWeight: "bold",
                                                            }}
                                                        >
                                                            Place Bid
                                                        </Text>
                                                    </LinearGradient>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <View style={styles.bgLike}>
                                                    <AntDesign name="heart" size={12.65} color="orange" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.containerMainImage}>
                                <View style={styles.mainImage}>
                                    <Image
                                        style={styles.image}
                                        source={require("../assets/nft1.png")}
                                    />
                                    <View style={styles.mainImage2}></View>
                                </View>
                                <View style={styles.mainImage3}></View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ height: 150 }}>
                        <Text style={[{ fontSize: 20, marginTop: 15, fontWeight: "bold" }]}>
                            Top Seller
                        </Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View
                                style={[
                                    {
                                        width: 135,
                                        height: 80,
                                        marginRight: 6,
                                    },
                                ]}
                            >
                                <View
                                    style={[
                                        {
                                            position: "absolute",
                                            bottom: 0,
                                            width: "100%",
                                            height: 48,
                                            borderWidth: 1,
                                            borderColor: "#C4C4C4",
                                            borderRadius: 10,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={{
                                            marginLeft: 64,
                                            fontSize: 10,
                                            marginTop: 4,
                                            marginBottom: 6,
                                        }}
                                    >
                                        iamjackrider
                                    </Text>
                                    <LinearGradient
                                        colors={["#320D6D", "#8A4CED"]}
                                        start={{ x: 0.5, y: 0.5 }}
                                        end={{ x: 1, y: 1 }}
                                        style={[
                                            styles.bgETH2,
                                            { marginLeft: 60, width: "50%", height: 16 },
                                        ]}
                                    >
                                        <Text style={styles.textETH2}>ETH 22.05225</Text>
                                    </LinearGradient>
                                </View>

                                <View
                                    style={{
                                        position: "absolute",
                                        width: 25,
                                        bottom: 25,
                                        right: 95,
                                        height: 23,
                                        borderColor: "#C4C4C4",
                                        borderLeftWidth: 1,
                                        borderBottomWidth: 1,
                                        borderBottomLeftRadius: 140,
                                        backgroundColor: "#FFF",
                                    }}
                                ></View>
                                <View
                                    style={{
                                        position: "absolute",
                                        width: 25,
                                        bottom: 25,
                                        right: 70,
                                        height: 23,
                                        borderColor: "#C4C4C4",
                                        borderRightWidth: 1,
                                        borderBottomWidth: 1,
                                        borderBottomRightRadius: 140,
                                        backgroundColor: "#FFF",
                                    }}
                                ></View>

                                <View
                                    style={{
                                        position: "absolute",
                                        left: 22,
                                        top: 13,
                                        width: 35,
                                        height: 35,
                                        borderWidth: 2,
                                        borderColor: "#DEDEDE",
                                        borderRadius: 100,
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 10,
                                    }}
                                >
                                    <Image
                                        source={require("../assets/avatar.png")}
                                        style={[
                                            { width: "100%", height: "100%", borderRadius: 100 },
                                        ]}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ width: "100%" }}>
                        <Text style={[{ fontSize: 20, fontWeight: "bold" }]}>Recent</Text>
                        <View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <NftComponents />
                                <NftComponents />
                                <NftComponents />
                                <NftComponents />

                            </View >
                        </View>


                    </View>
                    <View style={{ width: "100%", height: 80 }}>
                    </View>

                </SafeAreaView>
            </ScrollView>



            <View style={styles.footerBar}>
                <TouchableOpacity >
                <Feather name="home" size={24} color="black" />
                </TouchableOpacity>
                <Feather name="grid" size={24} color="black" />
                <Feather name="shopping-cart" size={24} color="black" />
                <Feather name="user" size={24} color="black" />
            </View>
        </View >
    );
};

export default HomeScreen;
