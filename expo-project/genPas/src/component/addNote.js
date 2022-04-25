import React, {useState, useWindowDimensions} from 'react'
import {View, Text, StyleSheet, Pressable, SafeAreaView, FlatList} from 'react-native'

import {PAN} from './poleAddNote'
import {LD2} from './listData2.0'
import {EditNote} from './EditNote'
import {MyIcon} from "./nameList";
import position from "react-native-web/dist/exports/Touchable/Position";
import {Icon} from "@rneui/themed";


const title1 = 'add element'
const title2 = 'hide element'

export const AN = ({list}) => {
    const [editCheck, setEditCheck] = useState(false)
    const [shouldShow, setShouldShow] = useState(false)
    const [value, setValue] = useState([])

    const fadeInElement = () => {
        setShouldShow(!shouldShow)
    }
    const takeValue = (note) => {
        setValue(lastNote => [{
            id: Date.now().toString(),
            name: note.name,
            password: note.password
        }, ...lastNote])
    }
    const deleteItem = (key) => {
        const itemDel = [...value]
        setValue(itemDel.filter(item => item.id !== key))
    }
    // const updateValue = (value) => {
    //     setValue(lastNote => [{
    //         id: Date.now().toString(),
    //         name: value.name,
    //         password: value.password
    //     }, ...lastNote])
    // }


    const sendEditData = (editData) => {
        setEditCheck(!editCheck)
    }

    return (
        <SafeAreaView style={styles.allPole}>
            <View style={styles.container}>
                {
                    !editCheck ? (
                        <Pressable style={styles.btn} onPress={fadeInElement}>
                            <Text style={styles.text}>
                                {
                                    shouldShow ? title2 : title1
                                }
                            </Text>
                        </Pressable>
                    ) : (
                        null
                    )
                }
                {
                    !editCheck ? (shouldShow ? (<PAN style={styles.pole} list={list} onSubmit={takeValue}/>) : null) : (<EditNote />)
                }
            </View>
            <View>
                <FlatList
                    style={[styles.listNotes,
                        !editCheck ? (shouldShow ? styles.listNotesHeight1 : styles.listNotesHeight2) : (styles.listNotesHeight2)]}
                    data={value}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        // <Text style={styles.i}>{item.name}</Text>
                        <LD2 list={item} onSubmit={deleteItem} sendEditData={sendEditData} />
                    )}
                />
                {/*{value.map(value => <LD2 list={item} key={value.id}/>)}*/}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    allPole: {
        justifyContent: "space-between",
        height: '90%',
    },
    listNotes: {
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
    listNotesHeight1: {
        height: '75%',
    },
    listNotesHeight2: {
        height: '90%',
    },
    container: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: '#3eff00',
        marginBottom: 15,
    },
    text: {
        color: '#3eff00',
        fontWeight: 'bold',

    },
    pole: {

    },
    listLine: {
        flexDirection: "row",
    },
});
