import React, {memo} from "react";
import Input from "../components/common/Input"
import Template from "../components/common/Template";

const LoginPage = () => {
    return (
        <Template type="member">
            <div>dd</div>
            <div>
                <Input placeholder = "phone"/>
                <Input type="password" placeholder="password"/>
            </div>
        </Template>
    );
};

export default LoginPage;