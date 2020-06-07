import React from "react";
import Template from "../components/common/Template";
import RegisterForm from "../containers/auth/RegisterForm";
import Slides from "../components/common/Slides";
import SlidesBox from "../components/common/SlidesBox";

const RegisterPage = () => {
    return (
        <Template type="member">
            <SlidesBox>
                <Slides type="register"></Slides>
            </SlidesBox>
            <div>
                <RegisterForm/>
            </div>
        </Template>
    );
};

export default RegisterPage;
