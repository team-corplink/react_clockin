import React from "react";
import TodoTemplate from "../../components/todo/TodoTemplate";
import Category from "../../components/main/Category";

const TodoContainer = ({active}) => {

    const category = [
        {
            id: 1,
            Part: '업무',
            Color: 'red'
        },
        {
            id: 2,
            Part: '스터디',
            Color: 'yellow'
        },
        {
            id: 3,
            Part: '개인 여가',
            Color: 'green'
        },
    ];

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
        <>
            <Category
                type="todo"
                category={category}
                active={active}
            />
            <TodoTemplate todoList={todoList}>

            </TodoTemplate>
        </>
    );
};

export default TodoContainer;