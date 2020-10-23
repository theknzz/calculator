import React from 'react'
import styled from '@emotion/styled'

const Container = styled.button`
    font-size: 50px;
    padding: 30px;
    flex: 1 1 ${props => props.isLarge ? '50%' : '25%'};
    border-radius: 10px;
    border: none;
    margin: 3px;
    -webkit-box-shadow: 10px 10px 26px -8px rgba(0,0,0,0.48);
    -moz-box-shadow: 10px 10px 26px -8px rgba(0,0,0,0.48);
    box-shadow: 10px 10px 26px -8px rgba(0,0,0,0.48);
    color: white;
    ${props => props.isSpecial ? 'background-color: #AFA2FF' : 'background-color: #E3D7FF'};
    : focus {
        outline: none;
    }
    ${props => props.isDisabled ? 'opacity: 0.25;pointerEvents: disabled;' : 'opacity: 1; pointerEvents: initial;'}
`

const Button = ({ value, isLarge, onClick, isSpecial, isDisabled } ) => {

    const handleClick = (e) => {
        onClick(value);

    }

    return (
        <Container isDisabled={isDisabled} isSpecial={isSpecial} isLarge={isLarge} onClick={handleClick} value={value}>
            {value}
        </Container>
    );
}

export default Button