import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookDetail from "../screens/BookDetail";
import BookList from "../screens/BookList";
import BookMain from "../screens/BookMain";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from "react-native";


//1. 스텍을 만든다.
const BookStack = createStackNavigator()

const BookStackNavigation = () =>{
    return(
        //2. 화면을 담기위한 Navigator를 만든다.
        //3. 화면을 담는다.
        <BookStack.Navigator
        initialRouteName="BookMain"
        screenOptions={{
            cardStyle: { backgroundColor: '#ffffff' },
            headerStyle: {
                height: 110,
                backgroundColor: '#95a5a6',
                borderBottomWidth: 5,
                borderBottomColor: '#34495e',
            },
            headerTitleStyle: { color: '#ffffff', fontSize: 24 },
            headerTitleAlign: 'center',
            headerTitle: ({ style }) => (
                <MaterialCommunityIcons name="react" style={style} />
            )
        }}>
            <BookStack.Screen name="BookMain" component={BookMain} options={{headerShown: false}}/>
            <BookStack.Screen name="BookList" component={BookList} options={{
                headerTitle: 'BookList Screen',
                headerBackTitleVisible: true,
                headerBackTitle: 'Prev',
                headerTitleStyle: { fontSize: 24 },
                headerTintColor: '#e74c3c',
                headerBackImage: ({ tintColor }) => {
                    const style = {
                        marginRight: 5,
                        marginLeft: Platform.OS === 'ios' ? 11 : 0,
                    }
                    return (
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={30}
                            color={tintColor}
                            style={style}
                        />
                    )
                }
            }} />
            <BookStack.Screen name="BookDetail" component={BookDetail} />
        </BookStack.Navigator>
    )
}
export default BookStackNavigation