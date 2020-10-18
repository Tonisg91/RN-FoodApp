import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container } from '../hocs'
import data from '../../data.json'
import RecipeList from '../components/RecipesList/RecipeList'

const HomeScreen = ({ navigation }) => {
    return (
        <Container toggleNav={navigation.toggleDrawer}>
            <View style={bannerContainer}>
                <View style={banner}>
                    <Text>Banner</Text>
                </View>
            </View>
            <RecipeList data={[...data]}/>
        </Container>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    bannerContainer: {
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)"
    },
    banner: {
        height: 120,
        backgroundColor: "rgba(160, 60, 190, 0.5)",
        alignItems: "center",
        justifyContent: "center"
    }
})

const { bannerContainer, banner } = styles