import React from "react";
import {ThemeProvider} from "styled-components";
import Button from "../components/common/Button";
import palette from "../lib/styles/palette";
import Input from "../components/common/Input";
import Template from "../components/common/Template";

const JoinPage = () => {
    return (
        <>
            <ThemeProvider theme={{palette}}>
                <Template type="member">
                    <div>dd</div>
                    <div>
                        <Button shape="square" color="blue">JOIN</Button>
                        <Button shape="circle">업무</Button>
                    </div>
                </Template>
            </ThemeProvider>
        </>
    );
};

export default JoinPage;