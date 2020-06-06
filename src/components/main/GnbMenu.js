import React from "react";
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

const GnbMenu = ({active,menus}) => {

    return (
        <StyledGnbUl>
            {menus.map(menu => (
                <StyledGnbLi key={menu.id} activeType={(active == menu.type) ? 'active' : ''}>
                    <NavLink to={menu.address}>{menu.name}</NavLink>
                </StyledGnbLi>
            ))}
        </StyledGnbUl>
    );
};

export default GnbMenu;

const StyledGnbUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const StyledGnbLi = styled.li`
    position: relative;
    background-color: transparent;
    
    ${({activeType}) => {
    if(activeType=='active'){
        return css`
            background-color: #2F2F2F;
            margin: 0 -14px;
            padding: 0 14px;
            
            &:before{
                position: absolute;
                display: inline-block;
                top: 50%;
                left: 4px;
                transform: translateY(-50%);
                content: '';
                width: 2px;
                height: 70%;
                background-color: #D9D9D9;
            }
            `;
    }
}}

    >a{
        display: inline-block;
        width: 100%;
        padding: 14px 0;
        color: #D2D2D2;
        text-decoration: none;
        cursor: pointer;
    }
`;