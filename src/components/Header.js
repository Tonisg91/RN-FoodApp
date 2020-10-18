import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput } from 'react-native'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

const Header = ({ cb }) => {
    return (
        <View style={header}>
            <TouchableWithoutFeedback onPress={cb}>
                <MaterialCommunityIcons name="menu" size={32} color="#2c3e50" style={button}/>
            </TouchableWithoutFeedback>
            <View style={inputContainer}>
                <AntDesign name="search1" size={24} color="#2c3e50" />
                <TextInput style={input} placeholder="Busca una receta" placeholderTextColor="rgba(0,0,0, 0.35)"/>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingTop: 35,
        paddingHorizontal: 15,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(44, 62, 80, .3)",
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: "90%",
        backgroundColor: "rgba(44, 62, 80, .15)"
    },
    input: {
        width: '85%'
    },
    button: {
        marginRight: 15
    }
})

const { header, inputContainer, input, button } = styles