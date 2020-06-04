import React from "react";
import {ThemeProvider} from "styled-components";
import Button from "../components/common/Button";
import palette from "../lib/styles/palette";
const JoinPage = () => {
    return (
        <>
            <ThemeProvider theme={{palette}}>
                <Button shape="square">radius</Button>
                <Button shape="circle" >Button</Button>
            </ThemeProvider>
        </>
    );
};

export default JoinPage;