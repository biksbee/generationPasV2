import React, {useState} from 'react'
import {Text, View, StyleSheet} from "react-native";


export const LD = ({list}) => {


    return (

        <View style={styles.Container}>
            {/*<Text style={styles.name}>*/}
            {/*    {list.id}*/}
            {/*    /!*{list.name}*!/*/}
            {/*</Text>*/}
            <Text style={styles.password}>
                {list.password}
            </Text>
        </View>

        )
        //вывод данных

};

const styles = StyleSheet.create({
    Container: {
        margin: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: "#3eff00",
        borderRadius: 5,
        marginBottom: 10
    },
    name: {
        fontSize: 12
    },
    password: {

    }
});






