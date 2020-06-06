import React from "react";
import Template from "../components/common/Template";
import SwitchContainer from "../containers/common/SwitchContainer";
import RegisterForm from "../containers/auth/RegisterForm";

const RegisterPage = () => {
    return (
        <Template type="member">
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