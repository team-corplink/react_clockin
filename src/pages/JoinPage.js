import React from "react";
import Button from "../components/common/Button";
import Template from "../components/common/Template";
import SwitchContainer from "../containers/common/SwitchContainer";

const JoinPage = () => {
    return (
        <Template type="member">
            <div>dd</div>
            <div>
                <Button shape="square" color="blue">JOIN</Button>
                <Button shape="circle">업무</Button>
                <SwitchContainer onActive=""></SwitchContainer>
            </div>
        </Template>
    );
};

export default JoinPage;