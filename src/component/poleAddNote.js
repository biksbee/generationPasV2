import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PAN = ({onSubmit, list}) => {
    const title = 'create'
    const sim = "&"

    const [genPas, setGenPas] = useState(list.toString())
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const f_data = async () => {
        let prevData = await AsyncStorage.getItem('@store_Key')

        const n_id = Date.now().toString()
        const n_name = name
        const n_pas = password
        let n_res
        if(prevData === null)
            n_res = " " + n_id + sim + n_name + sim + n_pas
        else
            n_res = prevData + " " + n_id + sim + n_name + sim + n_pas
        await AsyncStorage.setItem('@store_Key', n_res)
      console.log(n_res)
    }

    const checkTextInput = () => {
        if(!name.trim() || !password.trim() && genPas === '') {
            alert('input fields must not be empty')
            return;
        }
        else {
            pressHandler()
            f_data()
        }
    }

    const pressHandler = () => {
        if(password === '') {
            onSubmit({name, genPas})
        } else
            onSubmit({name, password})
        setName('')
        setPassword('')
        setGenPas('пароль')
    }

    return (
        <View>
            <View style={styles.newNote}>
                <Pressable style={styles.note_btn} onPress={checkTextInput}>
                    <Text style={styles.note_btn_text}>
                        {title}
                    </Text>
                </Pressable>
                <View>
                    <TextInput style={styles.inp}
                        placeholder={"название"}
                        placeholderTextColor="#9B9999FF"
                        onChangeText={name => setName(name)}
                        value={name}
                    />
                    <TextInput style={styles.inp}
                        placeholder={(genPas === '') ? "пароль" : genPas}
                        placeholderTextColor="#9B9999FF"
                        onChangeText={password => setPassword(password)}
                        value={password}
                    />
                </View>
            </View>
        </View>
    )
}
//
const styles = StyleSheet.create({
    newNote: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "flex-start",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor: '#3eff00',
        paddingBottom: 20,
        marginBottom: 20
    },
    note_btn: {
        width: '20%',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3eff00',
    },
    note_btn_text: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        color: '#3eff00',
    },
    inp: {
        width: 250,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderRadius: 15,
        marginVertical: 2.5,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#3eff00',
        color: "#fff"
    }
});
