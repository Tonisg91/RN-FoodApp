import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Container } from '../hocs'
import data from '../../data.json'
import RecipeList from '../components/RecipesList/RecipeList'
import { AdMobBanner } from 'expo-ads-admob'
import Constants from 'expo-constants'

const testId = 'google-test-id'
const productionId = 'my-id'

const HomeScreen = ({ navigation }) => {
    // test banner id: ca-app-pub-3940256099942544/6300978111

    // Android Banner: ca-app-pub-9446440272850773/9863686652
    // Android interstitial


    const header = (
        <Container toggleNav={navigation.toggleDrawer}>
            <View style={bannerContainer}>
                <AdMobBanner 
                    bannerSize="banner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    servePersonalizedAds
                />
            </View>
        </Container>
    )
    return (
        <RecipeList data={[...data]} header={header}/>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    bannerContainer: {
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        justifyContent: "center",
        alignItems: "center"
    },
    banner: {
        height: 120,
    }
})

const { bannerContainer, banner } = styles