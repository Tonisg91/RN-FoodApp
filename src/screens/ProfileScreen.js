import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container } from '../hocs'

const ProfileScreen = ({ navigation }) => {
    return (
        <Container toggleNav={navigation.toggleDrawer}>
            <Text>Profile Screen</Text>
        </Container>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
