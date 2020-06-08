import React from "react";
import styled from 'styled-components';
import Todo from "./Todo";

const TodoTemplate = ({}) => {

    const todoList = [
        {
            id: 1,
            phone: '01038545168',
            title: 'API 기능 구현하기',
            memo: '',
            part: '1',
            timer: '06:31:18',
            createTime: '',
        },
        {
            id: 2,
            phone: '01038545168',
            title: '기획 회의',
            memo: '',
            part: '1',
            timer: '01:40:12',
            createTime: '',
        },
        {
            id: 3,
            phone: '01038545168',
            title: '기능 정의서 구현',
            memo: '',
            part: '1',
            timer: '02:10:03',
            createTime: '',
        },
    ];

    return (
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
    );
};

export default TodoTemplate;

const StyledTodoTemplate = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;