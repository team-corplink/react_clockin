import React from "react";
import styled, {css} from "styled-components";

const Profile = ({children, profile}) => {
    return (
        <StyledProfile>
            <StyledImage imagePath={profile.image}/>
            <div>
                <p className="nickName">{profile.nickName}</p>
                <p className="phone">{profile.phone}</p>
            </div>
        </StyledProfile>
    );
};

export default Profile;

const StyledImage = styled.div`
        width: 25px;
        height: 25px;
        border-radius: 12.5px;
        margin-right: 12.5px;
        ${({imagePath}) => {
        return css`
                background: url('${imagePath}') no-repeat center 0;
                `;
}}
`;

const StyledProfile = styled.div`
    width: 100%;
    padding: 16px 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    
    p {
        margin: 0;
    }
    
    .nickName {
        margin-bottom: 5px;
    }
    
    .phone {
        color: #939393;
        font-size: 12px;
    }
`;