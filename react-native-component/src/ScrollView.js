import React from "react";
import { View,Text,ScrollView,StyleSheet } from "react-native";

export default function SV(){
    return(
    <ScrollView style={styles.contanier}>
        {Array.from({length:20},(_,i)=>(
            <View ket={i} style={styles.item}>
                <Text>Item {i+1}</Text>
            </View>
        ))}
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    contanier:{
        flex:1,
        backgroundColor: '#f5f5f5',
    },
    item:{
        padding:20,
        borderBottomWidth:1,
        borderBlockColor:'#ccc',
        alignItems:'center',
    },
})