import React from "react";
import Input from "../components/common/Input"

const LoginPage = () => {
    return (
        <>
            <Input placeholder = "phone"/>
            <Input type="password" placeholder="password"/>
        </>
    );
};

export default LoginPage;