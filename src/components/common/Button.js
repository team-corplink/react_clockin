import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';


const Button = ({children, color, shape, ...rest}) => {
    return (
        <StyledButton color={color} shape={shape} {...rest}>{children}</StyledButton>
    );
};

Button.defaultProps = {
    color : 'gray',
    style : 'circle',
}
export default Button;

const colorStyles = css`
 /*색상*/
 ${({theme, color}) => {
        const selectColor = theme.palette[color];
        return css`
            background : ${color};
            &:hover{
                background : ${ lighten(0.1, selectColor )};
            }
            &:active {
                background: ${ darken(0.1, selectColor )};
            }
        `
    }}
`

const shapes = {
    circle : {
        borderRadius : '50px',
        padding : '0 20px',
        height : '30px',
        fontSize : '28px'
    },
    square : {
        borderRadius : '10px',
        padding : '0px',
        height : '60px',
        fontSize : '13px'
    }
}

const shapeStyles = css`
     /*크기*/
   ${({shape})=> css`
        border-radius : ${shapes[shape].borderRadius};
        padding : ${shapes[shape].padding};
        height : ${shapes[shape].height};
        font-size : ${shapes[shape].fontSize};
   `}
 
`

const StyledButton = styled.button`
    /*공통*/
    display : inline-flex;
    outline : none;
    border : none;
    color : #fff;
    font-weight : bold;
    cursor: pointer;
    ${props=>{
        if(props.align){
            return css `justify-content: ${props.align};`;
        }
}}

    /*색상*/
    ${colorStyles}

    /*모양*/
    ${shapeStyles}

    /*기타*/
    & + & {
        margin-left : 1rem
    }

`;
