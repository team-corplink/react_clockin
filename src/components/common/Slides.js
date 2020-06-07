import React from 'react';
import { Slide  } from 'react-slideshow-image';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const loginImages = [
    {
        'key': 1,
        'image': 'images/login_1.png',
        'desc': '당신은 시간을 어떻게 사용하고 있나요?',
    },
    {
        'key': 2,
        'image': 'images/login_2.png',
        'desc': '할일에 집중하지 못해 시간에 쫒기고 있진 않나요?',
    },
    {
        'key': 3,
        'image': 'images/login_3.png',
        'desc': '하루의 시간을 ClockIn 으로 관리해보세요.',
    },
    {
        'key': 4,
        'image': 'images/login_4.png',
        'desc': '당신의 시간를 당신이 컨트롤 할수 있도록.',
    },
  ];
   
  const joinImages = [
    {
        'key': 1,
        'image': 'images/login_1.png',
        'desc': 'join1',
    },
    {
        'key': 2,
        'image': 'images/login_2.png',
        'desc': 'join2',
    },
    {
        'key': 3,
        'image': 'images/login_3.png',
        'desc': 'join3',
    },
    {
        'key': 4,
        'image': 'images/login_4.png',
        'desc': 'join4',
    },
  ];

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
}
 
   
const SlideItem = ({image, desc}) => {
    return (
        <EachSlide className="each-slide">
            <div className="slide-image" style={{'backgroundImage': `url(${image})`}}></div>
            <div className="slide-content">
                <p>{desc}</p>
            </div>
        </EachSlide>
    );
};


const Slides = ({type}) => {
/* 슬라이드 이미지 타입을 정의 */
    const slideItems = {type}==='join'?joinImages:loginImages;

    return (
        <SlideContainer className="slide-container">
        <Slide {...properties}>
            {slideItems.map(slideItem => (
                <SlideItem key={slideItem.key} image={slideItem.image} desc={slideItem.desc}/>
            ))}
        </Slide>
    </SlideContainer>
    );
};

export default Slides;


const SlideContainer = styled.div`
   overflow : hidden;
   .react-slideshow-container + div.indicators > .each-slideshow-indicator{
    width: 12px;
    height: 12px;
    margin: 0 10px 10px;
    background : ${palette.gray_dark};
    transition : all .05s ease-in-out;
}
.react-slideshow-container + div.indicators > .each-slideshow-indicator.active{
    background : ${palette.blue};
    width : 24px;
    border-radius : 6px;
   }
`;

const EachSlide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

   .slide-image{
       width : 95%;
       height : 385px;
       background-size : contain;
       background-position : center;
       background-repeat : no-repeat;
   }
   .slide-content{
       text-align :center;
       font-size: 16px;
       color : ${palette.font_default};
   }
`;
