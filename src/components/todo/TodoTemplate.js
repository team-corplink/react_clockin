import React from "react";
import styled from 'styled-components';
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoTemplate = ({todoList}) => {

    return (
        <StyledTodoForm>
            <StyledTodoTemplate>
                <div>
                    {todoList.map((todo) => {
                        return <Todo key={todo.id} todo={todo}/>;
                    })}
                </div>
                <div>
                    <Todo type="write"/>
                </div>
            </StyledTodoTemplate>
            <TodoForm/>
        </StyledTodoForm>
    );
};

export default TodoTemplate;

const StyledTodoForm=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const StyledTodoTemplate = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;