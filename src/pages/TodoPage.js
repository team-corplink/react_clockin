import React from "react";
import Template from "../components/common/Template";
import Gnb from "../components/main/Gnb";
import TodoContainer from "../containers/todo/TodoContainer";

const TodoPage = ({match}) => {

    return (
        <Template>
            <Gnb
                activeMenu="todo"
            />
            <TodoContainer active={match.params.type}/>
        </Template>
    );
};

export default TodoPage;