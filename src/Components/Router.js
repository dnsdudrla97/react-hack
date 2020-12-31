import React from "react";
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

const routeTree = () => (
    <Router>
        <Switch>
            {/* 해당 경로에 접근했을 때 어떤 componet가 구동될지 */}
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
            <Route path="/search" component={Search} />
            {/* 어느 페이지에 접근했을때 false를 내포할경우 / redirection */}
            <Redirect from="*" to="/" /> 
        </Switch>
    </Router>
);


export default routeTree;