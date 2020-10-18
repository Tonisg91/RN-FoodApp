import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container } from '../hocs'

const RecipeScreen = ({ navigation }) => {
    return (
        <Container toggleNav={navigation.toggleDrawer}>
            <Text>Recipe Screen</Text>
        </Container>
    )
}

export default RecipeScreen

const styles = StyleSheet.create({})
