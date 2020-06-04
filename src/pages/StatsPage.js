import React from "react";
import Template from "../components/common/Template";
import Gnb from "../components/common/Gnb";

const StatsPage = () => {
    return (
        <Template>
            <Gnb
                activeMenu="stats"
            />
            <div>통계</div>
        </Template>
    );
};

export default StatsPage;