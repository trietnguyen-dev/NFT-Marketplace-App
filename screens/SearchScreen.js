import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import styles from "../styles/index.js";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";
import LogoHeader from '../components/LogoHeader.js';
import NftComponents from '../components/NftComponents.js';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import FooterBar from '../components/FooterBar.js';

const SearchScreen = () => {

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

                <View style={{ flex: 1, }}>
                    <View style={styles.headerSearch}>
                        <View style={styles.search}>
                            <TouchableOpacity>
                                <AntDesign style={{ marginTop: 13, marginLeft: 20 }} name="search1" size={24} color="black" />
                            </TouchableOpacity>
                            <TextInput style={{ marginLeft: 10 }}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.bodySearch}>
                        <Text style={{ marginBottom: 20, fontSize: 17 }} >0 Result</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal >
                            <NftComponents />
                            <NftComponents />
                            <NftComponents />
                        </ScrollView>


                    </View>
                    <View style={[styles.footerSearch]}>
                        <Text style={{ marginTop: 5, fontSize: 17 }}>Recommended</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <NftComponents />
                            <NftComponents />
                            <NftComponents />
                        </View >

                        {/* <View style={styles.footerBarSearch} /> */}


                    </View>


                </View>

            </SafeAreaView>
        </View>
    )
}

export default SearchScreen