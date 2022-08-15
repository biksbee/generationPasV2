import React, {useState} from 'react'
import {Text, View, StyleSheet, Pressable, Clipboard} from "react-native";
import { Icon } from '@rneui/themed';
import {AdditionallyProperty} from "./additionallyProperty";
// import AsyncStorage from '@react-native-async-storage/async-storage';


export const LD2 = ({list, onSubmit, send}) => {

    const [shouldShow, setShouldShow] = useState(false)

    const onRemove = () => {
        onSubmit(list.id)
    }
    const additionally = () => {
        setShouldShow(!shouldShow)
        //?
    }
    const takeValue = (num) => {
        if(num === 1){
            setShouldShow(!shouldShow)
        } else if(num === 2) {
            const sendEditData = list.id
            // const sendEditData = list.name
            send(sendEditData)
        } else if(num === 3){
            const copy = Clipboard.setString(list.password);
        } else if(num === 4){

        }
    }

    return (
        <View style={styles.Container}>
            <View style={styles.pole}>
                {/*<Text style={styles.name}>{list.id}</Text>*/}
                <View style={styles.head}>
                    <Text style={styles.name}>
                        @{list.name}
                    </Text>
                    <Pressable style={styles.navIcon} onPress={additionally}>
                        {
                            !shouldShow ? (<Icon name='navicon' type='evilicon' color='#3eff00'/>) : null
                        }
                    </Pressable>
                    {
                        shouldShow ? (<AdditionallyProperty onSubmit={takeValue}/>) : null
                    }
                </View>
                <Text style={styles.password}>
                    #{list.password}
                </Text>
            </View>
            <Pressable style={styles.icon} onPress={onRemove}>
                <Icon
                    name='trash'
                    type='evilicon'
                    color='#3eff00'
                    size={30}
                />
            </Pressable>
        </View>
    )
    //вывод данных

};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        marginBottom: 30
    },
    pole: {
        borderWidth: 1,
        borderColor: "#3eff00",
        borderRadius: 5,
        width: '90%',
        padding: 5,
    },
    head: {
        flexDirection: 'row',
        justifyContent: "space-between",

    },
    name: {
        marginLeft: 15,
        fontSize: 16,
        color: "#3eff00"
    },
    password: {
        padding: 7,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: '#3eff00',
        color: "#fff"
    },
    navIcon: {

    },
    icon: {

        justifyContent: "center",
    },
});






