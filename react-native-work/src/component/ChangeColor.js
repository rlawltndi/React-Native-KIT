//화면에 버튼이 하나 있는데
//버튼을 누르면 화면에 백그라운드 색을 랜덤으로 바꾸기
//6자리랜덤 값 뽑는 법
//Math.floor(Math.random()*16777215.toString(16))
//styled컴포넌트 사용하기
//AppContainer , ChangeColorButton , ButtonText
import React, { useState } from "react";
import styled from "styled-components";

const AppContainer = styled.View`
    flex:1
    align-items: center
    justify-content: center
    background-color: ${(props)=> props.bgColor}
`
const ChangeColorButton = styled.Pressable`
   padding :20px
   background-color: #7886db
   border-radius : 10px
`
const ButtonText = styled.Text`
    color:white
    font-size:15px
`

const ChangeColor=()=>{
    const[bgColor,setBgColor]=useState('#ffffff')
    
    const changeColor=()=>{
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    setBgColor(randomColor)
}
    return(
        <AppContainer bgColor={bgColor}>
            <ChangeColorButton  onPress={changeColor}>
                <ButtonText>
                    Change BackgroundColor
                </ButtonText>
            </ChangeColorButton>
        </AppContainer>
      
    )
}
export default ChangeColor