import React from "react";
import styled from "styled-components";
import User from "./components/User";
import UserContext, { UserProvider } from "./contexts/User";
import Input from "./components/Input";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeComponent from "./components/ThemeComponent";
import { CartProvider } from "./contexts/CarContext";
import CartScreen from "./components/CartScreen";
import { User2Provider } from "./contexts/User2";
import HomeScreen from "./components/HomeScreen";


const Container = styled.View`
    flex: 1;
    background-color : #ffffff;
    justify-content :center;
    align-items: center;

`
const App = () => {
    return (
        <User2Provider>
            <Container>
                {/* <User /> */}
                {/* <Input /> */}
                {/* <ThemeComponent /> */}
                {/* <CartScreen /> */}
                <HomeScreen />
            </Container>
        </User2Provider>
    )
}
export default App