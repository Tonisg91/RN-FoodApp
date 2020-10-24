import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import RecipeCard from './RecipeCard'

const RecipeList = ({ data, header }) => {
    return (
            <FlatList 
                data={data}
                renderItem={RecipeCard}
                keyExtractor={item => item._id}
                horizontal={false}
                numColumns={2}
                style={list}
                ListHeaderComponent={header}
            />
    )
}

export default RecipeList

const styles = StyleSheet.create({})

const { listContainer, list } = styles