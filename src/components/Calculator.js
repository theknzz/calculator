import React, { useState } from 'react'
import styled from "@emotion/styled";
import { connect } from 'react-redux'

import Display from "./Display";
import ButtonWrapper from "./ButtonWrapper";
import updateOperation from '../store/actions/mathAction'

const Container = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: center;
    margin-top: 70px;
`

const Wrapper = styled.div`
    display: flex;
    flex-flow = row wrap;
    justify-content: center;
    width: 100%;
`
const Calculator = ( { update, result } ) => {

    const handleClick = ( btnName ) => {
        update(btnName)
    }

    return (
        <Container>
            <Wrapper>
                <Display value={result}/>
            </Wrapper>
            <Wrapper>
                <ButtonWrapper state={result} handleClick={handleClick}/>
            </Wrapper>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (btnName) => dispatch(updateOperation(btnName))
    }
}

const mapStateToProps = (state) => {
    return {
        result: state,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)