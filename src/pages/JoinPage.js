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
                        <Button shape="square">radius</Button>
                        <Button shape="circle">Button</Button>
                    </div>
                </Template>
            </ThemeProvider>
        </>
    );
};

export default JoinPage;