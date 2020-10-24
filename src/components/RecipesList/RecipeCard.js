import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const RecipeCard = ({item: {picture, recipeName}}) => {
    const uri = {uri: picture}

    return (
        <View style={item}>
            <Image source={uri} style={image}/>
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>{recipeName}</Text>
                </View>
                <View style={favContainer}>
                    <AntDesign name="hearto" size={24}/>
                </View>
            </View>
        </View>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    item: {
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    container: {
        width: '100%',
        paddingVertical: 15,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    title: {
        
    },
    titleContainer: {

    },
    favContainer: {

    }
})

const { image, item, container, title, titleContainer, favContainer } = styles
