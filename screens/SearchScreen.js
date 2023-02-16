import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from "../styles/index.js";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoHeader from '../components/LogoHeader.js';
import NftComponents from '../components/NftComponents.js';
import { AntDesign } from '@expo/vector-icons';
import getAssets from '../apis/api.js';

const SearchScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    const [loaded, setLoaded] = useState(false);
    const [res, setRes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!loaded) {
            const fetchData = async () => {
                for (let i = 0; i < 4; i++) {
                    const data = await getAssets(i);
                    if (data) {
                        setRes(prevRes => [...prevRes, data]);
                        console.log("Success");
                    }
                }
                setIsLoading(false);
            }
            fetchData();
            setLoaded(true);

            return () => {
            }
        }
    }, [loaded]);

    return (

        <View style={styles.bgColor}>
            {isLoading && <Text>Loading...</Text>}
            <SafeAreaView style={styles.container}>

                <LogoHeader />

                <View style={{ flex: 1 }}>
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
                            {!isLoading && res.map((asset, index) => (
                                <NftComponents key={index} img3={asset.image3} name3={asset.name3} number={2} />

                            ))}

                        </ScrollView>

                    </View>
                    <View style={[styles.footerSearch]}>
                        <Text style={{ marginTop: 5, fontSize: 17 }}>Recommended</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {!isLoading && res.map((asset, index) => (
                                <NftComponents key={index} img3={asset.image3} name3={asset.name3} number={2} />

                            ))}
                        </View >
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default SearchScreen