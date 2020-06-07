import React from "react";
import Button from "../components/common/Button";
import Template from "../components/common/Template";
import SwitchContainer from "../containers/common/SwitchContainer";
import Slides from "../components/common/Slides";
import SlidesBox from "../components/common/SlidesBox";

const JoinPage = () => {
    return (
        <Template type="member">
            <SlidesBox>
                <Slides type="login"></Slides>
            </SlidesBox>
            <div>
                <Button shape="square" color="blue">JOIN</Button>
                <Button shape="circle">업무</Button>
                <SwitchContainer onActive=""></SwitchContainer>
            </div>
        </Template>
    );
};

export default JoinPage;
