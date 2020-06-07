import React from 'react';
import styled from 'styled-components';


const SlidesBox = ({children}) => {

    return (
        <StyledSlidesBox>{children}</StyledSlidesBox>
    );
};

export default SlidesBox;


const StyledSlidesBox = styled.div`
    /*공통*/
   display :flex;
   justify-content :center;
   align-items : center;
   padding : 30px;
`;
