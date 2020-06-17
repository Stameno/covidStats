import React from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import Home from "../screens/Home";
import ModalComponent from '../components/ModalComponent';
import Splash from '../screens/Splash';

export default function Routes() {

    let location = useLocation();

    let background = location.state && location.state.background;
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Splash}/>
                <Route path="/home" exact component={Home}/>
            </Switch>
            {background && <Route path="/country/:Slug" children={<ModalComponent />} />}
        </div>
    );
}
