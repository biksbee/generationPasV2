import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable, SafeAreaView, FlatList, Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {PAN} from './poleAddNote'
import {LD2} from './listData2.0'
import {EditNote} from './EditNote'

const title1 = 'add element'
const title2 = 'hide element'
const show_note = 'show note'

export const AN = ({list}) => {
    const [genPas, setGenPas] = useState('')
    const [editCheck, setEditCheck] = useState(false)
    const [shouldShow, setShouldShow] = useState(false)
    const [value, setValue] = useState([])
    const [key, setKey] = useState('')
    const [show, setShow] = useState(false)

    const fadeInElement = () => {
        setGenPas(list)
        setShouldShow(!shouldShow)
    }
  //переделать takeValue разбить его на разные функции

  //сделать открытие списка без новой записи
  //переделать удаление
  //в изменение добавить цвета в инпутах
  //отредактировать цвет инпута при генерации пароля
  //при изменении записи выносить запись которую редактирую в верх либо выделить ее в списке другими цветами

    const takeValue = async (note) => {
        const data = await AsyncStorage.getItem('@store_Key')
        let res = []
        let prom_val = []
        let data_Array = data.split(" ")
        for(let i = 0; i < data_Array.length; i++){
            prom_val[i] = new Array();
            res[i] = new Array();
            prom_val = data_Array[i].split("&")
            for(let j = 0; j < prom_val.length; j++){
                res[i][j] = prom_val[j]
            }
        }


        setValue('')
        for(let i of res){
            setValue(note => [{
              id: i[0],
              name: i[1],
              password: i[2]
            }, ...note])
        }

        if (note.password){
            setValue(lastNote => [{
                id: Date.now().toString(),
                name: note.name,
                password: note.password
            }, ...lastNote])
        } else {
            setValue(lastNote => [{
                id: Date.now().toString(),
                name: note.name,
                password: note.genPas
            }, ...lastNote])
        }
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

    const close = (ck) => {
        setEditCheck(ck)
    }

    const showNote = async () => {
        if(value === null) {
            await takeValue()
            setShow(!show)
            console.log("1")
        } else {
            setShow(!show)
            console.log("2")
        }
        console.log("=====================")
        //  AsyncStorage.clear()
        // alert("clear complete")
    }

    return (
        <SafeAreaView style={styles.allPole}>
            <View style={styles.container}>
                {
                    !editCheck ? (
                        <View style={styles.containerBtn}>
                            <Pressable style={[styles.btn, !shouldShow ? styles.btnOff : styles.btnOn]} onPress={fadeInElement}>
                                <Text style={[styles.text, !shouldShow ? styles.textOff : styles.textOn]}>
                                    {
                                        shouldShow ? title2 : title1
                                    }
                                </Text>
                            </Pressable>
                            <Pressable style={[styles.btn, !show ? styles.btnOff : styles.btnOn]}>
                                <Text style={[styles.text, !show ? styles.textOff : styles.textOn]} onPress={showNote}>{show_note}</Text>
                            </Pressable>
                        </View>
                    ) : (
                        null
                    )
                }
                {
                    !editCheck ? (shouldShow ? (<PAN style={styles.pole} list={genPas} onSubmit={takeValue} />) : null) : (<EditNote note={value.id} onSubmit={updateValue} sendClose={close}/>)
                }
            </View>
            { show ? (<View>
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
            </View>) : null}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    allPole: {

        justifyContent: "space-between",
        height: '90%',
    },
    showNote: {
      color: '#fff',
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: '#3eff00',
      textAlign: 'center',
      marginHorizontal: 80,
    },
    listNotes: {
        padding: 10,
        marginBottom: 30,
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
    containerBtn: {
      flexDirection: "row",
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: '#3eff00',
        marginBottom: 15,
        marginHorizontal: 5,
    },
    btnOn: {
        backgroundColor: '#fff',
        borderColor: '#fff',
    },
    btnOff: {

    },
    text: {
        color: '#3eff00',
        fontWeight: 'bold',
        marginVertical: 3,
    },
    textOn: {
      color: '#000'
    },
    textOff: {

    },
    pole: {

    },
    listLine: {
        flexDirection: "row",
    },
});
