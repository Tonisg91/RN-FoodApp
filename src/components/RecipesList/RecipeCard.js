import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const RecipeCard = ({item: {picture, recipeName}}) => {
    const uri = {uri: picture}
    return (
        <View style={cardContainer}>
            <Image source={uri} style={image}/>
            <Text>{recipeName}</Text>
        </View>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    cardContainer: {
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: '100%',
        height: 100
    }
})

const { image, cardContainer } = styles
