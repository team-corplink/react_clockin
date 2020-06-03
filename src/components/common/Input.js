import React from "react";
import styled, {css} from "styled-components";
import {darken, lighten} from 'polished';

const Input = (type,placeholder) => {
    return (
        <>
            <StyledInput type={type}/>
        </>
    );
};

Input.defaultProps = {
    type: 'text'
}

export default Input;

const StyledInput = styled.input`
    margin: 50px;
    width: 60%;
    padding: 10px;
    background-color: #242525;
    border: 0;
    color: #939393;
    border-radius: 5px;
`;