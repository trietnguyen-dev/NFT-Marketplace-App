import { View, Text, Image, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';
import LogoHeader from '../components/LogoHeader';
import { LinearGradient } from 'expo-linear-gradient';
import NftComponents from '../components/NftComponents';

const UserScreen = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState(0);
    const [tabOffsetValue] = useState(new Animated.Value(90));

    function getWidth() {
        let width = Dimensions.get('window').width;
        width = width - 260;
        return width / 5;
    }

    const handlePress = (value) => {
        Animated.spring(tabOffsetValue, {
            toValue: getWidth() * value,
            useNativeDriver: true,
        }).start();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>

            <View style={styles.headerUser}>
                <Image
                    style={styles.logoHeaderUser}
                    source={require("../assets/logoUser.png")}
                />
                <View style={{ marginHorizontal: 20 }} >
                    <LogoHeader color={"white"} />
                </View>
                <View style={styles.AvatarUser}>
                    <Image source={require("../assets/logoUser.png")} style={styles.imgAvatar} />
                </View>
                <View style={styles.textUser}>
                    <View style={styles.centerUser}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>IamjackRider</Text>
                        <LinearGradient
                            style={{
                                borderRadius: 10,
                                width: 84.24,
                                height: 24.07,
                                justifyContent: "center",
                                marginTop: 2,
                            }}
                            colors={["#1DD0DF", "#14BDEB"]}
                            start={{ x: 0.5, y: 0.5 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={{ alignSelf: "center", fontSize: 10, fontWeight: "bold" }}>
                                #1 Seller
                            </Text>

                        </LinearGradient>
                        <View style={styles.bgTextUser}>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
                                <View>
                                    <Text style={styles.textRate}>120K</Text>
                                    <Text style={styles.textDes}>ArtWorks</Text>
                                </View>

                                <View>
                                    <Text style={styles.textRate}>120K</Text>
                                    <Text style={styles.textDes}>Auctions</Text>
                                </View>

                                <View>
                                    <Text style={styles.textRate}>255 ETH</Text>
                                    <Text style={styles.textDes}>Earning</Text>
                                </View>
                            </View >

                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.bodyUser}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableOpacity
                        onPress={() => { setSelectedTab(0), handlePress(3) }}
                    >
                        <Text style={[styles.textAction]}>My Work</Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                        onPress={() => { setSelectedTab(1), handlePress(8) }}
                    >
                        <Text style={[styles.textAction]}>Liked</Text>
                    </TouchableOpacity>
                </View>

                <Animated.View style={[styles.animationAction, { transform: [{ translateX: tabOffsetValue }] }]}></Animated.View>
                <ScrollView style={{ overflow: 'hidden' }} contentContainerStyle={{ flexGrow: 0 }}
                >
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 30 }}>

                        {selectedTab === 0 && (
                            <>
                                <NftComponents />
                                <NftComponents />
                                <NftComponents />
                            </>
                        )}
                        {selectedTab === 1 && (
                            <>
                                <NftComponents />

                            </>
                        )}
                    </View>
                    <View style={{ width: "100%", height: 80 }} />

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default UserScreen
