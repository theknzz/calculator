import React from 'react'
import styled from '@emotion/styled'
import Button from './Button'

const Container = styled.div`
    display: flex;
    width: 60%;
    flex: 0 1 auto;
    flex-flow: column wrap;
`

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
`

const ButtonWrapper = ({ handleClick, state }) => {
    const disable = state.number === '';
    const equalDisable = state.number === '' || state.result === '';
    return (
        <Container>
            <Row>
                <Button onClick={handleClick} value={'AC'} />
                <Button onClick={handleClick} value={'+/-'}/>
                <Button onClick={handleClick} value={'%'} isDisabled={disable}/>
                <Button onClick={handleClick} value={'/'} isSpecial={true} isDisabled={disable}/>
            </Row>
            <Row>
                <Button onClick={handleClick} value={'7'}/>
                <Button onClick={handleClick} value={'8'}/>
                <Button onClick={handleClick} value={'9'}/>
                <Button onClick={handleClick} value={'*'} isSpecial={true} isDisabled={disable}/>
            </Row>
            <Row>
                <Button onClick={handleClick} value={'4'}/>
                <Button onClick={handleClick} value={'5'}/>
                <Button onClick={handleClick} value={'6'}/>
                <Button onClick={handleClick} value={'-'} isSpecial={true} isDisabled={disable}/>
            </Row>
            <Row>
                <Button onClick={handleClick} value={'1'}/>
                <Button onClick={handleClick} value={'2'}/>
                <Button onClick={handleClick} value={'3'}/>
                <Button onClick={handleClick} value={'+'} isSpecial={true} isDisabled={disable}/>
            </Row>
            <Row>
                <Button onClick={handleClick} value={'0'} isLarge={true}/>
                <Button onClick={handleClick} value={'.'}/>
                <Button onClick={handleClick} value={'='} isSpecial={true} isDisabled={equalDisable}/>
            </Row>
        </Container>
    );
}

export default ButtonWrapper;