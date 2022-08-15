import React from 'react'
import {View, Text, StyleSheet} from 'react-native'



export const Logo = () => {

   return(
       <View style={styles.block}>
           <Text>
               YG_Labs
           </Text>
       </View>
   )

}

const styles = StyleSheet.create({
    block: {
        color: '#3eff00'
    }


});