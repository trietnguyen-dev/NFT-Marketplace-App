import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const LogoHeader = ({ color }) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const data = [
        { key: 'Item 1' },
        { key: 'Item 3' },
        { key: 'Item 4' },
        { key: 'Item 5' },


    ];
    const renderItem = ({ item }) => (
        <View style={styles.itemNotice}>
            <View style={styles.bgIconNote}>
                <FontAwesome style={{ textAlign: "center", marginTop: 3 }} name="star" size={24} color="#FFAC33" />
            </View>
            <View>
                <Text style={{ color: "#F96900", fontSize: 15, fontWeight: "bold" }}>{item.key}</Text>
                <View style={{ width: 150 }}>
                    <Text style={{ flexWrap: 'wrap', fontSize: 9, color: "#999999" }}>
                        A highest new bid on “TheUnknown” nft art, increase your bid now
                    </Text>
                </View>
            </View>

        </View>
    );

    return (

        <View style={styles.containerLogo}>
            <Modal
                animationIn={'slideInDown'}
                transparent={true}
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
            >
                <View style={styles.bgNote}>
                    <Text
                        style={{ marginLeft: 25, marginTop: 23, fontSize: 17, fontWeight: "bold" }}> Notification
                    </Text>
                    <View style={{ marginHorizontal: 16, marginTop: 10, backgroundColor: "#EEEEEE", height: 2, width: 241 }} />
                    <View style={{ flex: 0.8 }}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                        />
                    </View>
                    <View style={{
                        flex: 0.2, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <View style={styles.clearButton}>
                            <Text>Clear All</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity >
                <View style={[styles.rowLogo]} >
                    <Image source={require("../assets/logo.png")} />
                    <Text style={[styles.sizeText, { color: color }]}>NFTMarket</Text>
                </View>
            </TouchableOpacity >

            <View>
                <TouchableOpacity onPress={toggleModal}>
                    <FontAwesome name="bell-o" size={20} color={color} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogoHeader