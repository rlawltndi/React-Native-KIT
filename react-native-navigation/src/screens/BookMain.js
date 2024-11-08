import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`
const StyledText = styled.Text`
    font-size: 30px;
    margin-buttom: 10px;
`

const BookMain = ({navigation}) =>{
    return(
        <Container>
            <StyledText>도서 목록 앱</StyledText>
            <Button
                title="도서 목록 보기"
                onPress={()=>navigation.navigate('BookList')}
            />
        </Container>
    )
}
export default BookMain