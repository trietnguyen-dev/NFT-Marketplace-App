import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import styles from "../styles/index.js";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from "@expo/vector-icons";

const DetailScreen = ({ route }) => {
    const { img, name, number, img2, name2, number3 } = route.params;
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View style={styles.bgColor}>
            <SafeAreaView style={styles.container}>
                {/* header */}

                <View style={styles.logoDetail}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Feather name="bell" size={24} color="black" />
                </View>
                {/* body */}
                <View style={styles.body}>
                    <View style={styles.bgimgDetail}>
                        <Image source={number3 == 3 ? require("../assets/avatar.png") : { uri: number === 1 ? img : img2 }} style={styles.imgDetail} />
                        <View style={styles.tabDetail} />
                    </View>
                    <View style={styles.tabDetail2} >
                        <TouchableOpacity style={styles.bgLike}>
                            <AntDesign name="heart" size={15} color="orange" />
                        </TouchableOpacity>
                        <TouchableOpacity><Feather name="share" size={24} color="black" /></TouchableOpacity>
                        <TouchableOpacity><Feather name="more-horizontal" size={24} color="black" /></TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                            {number === 1 ? name : name2}
                        </Text>
                        <LinearGradient
                            colors={["#320D6D", "#8A4CED"]}
                            start={{ x: 0.5, y: 0.5 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.bgETH, , { marginTop: 7, alignItems: "center", justifyContent: "center", width: 76, height: 22 }]}
                        >
                            <Text style={{ fontSize: 10, fontWeight: "bold", color: "white" }}>ETH 2.25</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.bgBothAuthor}>
                        <View style={styles.bgAuthor}>
                            <Text style={{ fontSize: 15 }}>Creator</Text>
                            <View style={styles.bgAuthor1}>
                                <View style={styles.hideBgAuthor1}>
                                    <View style={styles.imgBgAuthor1}></View>
                                </View>
                                <Text style={{ position: "absolute", right: 10, top: 7 }}>iamjackrider</Text>
                            </View>
                        </View>
                        <View style={styles.bgAuthor}>
                            <Text style={{ fontSize: 15 }}>Owner</Text>
                            <View style={styles.bgAuthor1}>
                                <View style={styles.hideBgAuthor1}>
                                    <View style={styles.imgBgAuthor1}></View>
                                </View>
                                <Text style={{ position: "absolute", right: 10, top: 7 }}>iamjackrider</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bgAllTopbidby}>
                        <Text style={{ fontSize: 15, marginRight: 20 }}>Top bid by</Text>
                        <View style={styles.bgTopbidby}>
                            <Text>@georgethelord</Text>
                        </View>
                    </View>
                </View>


                {/* footer */}
                <View style={styles.footer}>
                    <TouchableOpacity >
                        <View style={{ alignItems: "center" }}>
                            <LinearGradient
                                style={{
                                    borderRadius: 10,
                                    width: "90%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                colors={["#1DD0DF", "#14BDEB"]}
                                start={{ x: 0.5, y: 0.5 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <Text
                                    style={{
                                        alignSelf: "center",
                                        fontSize: 20,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Place Bid Now
                                </Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View >
    );
}


export default DetailScreen