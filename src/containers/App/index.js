import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import HomePage from '../HomePage/Loadable';

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const NotFound = () => <h2>Not Found</h2>;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <Switch>
                    <Redirect exact from="/notfound" to="/" />
                    <Route exact path="/" component={HomePage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </AppWrapper>
        );
    }
}

export default App;
