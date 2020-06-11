import React from "react";
import styled from 'styled-components';
import {AiOutlineSetting,AiOutlinePlus} from "react-icons/ai";
import {lighten} from 'polished';

const Todo = ({type, todo}) => {
    return (
        <StyledTodo className={type != 'todo' && 'write'}>
            {type == 'todo' ? (
                <>
                    <TodoTimer>
                        {todo.timer}
                    </TodoTimer>
                    {todo.title}
                    <button type="button" className="setting">
                        <AiOutlineSetting/>
                    </button>
                </>
            ) : (
                <>
                    <AiOutlinePlus/>
                    Clock In
                </>
            )}
        </StyledTodo>
    );
};

Todo.defaultProps = {
    type: 'todo',
}

export default Todo;

const StyledTodo = styled.div`
    width: 100%;
    height: 3.5rem;
    padding: 0.7rem 1.4rem;
    border-radius: 10px;
    background-color: #242426;
    margin-bottom: 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    
    .setting {
        border: 0;
        background-color: transparent;
        margin-left: auto;
        font-size: 1.4rem;
        color: #939393;
        padding: 0;
        cursor: pointer;
    }
    
    &.write{
        svg{
            margin-right: 0.5rem;
        }
    }
    
    &:hover{
        background : ${lighten(0.05, '#242426')};
    }
`;

const TodoTimer = styled.span`
    margin-right: 1rem;
    font-weight: bold;
`;