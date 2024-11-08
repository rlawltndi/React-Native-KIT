import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import User2Context from "../contexts/User2";

const HomeScreen = () => {
    const { user, logIn, logOut } = useContext(User2Context)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {user ? (
                <>
                    <Text>Welcom, {user.name} 님!</Text>
                    <Button title="LogOut" onPress={logOut} />
                </>
            ) : (
                <Button title="LogIn" onPress={logIn} />
            )}
        </View>
    )
}
export default HomeScreen