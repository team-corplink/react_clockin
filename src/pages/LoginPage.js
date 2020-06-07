import React from "react";
import Input from "../components/common/Input"
import Template from "../components/common/Template";
import Slides from "../components/common/Slides";
import SlidesBox from "../components/common/SlidesBox";

const LoginPage = () => {
    return (
        <Template type="member">
             <SlidesBox>
                <Slides type="login"></Slides>
            </SlidesBox>
            <div>
                <Input placeholder = "phone"/>
                <Input type="password" placeholder="password"/>
            </div>
        </Template>
    );
};

export default LoginPage;