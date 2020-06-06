import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FiLogOut} from "react-icons/fi";
import GnbMenu from "./GnbMenu";
import Profile from "./Profile";

const Gnb = ({activeMenu}) => {

    const menus = [
        {
            id: 1,
            type: 'todo',
            name: '기록',
            address: '/todo',
        },
        {
            id: 2,
            type: 'stats',
            name: '통계',
            address: '/stats',
        },
    ];

    const profile = {
        id: 1,
        phone: '01038545168',
        nickName: 'Glenn Ju',
        image: '/sample/profile.svg'
    }

    return (
        <StyledGnb>
            <Logo to="/"></Logo>
            <Profile profile={profile}/>
            <GnbMenu active={activeMenu} menus={menus}/>
            <Logout>
                <FiLogOut/>
            </Logout>
        </StyledGnb>
    );
};

export default Gnb;

const StyledGnb = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 16px 14px;
`;

const Logo = styled(NavLink)`
    background: url("/common/logo.svg") no-repeat 50% 50%;
    background-size: contain;
    display: block;
    width: 70px;
    height: 25px;
`;

const Logout = styled.button`
    position: absolute;
    bottom: 4px;
    right: 6px;
    background-color: transparent;
    border: 0;
    color: #939393;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
`;