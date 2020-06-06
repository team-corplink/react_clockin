import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';


const Switch = ({color, size, onToggle, actived}) => {
    return (
        <StyledSwitch className={actived} color={color} size={size} onClick={onToggle} actived={actived}>
            <StyledController size={size}  actived={actived}></StyledController>
        </StyledSwitch>
    );
};

Switch.defaultProps = {
    color : 'blue',
    size : 'large',
}

export default Switch;

const colorStyles = css`
 /* 색상 */
 ${({theme, color, actived}) => {
     const selectColor = actived?theme.palette[color]:theme.palette['gray'];

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

/* 크기 */
const sizes = {
    large : {
        width : '50px',
        height : '25px',
        controllerSize : '19px',
        position: '3px',
    },
    midium : {
        width : '45px',
        height : '25px',
        controllerSize : '18px',
        position: '4px',
    }, 
    mobile : {
        width : '26px',
        height : '13px',
        controllerSize : '9px',
        position: '2px',
    },
}

const sizeStyles = css`
   ${({size, actived})=> css`
        width : ${sizes[size].width};
        height : ${sizes[size].height};
        `}
        `

const controllerSizeStyles = css`

 ${({size,actived}) => {
     console.log(actived)
     const location = actived? (sizes[size].width).replace('px','')-(sizes[size].controllerSize).replace('px','')-(sizes[size].position).replace('px','') +'px':sizes[size].position;
     console.log(location)
    
       return css`
            width: ${sizes[size].controllerSize};
            height: ${sizes[size].controllerSize};
            transform : translate(${location},-50%);
        `
    }}
`


const StyledSwitch = styled.div`
    /*공통*/
    display : inline-flex;
    outline : none;
    border : none;
    cursor: pointer;
    align-items : center;
    border-radius : 50px;
    transition : all .4s ease-in-out;
    position  : relative;
    /*색상*/
    ${colorStyles}

    /*크기*/
    ${sizeStyles}


`;

const StyledController = styled.div`
    /* 크기 */
    border-radius : 50%;
    background-color : #fff;
    position :absolute;
    top : 50%;
    ${controllerSizeStyles}


    transition : all .4s ease-in-out;
`