import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const NftComponents = ({ img2, name2, img3, name3, number  }) => {
    const navigation = useNavigation();
    return (

        <View style={styles.itemContainer}>
            <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', { img2: number == 2 ? img3 : img2, name2: number == 2 ? name3 : name2, number: 2, number3: 3 })}>
                    <Image
                        source={number == 3 ? require("../assets/avatar.png") : { uri: number == 2 ? img3 : img2 }}
                        style={{ borderRadius: 10, width: "100%", height: "100%" }}
                    />
                </TouchableOpacity>

            </View>
            <View
                style={{
                    position: "absolute",
                    bottom: 10,
                    backgroundColor: "#FFF",
                    height: 56,
                    marginLeft: 10,
                    width: 156,
                    borderTopEndRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 200,
                }}
            >
                <Text style={{ position: "absolute", top: 4, right: 12 }}>
                    {number == 2 ? name3 : name2}
                </Text>
                <View
                    style={{
                        position: "absolute",
                        right: 5,
                        bottom: 10,
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
                <LinearGradient
                    colors={["#320D6D", "#8A4CED"]}
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                    style={[
                        styles.bgETH3,
                        {
                            marginTop: 1,
                            marginLeft: 20,
                            width: "31%",
                            height: 16,
                        },
                    ]}
                >
                    <Text style={styles.textETH3}>ETH 2.26</Text>
                </LinearGradient>
            </View>

        </View>

    )
}

export default NftComponents