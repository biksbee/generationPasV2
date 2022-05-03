import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable, SafeAreaView, FlatList} from 'react-native'

import {PAN} from './poleAddNote'
import {LD2} from './listData2.0'
import {EditNote} from './EditNote'

const title1 = 'add element'
const title2 = 'hide element'

export const AN = ({list}) => {
    const [editCheck, setEditCheck] = useState(false)
    const [shouldShow, setShouldShow] = useState(false)
    const [value, setValue] = useState([])
    const [key, setKey] = useState('')

    const fadeInElement = () => {
        alert(list.name)
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
        // setValue(itemDel.splice(key, 1))
        setValue(itemDel.filter(item => item.id !== key))
    }

    const updateValue = (updateValue) => {
        deleteItem(key)
        takeValue(updateValue)

        setEditCheck(!editCheck)
        setShouldShow(!shouldShow)
    }

    const sendEditData = (note) => {
        setKey(note)
        setEditCheck(true)
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
                    !editCheck ? (shouldShow ? (<PAN style={styles.pole} list={list} onSubmit={takeValue}/>) : null) : (<EditNote note={value.id} onSubmit={updateValue}/>)
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
                        <LD2 list={item} onSubmit={deleteItem} send={sendEditData} />
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
