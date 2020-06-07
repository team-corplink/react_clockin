import React from "react";
import Template from "../components/common/Template";
import SwitchContainer from "../containers/common/SwitchContainer";
import RegisterForm from "../containers/auth/RegisterForm";
import Slides from "../components/common/Slides";
import SlidesBox from "../components/common/SlidesBox";

const RegisterPage = () => {
    return (
        <Template type="member">
            <SlidesBox>
                <Slides type="login"></Slides>
            </SlidesBox>
            <div>
                <SwitchContainer onActive=""></SwitchContainer>
            </div>
            <div>
                <RegisterForm/>
            </div>
        </Template>
    );
};

export default RegisterPage;
