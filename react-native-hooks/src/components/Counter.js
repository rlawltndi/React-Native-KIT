import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyleText = styled.Text`
    font-size: 24px;
    margin: 10px;
`
const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <StyleText>
                Count:{count}
            </StyleText>
            <Button title="+" 
                    onPress={() => {
                        setCount(prevCount => prevCount + 1)
                        setCount(prevCount => prevCount + 1)
                        console.log(`count: ${count}`)
            }} />
            <Button title="-" onPress={() => { setCount(count - 1) }} />
        </>
    )
}
export default Counter