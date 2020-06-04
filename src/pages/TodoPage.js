import React from "react";
import Template from "../components/common/Template";
import Gnb from "../components/common/Gnb";

const TodoPage = () => {
    return (
        <Template>
            <Gnb
                activeMenu="todo"
            />
            <div>기록</div>
        </Template>
    );
};

export default TodoPage;