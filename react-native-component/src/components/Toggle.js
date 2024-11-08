import React, { useState } from "react"
import MyButton from "./MyComponents"
import { View, Text } from "react-native"

const ToggleText = () => {
    const[Toggle, setToggle] = useState(false)

    return (
        <View style={{ align: 'center' }}>
            <MyButton style={{align: 'center'}} title="Toggle Text" onPress={() => setToggle(!Toggle)}></MyButton>
            {Toggle && (<Text style={{fontSize : 20, align: 'center'}}>This text can be toggled</Text>)}
        </View>
    )
}





export default ToggleText