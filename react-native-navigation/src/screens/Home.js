import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    background-color: #ffffff;
    align-items: center;
`
const StyledText = styled.Text`
    font-size: 30px;
    margin-buttom: 10px;
`
const Home = ({ navigation }) => {
    return (
        <Container>
            <StyledText>Home</StyledText>
            <Button
                title="go to the list screen"
                onPress={() => navigation.navigate('List')}
            />
        </Container>
    )
}
export default Home