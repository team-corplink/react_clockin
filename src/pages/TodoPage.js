import React from "react";
import Template from "../components/common/Template";
import Gnb from "../components/common/Gnb";
import Category from "../components/common/Category";
import {ThemeProvider} from "styled-components";
import palette from "../lib/styles/palette";

const TodoPage = () => {

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
        <ThemeProvider theme={{palette}}>
            <Template>
                <Gnb
                    activeMenu="todo"
                />
                <div>
                    <Category type="todo" category={category}></Category>
                </div>
            </Template>
        </ThemeProvider>
    );
};

export default TodoPage;