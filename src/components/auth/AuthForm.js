import React from "react";
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import Input from "../common/Input";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";

const AuthForm = ({type, form, onChange, onSubmit,}) => {
    const buttonText = buttonTextMap[type];
    return (
        <StyledAuthForm>
            <Logo to="/"></Logo>
            <form onSubmit={onSubmit}>
                <Input
                    placeholder="phone"
                    name="phone"
                    onChange={onChange}
                    value={form.phone}
                />
                <Input
                    placeholder="password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <>
                        <Input
                            placeholder="password Check"
                            type="password"
                            name="passwordConfirm"
                            onChange={onChange}
                            value={form.passwordConfirm}
                        />
                        <Input
                            placeholder="nickName"
                            name="nickName"
                            onChange={onChange}
                            value={form.nickName}
                        />
                    </>
                )}
                <Button
                    color="blue"
                    shape="square"
                    type="submit"
                >
                    {buttonText}
                </Button>
            </form>
            <Footer>
                {type == 'login' ? (
                    <>
                        <Link to="/">Find Password</Link>
                        <Link to="/register" className="main">Join Us</Link>
                    </>
                ) : (
                    <Link to="/login" className="main">Login</Link>
                )}
            </Footer>
        </StyledAuthForm>
    );
};

const buttonTextMap = {
    login: 'Clock In',
    register: 'Sign Up',
};

export default AuthForm;

const Logo = styled(NavLink)`
    background: url("/common/logo.svg") no-repeat 50% 50%;
    background-size: contain;
    display: block;
    width: 9.2rem;
    height: 2.8rem;
    margin-bottom: 3.4rem;
`;

const StyledAuthForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 28.5rem;
    height: auto;
    
    * {
        font-family: 'Cairo';
    }
    
    input:nth-child(n+2) {
        margin-top: 2.8rem;
    }
    
    button {
        margin-top: 3.2rem;
        font-weight: 700;
    }
`;

const Footer = styled.div`
    margin-top: 1.4rem;
    text-align: right;
    
    a {
        font-size: 20px;
        color: ${palette.gray};
    }
    
    a.main {
        color: ${palette.blue};
        text-decoration: underline;
    }
    
    a:nth-child(n+2) {
        margin-left: 1.2rem;
    }
`;