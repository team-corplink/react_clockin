import React from "react";
import Template from "../components/common/Template";
import Gnb from "../components/main/Gnb";
import Category from "../components/main/Category";
const StatsPage = ({match}) => {

    const category = [
        {
            id: 1,
            type: 'today',
            name: '오늘'
        },
        {
            id: 2,
            type: 'weekly',
            name: '주간'
        },

    ]

    return (
        <Template>
            <Gnb
                activeMenu="stats"
            />
            <div>
                <Category
                    type="stats"
                    category={category}
                    active={match.params.type}
                />
            </div>
        </Template>
    );
};

export default StatsPage;