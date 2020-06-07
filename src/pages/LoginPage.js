import React from "react";
import Template from "../components/common/Template";
import LoginForm from "../containers/auth/LoginForm";
import Slides from "../components/common/Slides";
import SlidesBox from "../components/common/SlidesBox";

const LoginPage = () => {
    return (
        <Template type="member">
             <SlidesBox>
                <Slides type="login"></Slides>
            </SlidesBox>
            <div>
                <LoginForm/>
            </div>
        </Template>
    );
};

export default LoginPage;