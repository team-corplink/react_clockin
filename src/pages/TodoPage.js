import React from "react";
import Template from "../components/common/Template";
import Gnb from "../components/main/Gnb";
import Category from "../components/main/Category";

const TodoPage = ({match}) => {

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

    ]

    return (
        <Template>
            <Gnb
                activeMenu="todo"
            />
            <div>
                <Category
                    type="todo"
                    category={category}
                    active={match.params.type}
                />
            </div>
        </Template>
    );
};

export default TodoPage;