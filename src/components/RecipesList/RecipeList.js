import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import RecipeCard from './RecipeCard'

const RecipeList = ({ data }) => {
    return (
        <SafeAreaView style={listContainer}>
            <FlatList 
                data={data}
                renderItem={RecipeCard}
                keyExtractor={item => item._id}
                horizontal={false}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

export default RecipeList

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: "center"
    }
})

const { listContainer } = styles