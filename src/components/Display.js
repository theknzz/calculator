import React from 'react'
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 60%;
    background-color: #636B61;
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 26px -8px rgba(0,0,0,0.48);
    -moz-box-shadow: 10px 10px 26px -8px rgba(0,0,0,0.48);
    box-shadow: 10px 10px 26px -8px rgba(0,0,0,0.48);
    margin-bottom: 20px;
    @media (max-width: 768px) {
        width: 90%;
        margin-bottom: 20px;
    }
`

const Wrapper = styled.div`
    flex: 0 0 auto;
    font-size: 70px;
    padding: 20px;
    font-weight: bold;
    color: white;
`

const Display = ( { value } ) => {
    return (
        <Container>
            <Wrapper>
                {value.string ? value.string : (value.number ? value.number : 0)}
            </Wrapper>
        </Container>
    );
}

export default Display