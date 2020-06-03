import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import TodoPage from "./pages/TodoPage";
import StatsPage from "./pages/StatsPage";

function App() {
    return (
        <>
            <Route component={LoginPage} path={['/','/login']} exact/>
            <Route component={JoinPage} path={'/join'} exact/>
            <Route component={TodoPage} path={'/todo'} exact/>
            <Route component={StatsPage} path={'/stats'} exact/>
        </>
    );
}

export default App;
