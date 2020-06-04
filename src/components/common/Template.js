import React from "react";
import styled, {css} from "styled-components";

const Template = ({type, children}) => {
    return (
        <StyledTemplate type={type}>
            {children}
        </StyledTemplate>
    );
};

Template.defaultProps = {
    type: 'main'
};

export default Template;

const sizes = {
    main: {
        width: '250px',
    },
    member: {
        width: '50%',
    }
}

const sizeStyles = css`
    ${({type}) => css`
        width: ${sizes[type].width};
        `}
`;

const StyledTemplate = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    >* {
        height:100%;
    }
    
    >*:first-child{
        background-color: #242525;
        ${sizeStyles}
    }
    
    >*:last-child{
        flex: 1;
    }
`;