import React, {useEffect} from "react";
import styled, {css} from 'styled-components';
import Button from "./Button";
import {BsPlus} from "react-icons/bs";
import {useHistory} from 'react-router-dom';


const Category = ({type, category, active}) => {

    const history = useHistory();

    // 카테고리 첫 렌더링 시 최상위 메뉴를 보여줌
    useEffect(() => {
        const startUrl=(type == 'todo') ? category[0].id : category[0].type;
        history.push('/'+type+'/' + startUrl);
    },[]);

    // 버튼 클릭 시 페이지 이
    const moveCategory = (url) => {
        history.push(url);
    };

    return (
        <StyledCategory>
            {category.map((category) => {
                const {id, color, text, select} = {
                    id: category.id,
                    color: (type == 'todo') ? category.Color : 'blue',
                    text: (type == 'todo') ? category.Part : category.name,
                    select: (type == 'todo') ? category.id : category.type
                };
                return (
                    <Button
                        key={id}
                        color={active == select ? color : 'gray'}
                        shape="circle"
                        onclick={() => moveCategory('/' + type + '/' + select)}
                    >
                        {text}
                    </Button>
                );
            })}
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