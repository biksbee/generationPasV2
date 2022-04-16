import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, StyleSheet, Text, FastList} from 'react-native';

import {GPL} from './src/component/GenerationPasswordLabel'
import {LD} from './src/component/listData'
import {AN} from './src/component/addNote'
import {PAN} from './src/component/poleAddNote'
import {T} from './src/component/test'

const App = () => {

    const [pas, setPas] = useState([]);


    const addPas = (vGP) => {
        setPas(lastPas => [...lastPas, {
            id: Date.now().toString(),
            password: vGP,
        }])
    }


    return (
        <View style={styles.pageContainer}>
            <GPL onSubmit={addPas}/>
            <AN />
            {/*<FastList*/}
            {/*    data={pas}*/}
            {/*    renderItem={({item}) => (<LD list={item}/>)}*/}
            {/*/>*/}
            <T />
            {/*<View>*/}
            {/*    {*/}
            {/*        pas.map(pas => <LD list={pas} key={pas.id}/>)*/}
            {/*    }*/}
            {/*</View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        marginTop: 100,
        paddingTop: 10,
        borderColor: '#ff0000',
        borderTopWidth: 1,
        borderStyle: "solid",

    },
});

export default App;
