import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';


const Button = ({children, color, shape, ...rest}) => {
    return (
        <StyledButton color={color} shape={shape}>{children}</StyledButton>
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
            background : ${selectColor};
            &:hover{
                background : ${ lighten(0.05, selectColor )};
            }
            &:active {
                background: ${ darken(0.05, selectColor )};
            }
        `
    }}
`

/*모양*/
const shapes = {
    circle : {
        borderRadius : '50px',
        padding : '0 20px',
        height : '30px',
        fontSize : '13px',
        width :'auto',
        fontWeight :'normal'
    },
    square : {
        borderRadius : '10px',
        padding : '0px',
        height : '60px',
        fontSize : '28px',
        width :'100%',
        fontWeight :'bold',
    }
}

const shapeStyles = css`
     /*크기*/
   ${({shape})=> css`
        border-radius : ${shapes[shape].borderRadius};
        padding : ${shapes[shape].padding};
        height : ${shapes[shape].height};
        font-size : ${shapes[shape].fontSize};
        width : ${shapes[shape].width};
        font-weight : ${shapes[shape].fontWeight};
   `}
 
`

const StyledButton = styled.button`
    /*공통*/
    display : inline-flex;
    outline : none;
    border : none;
    color : #fff;
    cursor: pointer;
    justify-content :center;
    align-items : center;

    /*색상*/
    ${colorStyles}

    /*모양*/
    ${shapeStyles}

    /*기타*/
    & + & {
        margin-left : 1rem
    }

`;
