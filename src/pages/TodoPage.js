import React from "react";
import Template from "../components/common/Template";
import TodoContainer from "../containers/todo/TodoContainer";
import Gnb from "../components/main/Gnb";

const TodoPage = ({match}) => {

    return (
        <Template>
            <Gnb
                activeMenu="todo"
            />
            <div>
                <TodoContainer active={match.params.type}/>
            </div>
        </Template>
    );
};

export default TodoPage;