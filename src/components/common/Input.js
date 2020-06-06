import React from "react";
import styled, {css} from "styled-components";

const Input = ({type, size, placeholder, onChange, name, value}) => {
    return (
        <>
            <StyledInput
                type={type}
                size={size}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                value={value}
            />
        </>
    );
};

Input.defaultProps = {
    type: 'text',
    size: 'default'
}

export default Input;

const sizes = {
    default: {
        height: '4rem',
        fontSize: '1.7rem',
    },
    small: {
        height: 'auto',
        fontSize: '1rem',
    }
}

const sizeStyles = css`
    ${({size}) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px 20px;
    background-color: #242525;
    border: 0;
    border-radius: 5px;
    color: #939393;
    ${sizeStyles}
`;