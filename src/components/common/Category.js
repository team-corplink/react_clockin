import React from "react";
import styled, {css} from 'styled-components';
import Button from "./Button";
import {BsPlus} from "react-icons/bs";
import {useHistory} from 'react-router-dom';


const Category = ({type, category}) => {

    const history = useHistory();

    const moveCategory = (id) => {
        history.push('/todo/' + id);
    }

    return (
        <StyledCategory>
            {category.map(category => (
                <Button
                    key={category.id}
                    color={category.Color}
                    shape="circle"
                    onclick={() => moveCategory(category.id)}
                >
                    {category.Part}
                </Button>
            ))}
            {type == 'todo' ?
                (
                    <Button
                        color="gray"
                        shape="circle">
                        <BsPlus/>
                    </Button>
                )
                : ''}
        </StyledCategory>
    );
};

export default Category;

const StyledCategory = styled.div`
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;   
`;