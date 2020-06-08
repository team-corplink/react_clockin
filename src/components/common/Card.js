import React from 'react';
import styled, {css} from 'styled-components';

const Card = ({title,time, layout, size, color}) => {
    return (
        <StyledCard
            color={color}
            layout={layout} size={size}>
                <div className="title">
                    {title}
                </div>
                <div className="time">
                    {time}
                    {size!=='long'&&<span>시간</span>}
                </div>
        </StyledCard>
    );
};

Card.defaultProps = {
    layout: 'two',
    color: 'blue',
    size : 'midium',
}
export default Card;

const colorStyles = css`
 /*색상*/
 ${({theme, color}) => {
    const selectColor = theme.palette[color];
    return css`
            background : ${selectColor};
        `
}}
`
/*모양*/
const layouts = {
   two : {
        flexDirection : 'column', 
    },
    one: {
        flexDirection : 'row', 
    }
}

const layountStyles = css`
     /*크기*/
   ${({layout}) => css`
        flex-direction : ${layouts[layout].flexDirection};
       
   `}
 
`


/*모양*/
const sizes = {
    large: {
        padding : '13px',
        minWidth: '100%',
    },
    midium : {
        padding : '5px 10px 10px',
        minWidth: '8rem',
    },
    small: {
        padding : '5px',
        minWidth: '5rem',
    },
    long: {
        padding : '5px',
        minWidth: '8rem',
     }
 }


 const sizesStyles = css`
 /*크기*/
${({size}) => css`
    min-width : ${sizes[size].minWidth};
    padding :  ${sizes[size].padding};
`}

`

const StyledCard = styled.div`
    /*공통*/
    display : inline-flex;
    color : #fff;
    justify-content :space-between;
    align-items : center;
    border-radius : 10px;

    /*색상*/
    ${colorStyles}

    /*모양*/
    ${layountStyles}

    ${sizesStyles}

    /*기타*/
    & + & {
        margin-left : 1rem;
    }
    > div{
        width : 100%;
   
    }
    .title{
            text-align : left;
        }
    .time{
        text-align : right;
        font-size :1.5rem;
        font-weight : bold;

        >span{
            font-weight: 400;
            font-size: 11px;
            margin-left: 5px;
        }
    }
`;
