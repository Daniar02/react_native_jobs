import {useState} from "react";
import {Text, SafeAreaView, ScrollView, View} from "react-native";
import {COLORS, icons, images, SIZES} from "../constants";
import {NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome} from '../components'
import {Stack, useRouter} from "expo-router";
const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
                    ),
                    headerTitle: ''
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome/>
                    <PopularJobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;