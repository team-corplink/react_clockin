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
            <Route component={LoginPage} path={['/', '/login']} exact/>
            <Route component={JoinPage} path={'/join'} exact/>
            <Route component={TodoPage} path={['/todo','/todo/:type([0-9]+)']} exact/>
            <Route component={StatsPage} path={['/stats','/stats/:type([a-z]+)']} exact/>
        </>
    );
}

export default App;
